"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Telefono = /** @class */ (function () {
    function Telefono(tipo, numero) {
        this.tipotelef = tipo;
        this.numerotelef = numero;
    }
    Object.defineProperty(Telefono.prototype, "tipo", {
        get: function () {
            return this.tipotelef;
        },
        set: function (value) {
            this.tipotelef = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Telefono.prototype, "numero", {
        get: function () {
            return this.numerotelef;
        },
        set: function (value) {
            this.numerotelef = value;
        },
        enumerable: false,
        configurable: true
    });
    return Telefono;
}());
exports.default = Telefono;
