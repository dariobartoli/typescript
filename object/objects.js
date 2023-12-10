"use strict";
let developer = {
    name: "dario bartoli",
    age: 29,
    technologies: ["react", "java", "node"],
    working: true
};
//typescript infiere los tipos de datos dentro del objeto, tiene un tipado interno
//podemos sobreescribirlo pero respetando las keys y los tipos de dato de cada una
developer = {
    name: "pablo oka",
    age: 26,
    technologies: ["js"],
    working: false
};
console.log(developer);
let desarrollador = {
    nombre: "ricardo perez",
    edad: 31,
    tecnologias: ["css", "html"],
    trabajando: true
};
let desarrollador2 = {
    nombre: "jose lopez",
    edad: 21,
    tecnologias: ["css", "html", "js", "vue"],
    trabajando: false
};
let desarrollador3 = {
    nombre: "maria becerra",
    edad: 26,
    tecnologias: ["css", "html", "js", "vue"],
};
console.log(desarrollador);
console.log(desarrollador2);
console.log(desarrollador3);
let programador = {
    nombre: "ricardo perez",
    edad: 31,
    tecnologias: ["css", "html"],
    trabajando: true
};
let programador2 = {
    nombre: "maria becerra",
    edad: 26,
    tecnologias: ["css", "html", "js", "vue"],
};
//hasta hora sigue trabajando igual que un type
function enviarCv(programador) {
    console.log(`este cv es de ${programador.nombre}`);
}
//si pasaramos un objeto que no sea de programador, pero tenga justo la key nombre, seguira funcionando.
//distinto seria si ese objeto tuviera una key apellido y no nombre, tirara error porque la interfaz Programador no tiene esa key
console.log(enviarCv(programador2));
//CLASES
class Pelicula {
    //hay que crear un constructor y no poner ?, ni argumento vacio. Entonces instanciamos con un constructor
    proyectarEnCine() {
        console.log(`La pelicula ${this.nombre} está siendo proyectada`);
    }
    constructor(nombre, protagonistas) {
        this.nombre = "titanic"; //tirara error porque hay que inicializar, pondremos un ? para solucionarlo o poniendo el argumento vacio
        this.nombre = nombre,
            this.protagonistas = protagonistas;
    }
}
//ponemos new para crear una instancia
const pelicula = new Pelicula('Barbie', ['Barbie', 'Ken']);
const pelicula2 = new Pelicula('Shrek', ['Shrek', 'Fiona', 'Burro']);
console.log(pelicula);
console.log(pelicula2);
pelicula.proyectarEnCine();
