"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
//importando las clases: persona, mail, dirección y teléfono
var persona_1 = require("./persona");
var mail_1 = require("./mail");
var direccion_1 = require("./direccion");
var telefono_1 = require("./telefono");
//creando variables const con dirección, mail y teléfono
var direccionGema = new direccion_1.default("avenida del sistema solar", 5, 3, "C", 28983, "Parla", "Madrid");
var mailGema = new mail_1.default("personal", "gema.a.p.7@gmail.com");
var telefonoGema = new telefono_1.default("móvil", 638123484);
var direccionJorge = new direccion_1.default("avenida de los astros", 11, 4, "D", 28983, "Parla", "Madrid");
var mailJorge = new mail_1.default("personal", "jorge.a.p.7@gmail.com");
var telefonoJorge = new telefono_1.default("móvil", 638734892);
var direccionRony = new direccion_1.default("avenida de las estrellas", 8, 2, "A", 28983, "Parla", "Madrid");
var mailRony = new mail_1.default("personal", "rony.a.p.7@gmail.com");
var telefonoRony = new telefono_1.default("móvil", 638394050);
/*creando variables const con todos los datos de las 3 personas: nombre, edad, dni, fecha nacimiento, color fav, sexo, importando las
direcciones,mails y teléfonos y las notas*/
var datosGema = new persona_1.default('Gema', 'Adame Prudencio', 25, '54123456T', new Date(1997, 12, 27), 'lila', 'Mujer', [direccionGema], [mailGema], [telefonoGema], "Estos son los datos de la persona Gema, que le encanta el sushi");
var datosJorge = new persona_1.default('Jorge', 'Adame Prudencio', 22, '54654321B', new Date(2000, 11, 23), 'verde', 'Hombre', [direccionJorge], [mailJorge], [telefonoJorge], "Estos son los datos de la persona Jorge, que le encantan las croquetas de jamón");
var datosRony = new persona_1.default('Rony', 'Adame Prudencio', 11, '54651243R', new Date(2011, 8, 1), 'todos', 'Hombre', [direccionRony], [mailRony], [telefonoRony], "Estos son los datos de la persona Rony, que le encanta el arroz con pollo");
//console log para asegurarme si los datos de las 3 personas pintan en la consola
console.log("Datos personales de las 3 personas guardadas en la agenda");
console.log(datosGema);
console.log(datosJorge);
console.log(datosRony);
//creando un array con personas
var datos = new Array(datosGema, datosJorge, datosRony);
//creando const para realizar la búsqueda de una persona escribiendo un dni
var buscarDNI = "54123456T";
//creando const para poder encontrar a la persona con el dni
var editarPersona = datos.find(function (persona) { return persona.dni === buscarDNI; });
//creando const con una nueva dirección, mail y teléfono para la persona del dni buscado
var nuevaDireccion = new direccion_1.default("avenida del sistema solar", 44, 5, "D", 28985, "parla", "Madrid");
var nuevoMail = new mail_1.default("trabajo", "gemadev@gmail.com");
var nuevoTelefono = new telefono_1.default("movil", 638585647);
//agregando la nueva dirección, mail y teléfono
editarPersona.agregarDireccio(nuevaDireccion);
editarPersona.agregarMail(nuevoMail);
editarPersona.agregarTelefono(nuevoTelefono);
//console.log para asegurarme de que los datos se han guardado bien y que se ha encontrado el dni con la persona y sus datos modificados
console.log("Datos guardados de las 3 personas de la agenda");
console.log(datosGema);
console.log(datosJorge);
console.log(datosRony);
console.log("Otra forma de realizar la búsqueda de una persona por su DNI, modificar sus datos y ver dichos cambios");
//otra forma de modificar los datos realizando la búsqueda por dni
var personas = [new persona_1.default('Gema', 'Adame Prudencio', 40, '54123456T', new Date(1975, 2, 10), 'rosa', 'mujer', [direccionGema], [mailGema], [telefonoGema], "estos son los datoos de gema"),
    new persona_1.default('Jorge', 'Adame Prudencio', 1, '542846664', new Date(1991, 1, 1), 'azul', 'hombre', [direccionJorge], [mailJorge], [telefonoJorge], "estos son los dtos de jorge"),
    new persona_1.default('TRony', 'Adame Prudencio', 2, '54286354', new Date(1962, 0, 9), 'naranja', 'mujer', [direccionRony], [mailRony], [telefonoRony], "Piso en alquiler")];
function modificarPersona(dni, nuevoMail, nuevoTelefono) {
    //busca a la persona por el dni
    var personaEncontrada = personas.find(function (persona) { return persona.dni === dni; });
    // si encuentra el dni de la persona aparecerá el mail y el teléfono modificado
    if (personaEncontrada) {
        personaEncontrada.mails = nuevoMail.map(function (mail) { return new mail_1.default(mail.tipoemail, mail.direccionmail); });
        personaEncontrada.telefono = __spreadArray([new telefono_1.default(nuevoTelefono.tipotelefono, nuevoTelefono.numerotelefono)], personaEncontrada.telefono, true);
        ;
        console.log("Los datos personales de la persona con DNI ".concat(dni, " han sido actualizados correctamente:"));
        console.log("Nuevos mails:");
        personaEncontrada.mails.forEach(function (mail) { return console.log(" ".concat(mail.tipoemail, " ").concat(mail.direccionmail)); });
        console.log("Nuevo tel\u00E9fono: ".concat(nuevoTelefono.tipotelefono, " ").concat(nuevoTelefono.numerotelefono));
    }
    else {
        //si no encuentra el dni de la persona aparecerá este mensaje:
        console.log("No se encontr\u00F3 ninguna persona con DNI ".concat(dni));
    }
}
//aquí ponemos el dni que queremos buscar con sus datos cambiados:
modificarPersona("54123456T", [{ tipoemail: "trabajo", direccionmail: "gemadev.nuevo@empresa.com" }], { tipotelefono: "personal", numerotelefono: 638585432 });
