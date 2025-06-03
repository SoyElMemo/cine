"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cine = void 0;
var Cine = /** @class */ (function () {
    function Cine(nombre, direccion) {
        this.salas = [];
        this.peliculas = [];
        this.clientes = [];
        this.nombre = nombre;
        this.direccion = direccion;
    }
    Cine.prototype.agregarSala = function (sala) {
        this.salas.push(sala);
    };
    Cine.prototype.agregarPelicula = function (pelicula) {
        this.peliculas.push(pelicula);
    };
    Cine.prototype.registrarCliente = function (cliente) {
        this.clientes.push(cliente);
    };
    Cine.prototype.mostrarClientes = function () {
        console.log("\nClientes del Cine ".concat(this.nombre, ":"));
        this.clientes.forEach(function (cliente) {
            console.log(cliente.retornarDatos());
            console.log('----------------------');
        });
    };
    return Cine;
}());
exports.Cine = Cine;
