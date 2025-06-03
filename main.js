"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cine_1 = require("./Cine");
var Pelicula_1 = require("./Pelicula");
var Sala_1 = require("./Sala");
var ProductoComestible_1 = require("./ProductoComestible");
var Cliente_1 = require("./Cliente");
// Crear cine
var cine = new Cine_1.Cine('Cinemark', 'Av. Siempre Viva 123');
// Crear películas
var johnWick = new Pelicula_1.Pelicula('John Wick 3');
var aladdin = new Pelicula_1.Pelicula('Aladdin');
var avengers = new Pelicula_1.Pelicula('Avengers');
var liloStitch = new Pelicula_1.Pelicula('Lilo & Stitch');
// Agregar películas al cine
cine.agregarPelicula(johnWick);
cine.agregarPelicula(aladdin);
cine.agregarPelicula(avengers);
cine.agregarPelicula(liloStitch);
// Crear salas
var salaA = new Sala_1.Sala('Sala A', johnWick, 5, ['Agua', 'Servilletas']);
var salaB = new Sala_1.Sala('Sala B', aladdin, 3, ['Azúcar', 'Cucharas']);
// Agregar salas al cine
cine.agregarSala(salaA);
cine.agregarSala(salaB);
// Crear clientes
var cliente1 = new Cliente_1.Cliente('Carlos Pérez', salaA, [
    new ProductoComestible_1.ProductoComestible('Canguil'),
    new ProductoComestible_1.ProductoComestible('Bebida')
]);
var cliente2 = new Cliente_1.Cliente('María López', salaB, [
    new ProductoComestible_1.ProductoComestible('Hot-dog')
]);
// Registrar clientes
cine.registrarCliente(cliente1);
cine.registrarCliente(cliente2);
// Mostrar información de todos los clientes
cine.mostrarClientes();
