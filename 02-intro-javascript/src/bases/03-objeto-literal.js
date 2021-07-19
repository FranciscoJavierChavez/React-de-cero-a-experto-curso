const persona = {
    nombre: 'Francisco',
    apellido: 'Chavez',
    edad: 24,
    direccion: {
        ciudad: 'Puerto Vallarta',
        estado: 'Jalisco',
        pais: 'Mexico',
    }
}

//console.table(persona);
console.log(persona);

const persona2 = { ...persona };
persona2.nombre = 'Hector';
console.log(persona2);