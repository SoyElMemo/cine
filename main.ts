import { Cine } from './Cine';
import { Pelicula } from './Pelicula';
import { Sala } from './Sala';
import { ProductoComestible } from './ProductoComestible';
import { Cliente } from './Cliente';

// Crear cine
const cine = new Cine('Cinemark', 'Av. Siempre Viva 123');

// Crear películas
const johnWick = new Pelicula('John Wick 3');
const aladdin = new Pelicula('Aladdin');
const avengers = new Pelicula('Avengers');
const liloStitch = new Pelicula('Lilo & Stitch');

// Agregar películas al cine
cine.agregarPelicula(johnWick);
cine.agregarPelicula(aladdin);
cine.agregarPelicula(avengers);
cine.agregarPelicula(liloStitch);

// Crear salas
const salaA = new Sala('Sala A', johnWick, 5, ['Agua', 'Servilletas']);
const salaB = new Sala('Sala B', aladdin, 3, ['Azúcar', 'Cucharas']);

// Agregar salas al cine
cine.agregarSala(salaA);
cine.agregarSala(salaB);

// Crear clientes
const cliente1 = new Cliente('Carlos Pérez', salaA, [
new ProductoComestible('Canguil'),
new ProductoComestible('Bebida')
]);

const cliente2 = new Cliente('María López', salaB, [
new ProductoComestible('Hot-dog')
]);

// Registrar clientes
cine.registrarCliente(cliente1);
cine.registrarCliente(cliente2);

// Mostrar información de todos los clientes
cine.mostrarClientes();
