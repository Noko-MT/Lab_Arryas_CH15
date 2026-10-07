// ============================================================
// Ejercicio 04 · Platos por categoría
// ============================================================
// El mesero quiere ver solo las bebidas, o solo los postres.
//
// Crea la función platosPorCategoria(menu, categoria) que retorne
// un array NUEVO con los platos cuya categoria sea EXACTAMENTE
// el texto recibido (mayúsculas y tildes cuentan).
//
// Regla: aquí no importa si el plato está disponible o no:
// se filtra solo por categoría.
//
// Ejemplos (con el menú del README):
//   platosPorCategoria(menu, "bebida") → [Limonada de coco, Jugo de lulo]
//   platosPorCategoria(menu, "fuerte") → [Bandeja paisa, Ajiaco]
//   platosPorCategoria(menu, "Bebida") → []   ("Bebida" ≠ "bebida")
//
// Pista: igual que el ejercicio 03, pero la condición usa
// el segundo parámetro y ===.
// ============================================================


// const menu = [
//   { nombre: "Bandeja paisa", precio: 32000, categoria: "fuerte", disponible: true },
//   { nombre: "Ajiaco", precio: 28000, categoria: "fuerte", disponible: false },
//   { nombre: "Limonada de coco", precio: 9000, categoria: "bebida", disponible: true },
//   { nombre: "Jugo de lulo", precio: 7000, categoria: "bebida", disponible: true },
//   { nombre: "Postre de natas", precio: 11000, categoria: "postre", disponible: true },
// ];

function platosPorCategoria(menu, categoria) {
  // Tu código aquí
  const platos = [];
  for (let i = 0; i < menu.length; i++) {
    if (categoria === menu[i].categoria) {
      platos.push(menu[i]);
      //platos.push(menu[i].nombre); // con este se muestra directamente la salida que se da ede ejemplo
    }
  }
  return platos
}

// console.log(platosPorCategoria(menu, "bebida"));// [Limonada de coco, Jugo de lulo] No deberia esta ser la salida?, si se guardan unicamentre los nombre, pero el test no pasa
// console.log(platosPorCategoria(menu, "fuerte"));// [Bandeja paisa, Ajiaco]
// console.log(platosPorCategoria(menu, "Bebida"));//[] 

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { platosPorCategoria };
