import React from "react";
import "./carrito.scss";
import axios from "axios";

import TextField from "@mui/material/TextField";

function buscarItemPorId(lst, id) {
  for (let i = 0; i < lst.length; i++) 
    if (lst[i].producto_id == id) return i;
}
export default class CarritoItem extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
    this.total = 0;
    this.totalItem = 0;
    this.mapTotItem = new Map();
    this.handleChange = this.handleChange.bind(this);
    this.idUser = 1;
    this.idItems = [];
    this.infoItems = [];
    this.infoUser = {};
  }
  componentDidMount() {
    this.totalItem = 0;
    this.total = 0;
    let idItems = [6, 4, 1];
    this.productoInfo(idItems);
    this.infoUsuario();
  }
  async infoUsuario() {
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
    const direccion =
      jsonUbicacion.ubicacion_ciudad +
      " , " +
      jsonUbicacion.ubicacion_distrito +
      " , " +
      jsonUbicacion.ubicacion_direccion;
    this.infoUser = {
      nombre: jsonUser.usuario_nombre.toUpperCase(),
      apellido: jsonUser.usuario_apellido.toUpperCase(),
      celular: jsonUser.usuario_celular,
      direccion: direccion.toUpperCase(),
      referencia: jsonUbicacion.ubicacion_referencia
        ? jsonUbicacion.ubicacion_referencia.toUpperCase()
        : "",
    };
    // console.log(this.infoUser);
    this.setState({ data: this.infoUser });
  }
  async productoInfo(idItems) {
    for (let i = 0; i < idItems.length; i++) {
      const response = await fetch(
        `http://127.0.0.1:8000/productos/${idItems[i]}`
      );
      let json = await response.json();
      this.totalItem =
        parseFloat(json.producto_precio) * parseFloat(this.state.nPedido);
      this.totalItem = Number.isNaN(this.totalItem) ? 0 : this.totalItem;
      this.infoItems[i] = json;
      this.mapTotItem.set(json.producto_id, "0");
      json.producto_pedido_cant = 0;
      json.producto_pedido_pre = 0;
    }
    this.setState({ data: this.infoItems });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
    let i = buscarItemPorId(this.infoItems, event.target.id);
    let totalItem = Number.parseFloat(
      event.target.value * this.infoItems[i].producto_precio
    );
    this.mapTotItem.set(parseInt(event.target.id), totalItem);
    this.total = 0;
    for (const value of this.mapTotItem.values()) {
      this.total = Number.parseFloat(this.total + value);
    }
    this.infoItems[i].producto_pedido_cant = event.target.value;
    this.infoItems[i].producto_pedido_pre = event.target.value * this.infoItems[i].producto_precio;
  };
  handleSubmit = (event) => {
    var hoy = new Date();
    let ahora =
      hoy.getFullYear() + "-" + (hoy.getMonth() + 1) + "-" + hoy.getDate();
    const pedidoIni = {
      pedido_fenvio: ahora + "T00:00:00Z",
      pedido_fpedido: ahora + "T00:00:00Z",
      pedido_estado: "1",
      usuario: this.idUser,
    };
    console.log(this.infoItems);
    axios.post(`http://127.0.0.1:8000/pedido`, pedidoIni).then((res) => {
      for (let i = 0; i < this.infoItems.length; i++) {
        const objItem = {
          producto_pedido_cant: this.infoItems[i].producto_pedido_cant,
          producto_pedido_pre: this.infoItems[i].producto_pedido_pre,
          pedido: res.data.pedido_id,
          producto: this.infoItems[i].producto_id,
        };
        axios
          .post(`http://127.0.0.1:8000/producto-pedido`, objItem)
          .then((resp) => {
            console.log(resp.data);
            // this.props.history.replace("/");
            // this.props.history.push(`mispedidos${this.idUser}`);
          });
      }
    });
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
                  {this.infoItems.map((d) => (
                    <tr className="pedido-2-item">
                      <td className="Item-informacion-Imagen">
                        <img src={d.producto_img} alt="" />
                      </td>
                      <td>{d.producto_nombre}</td>
                      <td>$ {d.producto_precio}</td>
                      <td>
                        <TextField
                          id={d.producto_id}
                          type="number"
                          onChange={this.handleChange}
                        />
                      </td>
                      <td>
                        <TextField
                          id="nPedidoTotal"
                          disabled
                          value={this.mapTotItem.get(d.producto_id)}
                        />
                      </td>
                    </tr>
                  ))}
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
