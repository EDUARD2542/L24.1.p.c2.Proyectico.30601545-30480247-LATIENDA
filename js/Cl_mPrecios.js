export default class Cl_mPrecios {
    constructor({precioA,precioB,precioC}) {
        this.precioA = precioA;
        this.precioB = precioB;
        this.precioC = precioC;
    }
set precioA(precioA) {
    this._precioA = +precioA
    }
get precioA() {
    return this._precioA
    }
set precioB(precioB) {
    this._precioB = +precioB
    }
get precioB() {
    return this._precioB
    }
set precioC(precioC) {
    this._precioC = +precioC
    }
get precioC() {
    return this._precioC
    }
}