"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
//clase personas con sus propiedades y métodos
var Persona = /** @class */ (function () {
    //constructor 
    function Persona(nombre, apellidos, edad, dni, cumpleaños, colorfav, sexo, direcciones, mails, telefonos, notas) {
        this.direcciones = [];
        this.mails = [];
        this.telefonos = [];
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumpleaños = cumpleaños;
        this.colorfav = colorfav;
        this.sexo = sexo;
        this.direcciones = direcciones;
        this.mails = mails;
        this.telefonos = telefonos;
        this.notas = notas;
    }
    //métodos
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getApellidos = function () {
        return this.apellidos;
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.getDni = function () {
        return this.dni;
    };
    Persona.prototype.getCumpleaños = function () {
        return this.cumpleaños;
    };
    Persona.prototype.getColorfav = function () {
        return this.colorfav;
    };
    Persona.prototype.getSexo = function () {
        return this.sexo;
    };
    Persona.prototype.getDirecciones = function () {
        return this.direcciones;
    };
    Persona.prototype.getMails = function () {
        return this.mails;
    };
    Persona.prototype.getTelefonos = function () {
        return this.telefonos;
    };
    Persona.prototype.getNotas = function () {
        return this.notas;
    };
    Persona.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Persona.prototype.setApellidos = function (apellidos) {
        this.apellidos = apellidos;
    };
    Persona.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    Persona.prototype.setDni = function (dni) {
        this.dni = dni;
    };
    Persona.prototype.setCumpleaños = function (cumpleaños) {
        this.cumpleaños = cumpleaños;
    };
    Persona.prototype.setColorfav = function (colorfav) {
        this.colorfav = colorfav;
    };
    Persona.prototype.setSexo = function (sexo) {
        this.sexo = sexo;
    };
    Persona.prototype.setNotas = function (notas) {
        this.notas = notas;
    };
    Persona.prototype.direccionEditada = function (direccion) {
        this.direcciones.push(direccion);
    };
    Persona.prototype.telefonoEditado = function (telefonos) {
        this.telefonos.push(telefonos);
    };
    Persona.prototype.MailEditado = function (mails) {
        this.mails.push(mails);
    };
    return Persona;
}());
exports.Persona = Persona;
/*

    direccionEditada(direccion: Direccion) {
      this.direcciones.push(direccion);
    }
  
    telefonoEditado(telefonos: Telefono) {
      this.telefonos.push(telefonos);
    }
  
    mailEditado(mails: Mail) {
      this.mails.push(mails);
    }
  
}
*/
//exportar personas
exports.default = Persona;
