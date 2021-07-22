//Desestructuración
// Asignacion Desestructurante

const persona = {
    nombre: 'Francisco',
    edad: 24,
    clave: 'yankee'
};

//const { nombre, edad, clave } = persona;

//console.log( nombre );
//console.log( edad );
//console.log( clave );

const retornaPersona = ({ clave, nombre, edad, rango = 'Capitan'} ) => {
    //console.log( nombre, edad, rango );
    return{
        nombreClave: clave,
        anios: edad,
        latIng: {
            lat: 14.12121,
            lng: -12.2323
        }
    }
}

const {nombreClave, anios, latIng:{ lat, lng}} = retornaPersona( persona );
console.log( nombreClave, anios );
console.log( lat,lng );