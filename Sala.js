"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sala = void 0;
var Sala = /** @class */ (function () {
    function Sala(nombre, pelicula, cantidadAsientos, aperitivos) {
        this.asientosDisponibles = [];
        this.aperitivosGratis = [];
        this.nombre = nombre;
        this.pelicula = pelicula;
        this.aperitivosGratis = aperitivos;
        for (var i = 1; i <= cantidadAsientos; i++) {
            this.asientosDisponibles.push("Asiento ".concat(i));
        }
    }
    Sala.prototype.asignarAsiento = function () {
        var _a;
        return (_a = this.asientosDisponibles.shift()) !== null && _a !== void 0 ? _a : null;
    };
    Sala.prototype.retornarAperitivos = function () {
        return this.aperitivosGratis.join(', ');
    };
    Sala.prototype.retornarDatos = function () {
        return "Sala: ".concat(this.nombre, ", Pel\u00EDcula: ").concat(this.pelicula.titulo);
    };
    return Sala;
}());
exports.Sala = Sala;
