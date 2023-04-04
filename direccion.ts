
class Direccion {
    public calle: string;
    public numero: number;
    public piso: number;
    public letra: string;
    public codpostal: number;
    public poblacion: string;
    public provincia: string;


constructor(calle: string, numero:number, piso:number, letra:string, codpostal:number,
    poblacion:string, provincia: string) {
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.letra = letra;
        this.codpostal = codpostal;
        this.poblacion = poblacion;
        this.provincia = provincia;
    }

    public getCalle(): string {
        return this.calle;
    }

    public getNumero(): number {
        return this.numero;
    }

    public getPiso(): number{
        return this.piso;
    }

    public getLetra(): string {
        return this.letra;
    }

    public getCodpostal(): number {
        return this.codpostal;
    }

    public getPoblacion(): string {
        return this.poblacion;
    }

    public getProvincia(): string {
        return this.provincia;
    }

    public setCalle(calle: string): void {
        this.calle = calle;
      }

    public setNumero(numero: number): void {
        this.numero = numero;
    }
    
    public setPiso(piso: number): void {
        this.piso =  piso;
    }
    
    public setLetra(letra: string): void {
        this.letra = letra;
    }

    public setCodpostal(codpostal: number): void {
        this.codpostal = codpostal;
    }

    public setPoblacion(poblacion: string): void {
        this.poblacion = poblacion;
    }

    public setProvincia(provincia: string): void {
        this.provincia = provincia;
    }
    }

    export default Direccion;