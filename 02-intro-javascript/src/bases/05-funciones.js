//funciones en JS

//const saludar = function ( nombre ){
//    return `Hola, ${nombre}`;
//}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) =>  `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;
//console.log( Saludar('Goku') );

console.log(saludar2('Francisco'));
console.log(saludar3('Hector'));
console.log(saludar4());



/*
funciones usadas en react, esta que está comentada es la misma
que está abajo pero mas simplificada

const getUser = () => {
    return {
        uid: 'ABCD123',
        username: 'Francisco javier'
    }
}*/

const getUser = () =>
    ({
        uid: 'ABCD123',
        username: 'Francisco javier'
    });

    const user = getUser();
    console.log( user );

//Tarea
// 1. transformar a una funcion de flecha la sifuiente funcion
// 2. tiene que retornar un objeto implicito
// 3. pruebas
/*function getUsuarioActivado (nombre){
    return{
        uid: 'ABCDEF123',
        username: nombre
    }
};
 const usuarioActivo = getUsuarioActivado('Francisco');
 console.log( usuarioActivo );*/

const getUsuarioActivado = (nombre) => 
({
        uid: 'ABCDEF123',
        username: nombre
});
const usuarioActivo = getUsuarioActivado('Francisco');
console.log(usuarioActivo);