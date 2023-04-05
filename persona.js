"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona = /** @class */ (function () {
    function Persona($nombre, $apellidos, $edad, $dni, $cumpleaños, $colorFavorito, $sexo, $direcciones, $mails, $telefono, $notas) {
        this.nombre = $nombre;
        this.apellidos = $apellidos;
        this.edad = $edad;
        this.dni = $dni;
        this.cumpleaños = $cumpleaños;
        this.colorFavorito = $colorFavorito;
        this.sexo = $sexo;
        this.direcciones = $direcciones;
        this.mails = $mails;
        this.telefono = $telefono;
        this.notas = $notas;
    }
    Object.defineProperty(Persona.prototype, "$nombre", {
        get: function () {
            return this.nombre;
        },
        set: function (value) {
            this.nombre = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "$apellidos", {
        get: function () {
            return this.apellidos;
        },
        set: function (value) {
            this.apellidos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "$edad", {
        get: function () {
            return this.edad;
        },
        set: function (value) {
            this.edad = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "$dni", {
        get: function () {
            return this.dni;
        },
        set: function (value) {
            this.dni = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "$cumplea\u00F1os", {
        get: function () {
            return this.cumpleaños;
        },
        set: function (value) {
            this.cumpleaños = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "$colorFavorito", {
        get: function () {
            return this.colorFavorito;
        },
        set: function (value) {
            this.colorFavorito = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "$sexo", {
        get: function () {
            return this.sexo;
        },
        set: function (value) {
            this.sexo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "$direcciones", {
        /**
         * Getter $direcciones
         * @return {Array<direccion>}
         */
        get: function () {
            return this.direcciones;
        },
        /**
         * Setter $direcciones
         * @param {Array<direccion>} value
         */
        set: function (value) {
            this.direcciones = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "$mails", {
        /**
         * Getter $mails
         * @return {Array<mail>}
         */
        get: function () {
            return this.mails;
        },
        /**
         * Setter $mails
         * @param {Array<mail>} value
         */
        set: function (value) {
            this.mails = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "$telefono", {
        /**
         * Getter $telefono
         * @return {Array<telefono>}
         */
        get: function () {
            return this.telefono;
        },
        /**
         * Setter $telefono
         * @param {Array<telefono>} value
         */
        set: function (value) {
            this.telefono = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "$notas", {
        get: function () {
            return this.notas;
        },
        set: function (value) {
            this.notas = value;
        },
        enumerable: false,
        configurable: true
    });
    Persona.prototype.agregarDireccio = function (direccion) {
        this.direcciones.push(direccion);
    };
    Persona.prototype.agregarTelefono = function (telefono) {
        this.telefono.push(telefono);
    };
    Persona.prototype.agregarMail = function (mail) {
        this.mails.push(mail);
    };
    return Persona;
}());
exports.default = Persona;
