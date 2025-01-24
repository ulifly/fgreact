const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  clave: 'Ironman',
  rango: 'Coronel',
}


// const { nombre, edad, apellido } = persona;

// console.log(nombre, apellido, edad);
// console.log(persona.apellido) 
// console.log(persona.edad) 


// se puede desestructurar en el argumento de la funcion
const useContext = ({ clave, edad, }) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1232,
      lng: -12.3232
    }
  }
}

const { nombreClave, anios, latlng: { lat, lng } } = useContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);