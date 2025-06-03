"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(nombre, sala, productos) {
        this.nombre = nombre;
        this.sala = sala;
        this.productos = productos;
        this.asiento = sala.asignarAsiento();
    }
    Cliente.prototype.retornarDatos = function () {
        return "Nombre: ".concat(this.nombre, "\n") +
            "".concat(this.sala.retornarDatos(), "\n") +
            "Asiento: ".concat(this.asiento, "\n") +
            "Aperitivos Gratis: ".concat(this.sala.retornarAperitivos(), "\n") +
            "Productos a consumir: ".concat(this.productos.map(function (p) { return p.nombre; }).join(', '));
    };
    return Cliente;
}());
exports.Cliente = Cliente;
