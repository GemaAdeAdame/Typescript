//clase personas con sus propiedades y métodos

class Telefono {
    public tipo: string;
    public numero: number;
   

    //constructor 
  
    constructor(tipo: string, numero: number) {
      this.tipo = tipo;
      this.numero = numero;
    }
  
    //métodos

    public getTipo(): string {
      return this.tipo;
    }
    
    public getNumero(): number {
        return this.numero;
    }
    
    public setTipo(tipo: string): void {
      this.tipo = tipo;
    }
    
    public setNumero(numero: number): void {
        this.numero = numero;
    }

    }
  
  //exportar personas
  export default Telefono;
