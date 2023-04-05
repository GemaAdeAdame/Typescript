import Mail  from "./mail";
import  Direccion   from "./direccion";
import Telefono   from "./telefono";

  class Persona {
  public nombre: string;
  public apellidos: string;
  public edad: number;
  public dni: string;
  public cumpleaños: Date;
  public colorFavorito: string;
  public sexo: string;
  public direcciones: Array<Direccion>;
  public mails: Array<Mail>;
  public telefono: Array<Telefono>;
  public notas: string;

  constructor(
    $nombre: string,
    $apellidos: string,
    $edad: number,
    $dni: string,
    $cumpleaños: Date,
    $colorFavorito: string,
    $sexo: string,
    $direcciones: Array<Direccion>,
    $mails: Array<Mail>,
    $telefono: Array<Telefono>,
    $notas: string
  ) {
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

  
  public get $nombre(): string {
    return this.nombre;
  }

  
  public set $nombre(value: string) {
    this.nombre = value;
  }

  
   
   
  public get $apellidos(): string {
    return this.apellidos;
  }

  
  
  public set $apellidos(value: string) {
    this.apellidos = value;
  }

  
  public get $edad(): number {
    return this.edad;
  }

  
   
  public set $edad(value: number) {
    this.edad = value;
  }

  
 
  public get $dni(): string {
    return this.dni;
  }

  
  public set $dni(value: string) {
    this.dni = value;
  }

  
  public get $cumpleaños(): Date {
    return this.cumpleaños;
  }

 
  public set $cumpleaños(value: Date) {
    this.cumpleaños = value;
  }

  
  public get $colorFavorito(): string {
    return this.colorFavorito;
  }

  
  public set $colorFavorito(value: string) {
    this.colorFavorito = value;
  }

 
  public get $sexo(): string {
    return this.sexo;
  }

  
  public set $sexo(value: string) {
    this.sexo = value;
  }

  /**
   * Getter $direcciones
   * @return {Array<direccion>}
   */
  public get $direcciones(): Array<Direccion> {
    return this.direcciones;
  }

  /**
   * Setter $direcciones
   * @param {Array<direccion>} value
   */
  public set $direcciones(value: Array<Direccion>) {
    this.direcciones = value;
  }

  /**
   * Getter $mails
   * @return {Array<mail>}
   */
  public get $mails(): Array<Mail> {
    return this.mails;
  }

  /**
   * Setter $mails
   * @param {Array<mail>} value
   */
  public set $mails(value: Array<Mail>) {
    this.mails = value;
  }

  /**
   * Getter $telefono
   * @return {Array<telefono>}
   */
  public get $telefono(): Array<Telefono> {
    return this.telefono;
  }

  /**
   * Setter $telefono
   * @param {Array<telefono>} value
   */
  public set $telefono(value: Array<Telefono>) {
    this.telefono = value;
  }

  public get $notas(): string {
    return this.notas;
  }

  
  public set $notas(value: string) {
    this.notas = value;
  }

  agregarDireccio(direccion: Direccion) {
    this.direcciones.push(direccion);
  }

  agregarTelefono(telefono: Telefono) {
    this.telefono.push(telefono);
  }

  agregarMail(mail: Mail) {
    this.mails.push(mail);
  }

}

export default Persona;