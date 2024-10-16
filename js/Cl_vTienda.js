export default class Cl_vTienda {
  constructor(controlador) {
      this.vista = document.getElementById("mainForm");
      this.tabla = document.getElementById("mainForm_tabla");
      this.btAgregarcompra = document.getElementById("mainForm_btAgregar");
      this.lblIngresoTotal = document.getElementById("mainForm_lblIngresoTotal");
      this.lblProductoMasVendido = document.getElementById("mainForm_lblProductoMasVendido");

      this.btAgregarcompra.onclick = () => 
      controlador.mostrarVistaCliente();
  }
    mostrar() {
      this.vista.hidden = false;
    }
    ocultar() {
      this.vista.hidden = true;
    }
    reportarCliente({
        cedula,
        producto,
        cantidad,
        montoPagar,
        prodMasVendido,
        ingresoTotal,
    }) {
      this.tabla.innerHTML += `
      
      <tr>
        <td>${cedula}</td>
        <td>${producto}</td>
        <td>${cantidad}</td>
        <td>${montoPagar}</td>
      </tr>`
      this.lblProductoMasVendido.innerHTML = prodMasVendido;
      this.lblIngresoTotal.innerHTML = ingresoTotal;
    }

}