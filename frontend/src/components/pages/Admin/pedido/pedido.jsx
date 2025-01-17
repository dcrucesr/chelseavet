import React from "react";
import "./pedido.scss";
import PropTypes from "prop-types";
function estad(n) {
  if (n === "0") return "Cancelado";
  else if (n === "1") return "Pendiente";
  else if (n === "2") return "Aceptado";
  else if (n === "3") return "Enviado";
}
export default class Pedido extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };
  componentDidMount() {
    this.pedidoInfo();
  }
  async pedidoInfo() {
    const response = await fetch(`http://127.0.0.1:8000/pedido`);
    const json = await response.json();
    for (let i = 0; i < json.length; i++) {
      const resName = await fetch(
        `http://127.0.0.1:8000/usuarios/${json[i].usuario}`
      );
      const jsonName = await resName.json();
      const resUbi = await fetch(
        `http://127.0.0.1:8000/ubicaciones/${json[i].usuario}`
      );
      const jsonUbi = await resUbi.json();
      json[i].nPedido = i+1;
      json[i].pedido_estado = estad(json[i].pedido_estado);
      json[i].usuario = jsonName.usuario_nombre;
      json[i].usuario_apellido = jsonName.usuario_apellido;
      json[i].ubicacion_direccion = jsonUbi.ubicacion_direccion;
      json[i].ubicacion_distrito = jsonUbi.ubicacion_distrito;
    }
    console.log(json);
    this.setState({ data: json });
  }
  render() {
    const { history } = this.props;
    return (
      <>
        <div className="carrito-container">
          <main className="containter-main">
            VISTA ADMINISTRADOR - LISTA PEDIDOS
          </main>
          <div className="pedido">
            <div className="pedido-2">
              <table>
                <tr className="pedido-3">
                  <th>Nro Pedido</th>
                  <th>USUARIO</th>
                  <th>DIRECCION</th>
                  <th>FECHA</th>
                  <th>ESTADO</th>
                  <th>ACCIONES</th>
                </tr>
                {this.state.data.map((item) => (
                  <tr className="pedido-2-item">
                    <td>{item.pedido_id}</td>
                    <td>{item.usuario}</td>
                    <td>
                      {item.ubicacion_distrito}, {item.ubicacion_direccion}
                    </td>
                    <td>{item.pedido_fpedido}</td>
                    <td>{item.pedido_estado}</td>
                    <td>
                      <button
                        className="vMas"
                        onClick={() => history.push(`pedido/${item.pedido_id}`)}
                      >
                        Ver más
                      </button>
                      <button className="pElim">Cancelar</button>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}