const persona = {
  nombre: 'Juan',
  apellido: 'Perez',
  edad: 45,
  direccion: {
    ciudad: 'Mexico',
    zip: 123456,
    lat: 14.3232,
    lng: 34.923332
  }
};


const persona2 = { ...persona };

persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);