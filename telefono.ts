    class Telefono {
    public tipotelef: string;
    public numerotelef: number;
  
    constructor(tipo: string, numero: number) {
      this.tipotelef = tipo;
      this.numerotelef = numero;
    }
  
    
    public get tipo(): string {
      return this.tipotelef;
    }
  
    
    public set tipo(value: string) {
      this.tipotelef = value;
    }
  
    
    public get numero(): number {
      return this.numerotelef;
    }
  
    
    public set numero(value: number) {
      this.numerotelef = value;
    }
  }
  
  export default Telefono