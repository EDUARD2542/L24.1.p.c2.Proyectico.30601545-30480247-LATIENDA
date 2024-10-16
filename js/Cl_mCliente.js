export default class Cl_mCliente{
    constructor({cedula,producto,cantidad,precios}){
        this.cedula = cedula,
        this.producto = producto,
        this.cantidad = cantidad;
        this.precios = precios
    }

    set cedula(cedula){
        this._cedula = +cedula
    }

    set producto(producto){
        this._producto = producto
    }

    set cantidad(cantidad){
        this._cantidad = +cantidad
    }

    get cedula(){
        return this._cedula
    }

    get producto(){
        return this._producto
    }

    get cantidad(){
        return this._cantidad
    }

    montoPagar(){
        if (this.producto === "A"){
            return this.cantidad * this.precios.precioA
        }
        else if (this.producto === "B"){
            return this.cantidad * this.precios.precioB
        }
        else if (this.producto === "C"){
            return this.cantidad * this.precios.precioC
        }
        else{
            return 0
        }
    }
}