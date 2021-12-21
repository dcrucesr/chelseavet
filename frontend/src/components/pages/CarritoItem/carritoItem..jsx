import React from "react";
import "./carritoItem.scss";
import axios from "axios";

import TextField from "@mui/material/TextField";
export default class CarritoItem extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
    this.total = 0;
    this.totalItem = 0;
    this.handleChange = this.handleChange.bind(this);
    this.idUser = 2;
    this.infoUser = {};
  }
  componentDidMount() {
    const iditem = this.props.match.params.iditem;
    this.totalItem = 0;
    this.total = 0;
    this.productoInfo(iditem);
  }

  async productoInfo(iditem) {
    // Se supone el id del usuario es 2
    //Para obtener informacion del item
    const response = await fetch(`http://127.0.0.1:8000/productos/${iditem}`);
    const json = await response.json();
    this.totalItem =
      parseFloat(json.producto_precio) * parseFloat(this.state.nPedido);
    this.totalItem = Number.isNaN(this.totalItem) ? 0 : this.totalItem;
    this.total = this.total + parseFloat(this.totalItem);
    //Para obtener la informacion del usuario
    const responseUser = await fetch(
      `http://127.0.0.1:8000/usuarios/${this.idUser}`
    );
    const jsonUser = await responseUser.json();
    //Para obtener la informacion de la ubicacion
    const responseUbi = await fetch(
      `http://127.0.0.1:8000/ubicaciones/${this.idUser}`
    );
    const jsonUbicacion = await responseUbi.json();
    json.direccion =
      jsonUbicacion.ubicacion_ciudad +
      " , " +
      jsonUbicacion.ubicacion_distrito +
      " , " +
      jsonUbicacion.ubicacion_direccion;
    this.infoUser = {
      nombre: jsonUser.usuario_nombre.toUpperCase() ,
      apellido: jsonUser.usuario_apellido.toUpperCase() ,
      celular: jsonUser.usuario_celular,
      direccion: json.direccion.toUpperCase() ,
      referencia: json.ubicacion_referencia ? json.ubicacion_referencia.toUpperCase()  : "",
    };
    console.log(this.infoUser);

    this.setState({ data: json });
  }
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
    this.totalItem = Number.parseFloat(
      event.target.value * this.state.data.producto_precio
    ).toFixed(2);
    this.total = Number.parseFloat(
      event.target.value * this.state.data.producto_precio
    ).toFixed(2);
  };
  handleSubmit = (event) => {
    if (this.state.nPedido >= 0) {
      this.props.history.replace("/");
      this.props.history.push(`mispedidos${this.idUser}`);
      var hoy = new Date();
      let ahora =
        hoy.getFullYear() + "-" + (hoy.getMonth() + 1) + "-" + hoy.getDate();
      const pedidoIni = {
        pedido_fenvio: ahora + "T00:00:00Z",
        pedido_fpedido: ahora + "T00:00:00Z",
        pedido_estado: "1",
        usuario: this.idUser,
      };
      axios.post(`http://127.0.0.1:8000/pedido`, pedidoIni).then((res) => {
        const objItem = {
          producto_pedido_cant: this.state.nPedido,
          producto_pedido_pre: this.totalItem,
          pedido: res.data.pedido_id,
          producto: this.state.data.producto_id,
        };
        axios
          .post(`http://127.0.0.1:8000/producto-pedido`, objItem)
          .then((resp) => {
            this.props.history.push(`mispedidos${this.idUser}`);
          });
      });
    } else {
      console.log("Tiene que existir una cantidad");
    }
  };
  render() {
    return (
      <>
        <div className="carrito-container">
          <main className="containter-main">CARRITO</main>
          <div className="datos">
            <div className="datos-titulo">DATOS DE USUARIO</div>
            <div className="datos-usuario">
              <table className="tabla">
                <tbody align="left">
                  <tr>
                    <th>NOMBRE:</th>
                    <th>{this.infoUser.nombre}</th>
                  </tr>
                  <tr>
                    <th>APELLIDO:</th>
                    <th>{this.infoUser.apellido}</th>
                  </tr>
                  <tr>
                    <th>CELULAR:</th>
                    <th>{this.infoUser.celular}</th>
                  </tr>
                  <tr>
                    <th>DIRECCION:</th>
                    <th>{this.infoUser.direccion}</th>
                  </tr>
                  <tr>
                    <th>REFERENCIA:</th>
                    <th>{this.infoUser.referencia}</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="pedido">
            <div className="pedido-2">
              <table className="tabla">
                <tbody>
                  <tr className="pedido-3">
                    <th>IMAGEN</th>
                    <th>NOMBRE</th>
                    <th>PRECIO</th>
                    <th>CANTIDAD</th>
                    <th>TOTAL</th>
                  </tr>
                  <tr className="pedido-2-item">
                    <td className="Item-informacion-Imagen">
                      <img src={this.state.data.producto_img} alt="" />
                    </td>
                    <td>{this.state.data.producto_nombre}</td>
                    <td>$ {this.state.data.producto_precio}</td>
                    <td>
                      <TextField
                        id="nPedido"
                        type="number"
                        onChange={this.handleChange}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </td>
                    <td>
                      <TextField
                        id="nPedidoTotal"
                        disabled
                        value={this.totalItem}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="total">
              <div className="total-descrip">El total a pagar es:</div>
              <div className="total-total">${this.total}</div>
            </div>
            <div className="total">
              <button className="total-comprar" onClick={this.handleSubmit}>
                Comprar
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
