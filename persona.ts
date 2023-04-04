import Direccion from './direccion';
import Mail from './mail';
import Telefono from './telefono';
//clase personas con sus propiedades y métodos

    export class Persona {
    public nombre: string;
    public apellidos: string;
    public edad: number;
    public dni: string;
    public cumpleaños: number;
    public colorfav: string;
    public sexo: 'M' | 'F' ;
    public direcciones: Direccion[] = [];
    public mails: Mail[] = [];
    public telefonos: Telefono[] = [];
    public notas: string;


    

    
    //constructor 


  
    constructor(
      nombre: string, 
      apellidos:string, 
      edad: number, 
      dni: string, 
      cumpleaños: number, 
      colorfav: string, 
      sexo: 'M' | 'F',
      direcciones: Array<Direccion>,
      mails: Array<Mail>,
       telefonos: Array<Telefono>
      , notas: string) {
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

    public getNombre(): string {
      return this.nombre;
    }

    public getApellidos(): string {
        return this.apellidos;
    }
  
    public getEdad(): number {
      return this.edad;
    }
  
    public getDni(): string {
      return this.dni;
    }

    public getCumpleaños(): number {
        return this.cumpleaños;
    }

    public getColorfav(): string {
        return this.colorfav;
    }

    public getSexo(): 'M' | 'F' {
        return this.sexo;
    }

    public getDirecciones(): Array <Direccion>
     {
        return this.direcciones;
    }

    public getMails(): Array <Mail>
   {
        return this.mails;
    }

    public getTelefonos(): Array <Telefono>{
        return this.telefonos;
    }

    public getNotas(): string{
        return this.notas;
    }

    public setNombre(nombre: string): void {
      this.nombre = nombre;
    }
  
    public setApellidos(apellidos: string): void {
        this.apellidos = apellidos;
    }

    public setEdad(edad: number): void {
      this.edad = edad;
    }

    public setDni(dni: string): void {
        this.dni = dni;
    }

    public setCumpleaños(cumpleaños: number): void {
        this.cumpleaños = cumpleaños;
    }
    
    public setColorfav(colorfav: string): void {
        this.colorfav = colorfav;
    }

    public setSexo(sexo: 'M' | 'F'): void {
        this.sexo = sexo;
    }


    public setNotas(notas: string): void {
        this.notas = notas;
    }
    
    public direccionEditada(direccion: Direccion) {
      this.direcciones.push(direccion);
    }
  
    public telefonoEditado(telefonos: Telefono) {
      this.telefonos.push(telefonos);
    }
    public MailEditado(mails: Mail) {
      this.mails.push(mails);
    }

}

 
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
  export default Persona;

