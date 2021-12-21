import React from "react";
import "../Admin/pedido/pedido.scss";
import axios from "axios";
export default class PedidoDetalle extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
    this.pedidoinfo = {};
    this.total = 0;
    this.idpedido = 0;
  }
  componentDidMount() {
    this.idpedido = this.props.match.params.idpedido;
    this.productoInfo(this.idpedido);
    this.miPedidoInfo(this.idpedido);
  }
  async productoInfo(idpedido) {
    const response = await fetch(
      `http://127.0.0.1:8000/producto-pedido/${idpedido}`
    );
    const json = await response.json();
    for (let i = 0; i < json.length; i++) {
      const resName = await fetch(
        `http://127.0.0.1:8000/productos/${json[i].producto}`
      );
      const jsonName = await resName.json();
      json[i].producto = jsonName.producto_nombre;
      json[i].producto_precio = jsonName.producto_precio;
      json[i].producto_img = jsonName.producto_img;
      this.total = this.total + parseFloat(json[i].producto_pedido_pre);
    }
    this.setState({ data: json });
  }
  async miPedidoInfo(idpedido) {
    const response = await fetch(`http://127.0.0.1:8000/pedidoId/${idpedido}`);
    const json = await response.json();
    this.pedidoinfo = {
      pedido_id: json.pedido_id,
      pedido_fenvio: json.pedido_fenvio + "T00:00:00Z",
      pedido_fpedido: json.pedido_fpedido + "T00:00:00Z",
      pedido_estado: json.pedido_estado,
      usuario: json.usuario,
    };
    console.log(this.pedidoinfo);
  }
  handleSubmit = (event) => {
    console.log(this.pedidoinfo);
    this.pedidoinfo.pedido_estado = 0;
    axios
      .put(`http://127.0.0.1:8000/pedidoId/${this.idpedido}`, this.pedidoinfo)
      .then((res) => {
        this.props.history.replace("/");
        this.props.history.push(`mispedidos${this.pedidoinfo.usuario}`);
      });
  };
  render() {
    return (
      <>
        <div className="carrito-container">
          <main className="containter-main">LISTA PEDIDOS</main>
          <div className="pedido">
            <div className="pedido-2">
              <table>
                <tr className="pedido-3">
                  <th>IMAGEN</th>
                  <th>PRODUCTO</th>
                  <th>CANTIDAD</th>
                  <th>PRECIO</th>
                  <th>PAGO</th>
                </tr>
                {this.state.data.map((item) => (
                  <tr className="pedido-2-item">
                    <td className="Item-informacion-Imagen">
                      <img src={item.producto_img} alt=""></img>
                    </td>
                    <td>{item.producto}</td>
                    <td>{item.producto_pedido_cant}</td>
                    <td>{item.producto_precio}</td>
                    <td>{item.producto_pedido_pre}</td>
                  </tr>
                ))}
              </table>
            </div>
            <div className="total">
              <div className="total-descrip">El total a pagar es:</div>
              <div className="total-total">${this.total}</div>
            </div>
            <div className="total">
              {this.pedidoinfo.pedido_estado !== "0" ? (
                <button className="total-comprar" onClick={this.handleSubmit}>
                  Cancelar
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
