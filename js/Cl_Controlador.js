
import Cl_vTienda from "./Cl_vTienda.js";
import Cl_vCliente from "./Cl_vCliente.js";
import Cl_mTienda from "./Cl_mTienda.js";
import Cl_mCliente from "./Cl_mCliente.js";
import Cl_mPrecios from "./Cl_mPrecios.js";
export default class Cl_controlador {
  constructor() {
    this.mTienda = new Cl_mTienda();
    this.vCliente = new Cl_vCliente(this);
    this.vTienda = new Cl_vTienda(this);
    this.mPrecios = new Cl_mPrecios({precioA:prompt ("ingrese el precio de A"),
      precioB:prompt ("ingrese el precio de B"),
      precioC:prompt ("ingrese el precio de C")
      
    });
    let lblPrecios = document.getElementById("mainForm_lblPrecios");
    lblPrecios.textContent = 
   `A: $${this.mPrecios.precioA.toFixed(2)}, 
    B: $${this.mPrecios.precioB.toFixed(2)}, 
    C: $${this.mPrecios.precioC.toFixed(2)}`;
  }

    mostrarVistaCliente() {
    this.vTienda.ocultar();
    this.vCliente.mostrar();
  }
  mostrarVistaTienda() {
    this.vCliente.ocultar();
    this.vTienda.mostrar();
  }
  agregarCliente({cedula,producto,cantidad} ) {
    let precios = this.mPrecios;
    let cliente = new Cl_mCliente( {cedula,producto,cantidad,precios});
    this.mTienda.procesarCliente(cliente);
    this.vTienda.reportarCliente({
      cedula: cliente.cedula,
      producto: cliente.producto,
      cantidad: cliente.cantidad,
      montoPagar: cliente.montoPagar(),
      prodMasVendido: this.mTienda.prodMasVendido(),
      ingresoTotal: this.mTienda.ingresoTotal(), 
    });
    this.mostrarVistaTienda();
  }
}
    
