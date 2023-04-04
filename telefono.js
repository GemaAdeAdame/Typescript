"use strict";
//clase personas con sus propiedades y métodos
Object.defineProperty(exports, "__esModule", { value: true });
var Telefono = /** @class */ (function () {
    //constructor 
    function Telefono(tipo, numero) {
        this.tipo = tipo;
        this.numero = numero;
    }
    //métodos
    Telefono.prototype.getTipo = function () {
        return this.tipo;
    };
    Telefono.prototype.getNumero = function () {
        return this.numero;
    };
    Telefono.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    Telefono.prototype.setNumero = function (numero) {
        this.numero = numero;
    };
    return Telefono;
}());
//exportar personas
exports.default = Telefono;
