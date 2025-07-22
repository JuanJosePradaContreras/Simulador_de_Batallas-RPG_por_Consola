export default class PocionVida {
  constructor() {
    this.nombre = 'Poción de Vida';
    this.descripcion = 'Recupera 30 puntos de salud.';
    this.tipo = 'pocion';
    this.consumible = true;
  }

  aplicar(personaje) {
    const curacion = 30;
    const saludAntes = personaje.salud;
    personaje.salud = Math.min(personaje.salud + curacion, personaje.saludMaxima);
    console.log(
      `🧪 ${personaje.nombre} usó una ${this.nombre} y recuperó ${personaje.salud - saludAntes} puntos de salud.`
    );
  }
}
