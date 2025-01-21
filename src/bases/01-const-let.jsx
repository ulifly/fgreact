//variable  constantes

const nombre = 'Ulises';
const apellido = 'Desentis';
let edad = 23;

console.log(nombre, apellido, edad);

if (true) {
  const nombre = 'Ironman';
  console.log(`dentro del scope ${nombre}`);
}

console.log(`fuera del scope ${nombre}`);

