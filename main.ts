import Direccion from "./direccion";
import Mail from "./mail";
import Telefono from "./telefono";
import Persona  from "./persona";


 const direccion1 = new Direccion('avenida del sistema', 4, 2, 'B', 28985, 'parla', 'madrid');
 const direccion2 = new Direccion('avenida de los astros', 2, 5, 'D', 28986, 'pinto', 'madrid');
 const direccion3 = new Direccion('avenida de plutón', 10, 8, 'C', 28934, 'fuenlabrada', 'madrid');

const mail1 = new Mail('personal', 'gema.a.p.7@gmail.com');
const mail2 = new Mail('trabajo', 'jorge.a.p.7@gmail.com');
const mail3 = new Mail('personal','rony.a.p.7@gmail.com');

const telefono1 = new Telefono('movil', 638432189);
const telefono2 = new Telefono('movil', 63842319);
const telefono3 = new Telefono('movil', 63812039);


const persona1gema = new Persona(
  'Gema', 
  'Adame Prudencio' , 
  25, 
  ' 54286716T', 
  27.12, 
  'lila', 
  'F',
  [direccion1],
  [mail1],
  [telefono1],
  'Estos son los datos de Gema y le encanta el sushi'
);


const persona2jorge = new Persona(
  'Jorge', 
  'Adame Prudencio' , 
  22, 
  ' 54286865P', 
  23.11, 
  'verde', 
  'M',
  [direccion2],
  [mail2],
  [telefono2],
  'Estos son los datos de Jorge y le encantan las croquetas de jamón'
);


const persona3rony = new Persona(
  'Rony', 
  'Adame Prudencio' , 
  11, 
  ' 5428246H', 
   8, 
  'rosa', 
  'M',
  [direccion3],
  [mail3],
  [telefono3],
  'Estos son los datos de Rony y le encanta el arroz con pollo'
);

console.log(persona1gema);
console.log(persona2jorge);
console.log(persona3rony);

 const agenda: Array<Persona> = new Array(persona1gema, persona2jorge, persona3rony);

const busquedaDNI: string = "54286716T";

const nuevosDatosPersona: Persona = agenda.find(persona => persona.dni === busquedaDNI) as Persona;

const nuevaDireccion= new Direccion(
  "Avenida del Universo",
  4,
  2,
  "B",
  28981,
  "Getafe",
  "Madrid"
)

const nuevoMail = new Mail(
  "personal",
  "gemaadameprudencio@gmail.com"
)

const nuevoTelefono = new Telefono(
  "fmóvil",
  638585670
)

nuevosDatosPersona.direccionEditada(nuevaDireccion);
nuevosDatosPersona.MailEditado(nuevoMail);
nuevosDatosPersona.telefonoEditado(nuevoTelefono);


console.log(persona1gema);
console.log(persona2jorge);
console.log(persona3rony);


