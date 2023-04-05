
//importando las clases: persona, mail, dirección y teléfono
import Persona  from "./persona";
import Mail  from "./mail";
import Direccion from "./direccion";
import Telefono  from "./telefono";

//creando variables const con dirección, mail y teléfono

const direccionGema = new Direccion("avenida del sistema solar",5, 3, "C",28983,"Parla","Madrid");
const mailGema = new Mail("personal", "gema.a.p.7@gmail.com");
const telefonoGema = new Telefono("móvil", 638123484);

const direccionJorge = new Direccion("avenida de los astros",11,4,"D",28983,"Parla","Madrid");
const mailJorge = new Mail("personal", "jorge.a.p.7@gmail.com");
const telefonoJorge = new Telefono("móvil", 638734892);

const direccionRony = new Direccion("avenida de las estrellas",8, 2,"A",28983,"Parla","Madrid");
const mailRony = new Mail("personal", "rony.a.p.7@gmail.com");
const telefonoRony = new Telefono("móvil", 638394050);

/*creando variables const con todos los datos de las 3 personas: nombre, edad, dni, fecha nacimiento, color fav, sexo, importando las
direcciones,mails y teléfonos y las notas*/
const datosGema = new Persona('Gema','Adame Prudencio',25,'54123456T',new Date(1997, 12, 27),'lila','Mujer',[direccionGema],[mailGema],[telefonoGema],
"Estos son los datos de la persona Gema, que le encanta el sushi");

const datosJorge = new Persona('Jorge','Adame Prudencio',22,'54654321B',new Date(2000, 11, 23),'verde','Hombre',[direccionJorge],[mailJorge],[telefonoJorge],
"Estos son los datos de la persona Jorge, que le encantan las croquetas de jamón");

const datosRony = new Persona('Rony','Adame Prudencio',11,'54651243R',new Date(2011, 8, 1),'todos','Hombre',[direccionRony],[mailRony],[telefonoRony],
"Estos son los datos de la persona Rony, que le encanta el arroz con pollo");

//console log para asegurarme si los datos de las 3 personas pintan en la consola
console.log("Datos personales de las 3 personas guardadas en la agenda");
console.log(datosGema);
console.log(datosJorge);
console.log(datosRony);


//creando un array con personas
const datos: Array<Persona> = new Array(datosGema, datosJorge, datosRony);
//creando const para realizar la búsqueda de una persona escribiendo un dni
const buscarDNI: string = "54123456T";

//creando const para poder encontrar a la persona con el dni
const editarPersona: Persona = datos.find(persona => persona.dni === buscarDNI) as Persona;

//creando const con una nueva dirección, mail y teléfono para la persona del dni buscado
const nuevaDireccion = new Direccion("avenida del sistema solar",44,5,"D",28985,"parla","Madrid")
const nuevoMail = new Mail("trabajo","gemadev@gmail.com")
const nuevoTelefono = new Telefono("movil", 638585647)

//agregando la nueva dirección, mail y teléfono
editarPersona.agregarDireccio(nuevaDireccion);
editarPersona.agregarMail(nuevoMail);
editarPersona.agregarTelefono(nuevoTelefono);

//console.log para asegurarme de que los datos se han guardado bien y que se ha encontrado el dni con la persona y sus datos modificados
console.log("Datos guardados de las 3 personas de la agenda");
console.log(datosGema);
console.log(datosJorge);
console.log(datosRony);


console.log("Otra forma de realizar la búsqueda de una persona por su DNI, modificar sus datos y ver dichos cambios")
//otra forma de modificar los datos realizando la búsqueda por dni

const personas: Persona[] = [ new Persona('Gema','Adame Prudencio',40,'54123456T',new Date(1975, 2, 10),'rosa','mujer',[direccionGema],[mailGema],[telefonoGema],"estos son los datoos de gema"),
new Persona('Jorge','Adame Prudencio',1,'542846664',new Date(1991, 1, 1),'azul','hombre',[direccionJorge],[mailJorge],[telefonoJorge],"estos son los dtos de jorge"),
new Persona('TRony','Adame Prudencio',2,'54286354',new Date(1962, 0, 9),'naranja','mujer',[direccionRony],[mailRony],[telefonoRony],"Piso en alquiler")];

function modificarPersona(dni: string, nuevoMail: { tipoemail: string, direccionmail: string }[], nuevoTelefono: { tipotelefono: string, numerotelefono: number }): void {
  //busca a la persona por el dni
  const personaEncontrada: Persona | undefined = personas.find((persona) => persona.dni === dni);
 // si encuentra el dni de la persona aparecerá el mail y el teléfono modificado
  if (personaEncontrada) {
    personaEncontrada.mails = nuevoMail.map(mail => new Mail(mail.tipoemail, mail.direccionmail));
    personaEncontrada.telefono = [new Telefono(nuevoTelefono.tipotelefono, nuevoTelefono.numerotelefono), ...personaEncontrada.telefono];
    ;

    console.log(`Los datos personales de la persona con DNI ${dni} han sido actualizados correctamente:`);
    console.log(`Nuevos mails:`);
    personaEncontrada.mails.forEach(mail => console.log(` ${mail.tipoemail} ${mail.direccionmail}`));
    console.log(`Nuevo teléfono: ${nuevoTelefono.tipotelefono} ${nuevoTelefono.numerotelefono}`);
  } else {
    //si no encuentra el dni de la persona aparecerá este mensaje:
    console.log(`No se encontró ninguna persona con DNI ${dni}`);
  }
}

//aquí ponemos el dni que queremos buscar con sus datos cambiados:
modificarPersona("54123456T", 
[{ tipoemail: "trabajo", direccionmail: "gemadev.nuevo@empresa.com" }], 
  {tipotelefono: "personal", numerotelefono: 638585432});
  
