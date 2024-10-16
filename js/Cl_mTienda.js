export default class Cl_mTienda{
    constructor() {
        this.acPrecio = 0;
        this.contProdA = 0;
        this.contProdB = 0;
        this.contProdC = 0;

    }

procesarCliente(cliente){
    this.acPrecio += cliente.montoPagar();
    if(cliente.producto === "A"){
        this.contProdA++
        }
    else if (cliente.producto === "B"){
        this.contProdB++
        }
    else if (cliente.producto === "C"){
        this.contProdC++
        }
    }  
prodMasVendido(){
    if(this.contProdA > this.contProdB && this.contProdA > this.contProdC){
        return "Prod A";
        }
    else if(this.contProdB > this.contProdA && this.contProdB > this.contProdC){
        return "Prod B";
        }
    else if(this.contProdC > this.contProdA && this.contProdC > this.contProdB){
        return "Prod C";
        }
    else if(this.contProdA === this.contProdB && this.contProdA > this.contProdC){
        return "Prod A y B";
        }
    else if(this.contProdA === this.contProdC && this.contProdA > this.contProdB){
        return "Prod A y C";
        }
    else if(this.contprod === this.contProdC && this.contProdB > this.contProdA){
        return "Prod B y C";
        }
    else if(this.contProdA === this.contProdB && this.contProdA === this.contProdC){
        return "Prod A, B y C";
        }
    else{
        return "Ninguno";}
    }

    ingresoTotal(){
        return this.acPrecio;
        }
}