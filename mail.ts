

    class Mail {
    public tipoemail: string;
    public direccionmail: string;
    

  
    constructor(tipoemail: string, direccionmail: string) {
      this.tipoemail = tipoemail;
      this.direccionmail = direccionmail;
    }
  
   
    public getTipoemail(): string {
      return this.tipoemail;
    }

    public getDireccionmail(): string {
        return this.direccionmail;
    }
  

    public setTipoemail(tipoemail: string): void {
        this.tipoemail = tipoemail;
    }

    public setDireccionmail(direccionmail: string): void {
        this.direccionmail = direccionmail;
    }
   
  }
  
  //exportar personas
  export default Mail;
