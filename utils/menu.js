// utils/menu.js
import inquirer from 'inquirer';
import chalk from 'chalk';
import figlet from 'figlet';
import boxen from 'boxen';

import { crearPersonaje } from '../classes/personaje.js';
import iniciarBatalla from '../services/batalla.js';
import { guardarPartida, cargarPartida } from '../services/guardado.js';

// Variable global del personaje (se mantiene entre menús)
let personaje = null;

// Mostrar título con estilo
function mostrarTitulo() {
  console.clear();
  const titulo = figlet.textSync('RPG CLI', { horizontalLayout: 'default' });
  console.log(
    boxen(titulo, {
      padding: 1,
      margin: 1,
      borderStyle: 'round',
      borderColor: 'green',
    })
  );
}

// Menú principal interactivo
async function mostrarMenu() {
  mostrarTitulo();

  const { opcion } = await inquirer.prompt([
    {
      type: 'list',
      name: 'opcion',
      message: '¿Qué deseas hacer?',
      choices: [
        '1. Crear nuevo personaje',
        '2. Iniciar batalla',
        '3. Ver inventario',
        '4. Guardar partida',
        '5. Cargar partida',
        '6. Salir del juego',
      ],
    },
  ]);

  switch (opcion) {
    case '1. Crear nuevo personaje':
      personaje = await crearPersonaje();
      break;

    case '2. Iniciar batalla':
      if (!personaje) {
        console.log(chalk.red('\nPrimero debes crear un personaje.\n'));
      } else {
        await iniciarBatalla(personaje);
      }
      break;

    case '3. Ver inventario':
      if (!personaje) {
        console.log(chalk.red('\nNo tienes personaje aún.\n'));
      } else {
        personaje.inventario.mostrarInventario();
      }
      break;

    case '4. Guardar partida':
      if (!personaje) {
        console.log(chalk.red('\nNo hay personaje para guardar.\n'));
      } else {
        guardarPartida(personaje);
      }
      break;

    case '5. Cargar partida':
      personaje = cargarPartida();
      break;

    case '6. Salir del juego':
      console.log(chalk.yellow('\n¡Gracias por jugar!\n'));
      process.exit(0);
      break;
  }

  await pausa();
  await mostrarMenu(); // Mostrar el menú otra vez (loop)
}

// Función para pausar después de cada acción
async function pausa() {
  await inquirer.prompt([
    {
      type: 'input',
      name: 'pausa',
      message: 'Presiona ENTER para continuar...',
    },
  ]);
}

export default mostrarMenu;
