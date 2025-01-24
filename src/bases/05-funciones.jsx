
function saludar(nombre) {
  return `Hola ${nombre}`;
};

const despedirse = (nombre) => {
  return `Adios ${nombre}`;
}
// misma función en una linea cuando la función tiene un return se puede hacer así para simplificar

const despedirse2 = (nombre) => `Adios ${nombre}`;


console.log(saludar('Ulises'));
console.log(despedirse('Ulises'));
console.log(despedirse2('Alfredo'));

const getuser = () => {
  return {
    uid: 'ABC123',
    username: 'El_Papi150',
  }
}

// tambien se puede simplificar pero necesita paréntesis para regresar un objeto
const getUser2 = () => ({
  uid: 'ABC123',
  username: 'El_Papi150',
});

console.log(getuser());
console.log(getUser2());

// Tarea
// 1. Transformar a una función de flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas

// function getUsuarioActivo(nombre) {
//   return {
//     uid: 'ABC567',
//     username: nombre,
//   }
// }

const getUsuarioActivo = (nombre) => ({
  uid: 'ABC567',
  username: nombre,
});

const usuarioActivo = getUsuarioActivo('Ulises');
console.log(usuarioActivo);