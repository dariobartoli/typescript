let developer = {
    name: "dario bartoli",
    age: 29,
    technologies: ["react", "java", "node"],
    working: true
}

//typescript infiere los tipos de datos dentro del objeto, tiene un tipado interno
//podemos sobreescribirlo pero respetando las keys y los tipos de dato de cada una
 
developer = {
    name: "pablo oka",
    age: 26,
    technologies: ["js"],
    working: false
}

console.log(developer);

//TYPE personalizado
//se puede usar para muchas cosas, una es para tipar objetos
//type, interfaces, class van siempre en mayuscula

type Desarrollador = {
    nombre: string,
    edad: number,
    tecnologias: string[],
    trabajando?: boolean | null // se puede poner ?, para que la key sea opcional, por si no siempre el backend nos mande esa propiedad, o si fuera null o undefined
}

let desarrollador: Desarrollador = {
    nombre: "ricardo perez",
    edad: 31,
    tecnologias: ["css", "html"],
    trabajando: true
}

let desarrollador2: Desarrollador = {
    nombre: "jose lopez",
    edad: 21,
    tecnologias: ["css", "html", "js", "vue"],
    trabajando: false
}
let desarrollador3: Desarrollador = {
    nombre: "maria becerra",
    edad: 26,
    tecnologias: ["css", "html", "js", "vue"],
}

console.log(desarrollador);
console.log(desarrollador2);
console.log(desarrollador3);

//Interfaces, son parecidas al type pero se usan para ocaciones distintas

interface Programador{
    nombre: string,
    edad: number,
    tecnologias: string[],
    trabajando?: boolean | null
}

let programador: Programador = {
    nombre: "ricardo perez",
    edad: 31,
    tecnologias: ["css", "html"],
    trabajando: true
}

let programador2: Programador = {
    nombre: "maria becerra",
    edad: 26,
    tecnologias: ["css", "html", "js", "vue"],
}
 //hasta hora sigue trabajando igual que un type

function enviarCv( programador: Programador){
    console.log(`este cv es de ${programador.nombre}`);  
}
//si pasaramos un objeto que no sea de programador, pero tenga justo la key nombre, seguira funcionando.
//distinto seria si ese objeto tuviera una key apellido y no nombre, tirara error porque la interfaz Programador no tiene esa key


console.log(enviarCv(programador2));

//CLASES

class Pelicula{
    nombre: string = "titanic"; //tirara error porque hay que inicializar, pondremos un ? para solucionarlo o poniendo el argumento vacio
    protagonistas?: string[];
    //hay que crear un constructor y no poner ?, ni argumento vacio. Entonces instanciamos con un constructor

    proyectarEnCine(){
        console.log(`La pelicula ${this.nombre} está siendo proyectada`);
    }
    constructor(nombre:string, protagonistas:string[]){
        this.nombre = nombre,
        this.protagonistas = protagonistas
    }
}

//ponemos new para crear una instancia

const pelicula = new Pelicula('Barbie', ['Barbie', 'Ken'])
const pelicula2 = new Pelicula('Shrek', ['Shrek', 'Fiona', 'Burro'])
console.log(pelicula);
console.log(pelicula2);
pelicula.proyectarEnCine()