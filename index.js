// index.js — Punto de entrada de la aplicación RPG por consola

import inquirer from 'inquirer';
import chalk from 'chalk';
import figlet from 'figlet';
import boxen from 'boxen';

import Guerrero from './classes/guerrero.js';
import Arquero from './classes/arquero.js';
import Mago from './classes/mago.js';
import Enemigo from './classes/enemigo.js';
import Inventario from './classes/inventario.js';
 import PocionVida from './classes/pocionVida.js';
 
import BatallaService from './services/batalla.js';
import GuardadoService from './services/guardado.js';


// Lista en memoria de personajes creados en la sesión
let personajes = [];

/**
 * Muestra el título del juego con arte ASCII
 */
function mostrarBanner() {
  console.clear();
  console.log(
    boxen(
      chalk.magentaBright(
        figlet.textSync('RPG Console', { horizontalLayout: 'full' })
      ),
      { padding: 1, borderStyle: 'double', borderColor: 'yellow' }
    )
  );
}

/**
 * Solicita al usuario sus opciones principales
 */
async function mainMenu() {
  mostrarBanner();

  const { opcion } = await inquirer.prompt([
    {
      type: 'list',
      name: 'opcion',
      message: 'Selecciona una opción:',
      choices: [
        '1) Crear personaje',
        '2) Ver personajes',
        '3) Iniciar batalla',
        '4) Ver inventario',
        '5) Guardar personajes',
        '6) Cargar personajes',
        '0) Salir'
      ]
    }
  ]);

  switch (opcion[0]) {
    case '1':
      await crearPersonaje();
      break;
    case '2':
      mostrarPersonajes();
      break;
    case '3':
      await iniciarBatalla();
      break;
    case '4':
      await gestionarInventario();
      break;
    case '5':
      await GuardadoService.guardarPersonaje(personajes);
      break;
    case '6':
      personajes = await GuardadoService.cargarPersonajes();
      break;
    case '0':
      console.log(chalk.green('¡Gracias por jugar!'));
      process.exit(0);
  }

  await pausa();
  await mainMenu(); // loop
}

/**
 * Pausa hasta que el usuario presione Enter
 */
async function pausa() {
  await inquirer.prompt([
    { type: 'input', name: 'enter', message: 'Presiona Enter para continuar...' }
  ]);
}

/**
 * Crea un nuevo personaje preguntando nombre y clase
 */
async function crearPersonaje() {
  const { nombre, clase } = await inquirer.prompt([
    { type: 'input', name: 'nombre', message: 'Nombre del personaje:' },
    {
      type: 'list',
      name: 'clase',
      message: 'Selecciona la clase:',
      choices: ['Guerrero', 'Arquero', 'Mago']
    }
  ]);

  let pj;
  switch (clase) {
    case 'Guerrero':
      pj = new Guerrero(nombre);
      break;
    case 'Arquero':
      pj = new Arquero(nombre);
      break;
    case 'Mago':
      pj = new Mago(nombre);
      break;
  }

  personajes.push(pj);
  console.log(chalk.green(`Personaje ${nombre} el ${clase} creado.`));
}

/**
 * Muestra la lista de personajes en memoria
 */
function mostrarPersonajes() {
  if (personajes.length === 0) {
    console.log(chalk.yellow('No hay personajes creados.'));
    return;
  }
  personajes.forEach((p, i) => {
    console.log(chalk.cyan(`${i + 1}) ${p.nombre} - ${p.clase} (Nivel ${p.nivel})`));
  });
}

/**
 * Inicia una batalla entre un personaje elegido y un enemigo aleatorio
 */
async function iniciarBatalla() {
  if (personajes.length === 0) {
    console.log(chalk.red('Crea un personaje primero.'));
    return;
  }

  const { idx } = await inquirer.prompt([
    {
      type: 'list',
      name: 'idx',
      message: 'Selecciona tu personaje:',
      choices: personajes.map((p, i) => ({
        name: `${p.nombre} - Nivel ${p.nivel}`,
        value: i
      }))
    }
  ]);
  const jugador = personajes[idx];

  const tipos = ['Goblin', 'Esqueleto', 'Orco'];
  const tipo = tipos[Math.floor(Math.random() * tipos.length)];
  const nivel = jugador.nivel + Math.floor(Math.random() * 3);
  const enemigo = new Enemigo(tipo, nivel);

  await BatallaService.iniciarBatalla(jugador, enemigo);

  if (jugador.salud > 0) {
    jugador.subirNivel();
  }
}

/**
 * Gestiona el menú de inventario de un personaje
 */
async function gestionarInventario() {
  if (personajes.length === 0) {
    console.log(chalk.red('Crea un personaje primero.'));
    return;
  }

  const { idx } = await inquirer.prompt([
    {
      type: 'list',
      name: 'idx',
      message: 'Selecciona personaje:',
      choices: personajes.map((p, i) => ({ name: p.nombre, value: i }))
    }
  ]);
  const pj = personajes[idx];

  if (!pj.inventario || !(pj.inventario instanceof Inventario)) {
    pj.inventario = new Inventario();
    pj.inventario.agregar(new PocionVida());
  }

  const { acc } = await inquirer.prompt([
    {
      type: 'list',
      name: 'acc',
      message: `Inventario de ${pj.nombre}:`,
      choices: ['Listar objetos', 'Usar objeto', 'Eliminar objeto', 'Volver']
    }
  ]);

  switch (acc) {
    case 'Listar objetos':
      pj.inventario.listar();
      break;
    case 'Usar objeto':
      await usarObjeto(pj);
      break;
    case 'Eliminar objeto':
      await eliminarObjeto(pj);
      break;
  }
}

/**
 * Usa un objeto del inventario
 */
async function usarObjeto(pj) {
  pj.inventario.listar();
  const { idx } = await inquirer.prompt([
    {
      type: 'input',
      name: 'idx',
      message: 'Número de objeto a usar:',
      validate: i => i > 0 && i <= pj.inventario.objetos.length || 'Índice inválido'
    }
  ]);
  pj.inventario.usar(idx - 1, pj);
}

/**
 * Elimina un objeto del inventario
 */
async function eliminarObjeto(pj) {
  pj.inventario.listar();
  const { idx } = await inquirer.prompt([
    {
      type: 'input',
      name: 'idx',
      message: 'Número de objeto a eliminar:',
      validate: i => i > 0 && i <= pj.inventario.objetos.length || 'Índice inválido'
    }
  ]);
  pj.inventario.eliminar(idx - 1);
}

// Iniciar el juego
mainMenu();
