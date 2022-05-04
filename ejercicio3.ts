// EJERCICIO 3 - Validar Altura - Clase4 viernes 29 abril

/* EJERCICIO EN LÍNEA
rotulo.innerHTML = "Indique la altura de la persona: ";
*/

/* •Desarrolle un algoritmo que, de acuerdo a la
altura de una persona, decida si puede entrar a
un juego en un parque de diversiones.
•Para poder subirse a la montaña rusa debe medir 130 cm o más. */

let dato1 = document.getElementById("dato1");
let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");

rotulo1.innerHTML = "Ingrese SU ALTURA";

btnEnviar.addEventListener("click", () => {
  let altura: number = Number(dato1.value);

  if (altura >= 130) {
    console.log("¡Bienvenido! Usted puede subir al juego");
  } else {
    console.log("¡No puede subir al juego! Debe medir 130 cm o más ");
  }
});
