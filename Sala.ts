import { Pelicula } from './Pelicula';

export class Sala {
nombre: string;
pelicula: Pelicula;
private asientosDisponibles: string[] = [];
private aperitivosGratis: string[] = [];

constructor(nombre: string, pelicula: Pelicula, cantidadAsientos: number, aperitivos: string[]) {
    this.nombre = nombre;
    this.pelicula = pelicula;
    this.aperitivosGratis = aperitivos;
    for (let i = 1; i <= cantidadAsientos; i++) {
    this.asientosDisponibles.push(`Asiento ${i}`);
    }
}

asignarAsiento(): string | null {
    return this.asientosDisponibles.shift() ?? null;
}

retornarAperitivos(): string {
    return this.aperitivosGratis.join(', ');
}

retornarDatos(): string {
    return `Sala: ${this.nombre}, Película: ${this.pelicula.titulo}`;
}
}
