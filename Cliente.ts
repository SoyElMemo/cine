import { Sala } from './Sala';
import { ProductoComestible } from './ProductoComestible';

export class Cliente {
nombre: string;
sala: Sala;
productos: ProductoComestible[];
asiento: string | null;

constructor(nombre: string, sala: Sala, productos: ProductoComestible[]) {
    this.nombre = nombre;
    this.sala = sala;
    this.productos = productos;
    this.asiento = sala.asignarAsiento();
}

retornarDatos(): string {
    return `Nombre: ${this.nombre}\n` +
    `${this.sala.retornarDatos()}\n` +
    `Asiento: ${this.asiento}\n` +
    `Aperitivos Gratis: ${this.sala.retornarAperitivos()}\n` +
    `Productos a consumir: ${this.productos.map(p => p.nombre).join(', ')}`;
}
}
