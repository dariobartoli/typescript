"use strict";
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setTicket(ticket) {
        this.ticket = ticket;
    }
    getTicket() {
        return this.ticket;
    }
    sortear() {
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }
}
//En TypeScript, un tipo genérico (o "generic") es una característica que permite crear componentes, funciones o clases que pueden trabajar
//con diferentes tipos de datos de manera flexible y segura. Los tipos genéricos permiten escribir código reutilizable que puede adaptarse 
//a múltiples tipos sin perder la seguridad de tipos.
let sorteo = new Sorteo("pedro pascal");
sorteo.setTicket(7);
console.log(sorteo.sortear());
let sorteo2 = new Sorteo("pedro pascal");
sorteo2.setTicket('A7');
console.log(sorteo2.sortear());
