import { Sala } from './Sala';
import { Pelicula } from './Pelicula';
import { Cliente } from './Cliente';

export class Cine {
nombre: string;
direccion: string;
salas: Sala[] = [];
peliculas: Pelicula[] = [];
clientes: Cliente[] = [];

constructor(nombre: string, direccion: string) {
    this.nombre = nombre;
    this.direccion = direccion;
}

agregarSala(sala: Sala): void {
    this.salas.push(sala);
}

agregarPelicula(pelicula: Pelicula): void {
    this.peliculas.push(pelicula);
}

registrarCliente(cliente: Cliente): void {
    this.clientes.push(cliente);
}

mostrarClientes(): void {
    console.log(`\nClientes del Cine ${this.nombre}:`);
    this.clientes.forEach((cliente) => {
    console.log(cliente.retornarDatos());
    console.log('----------------------');
    });
}
}
