import React from "react";
import "./Registrar.scss";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import axios from "axios";

export default class Logueo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.handleChange = this.handleChange.bind(this);
  }
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };
  componentDidMount() {
  }

  handleSubmit = (event) => {
    const objUser = {
      usuario_nombre: this.state.nombre,
      usuario_apellido: this.state.apellido,
      usuario_email: this.state.email,
      usuario_contra: this.state.contra,
      usuario_celular: this.state.celular,
      usuario_isadmin: false,
    };
    axios.post(`http://127.0.0.1:8000/usuarios`, objUser).then((res) => {
      console.log(res.data);
      const objUbic = {
        ubicacion_ciudad: this.state.ciudad,
        ubicacion_distrito: this.state.distrito,
        ubicacion_direccion: this.state.direccion,
        ubicacion_referencia: this.state.referencia,
        usuario: res.data.usuario_id,
      };
      axios.post(`http://127.0.0.1:8000/ubicaciones`, objUbic).then((res) => {
        console.log("exitoso");
        this.props.history.push(`products`);
      });
    });
  };
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };
  render() {
    return (
      <main className="containter-register-main">
        <h1>Registrar Usuario</h1>
        <div className="container-register">
          <form method="post" className="register">
            <TextField
              id="email"
              label="Correo electrónico"
              variant="standard"
              onChange={this.handleChange}
            />
            <TextField
              id="contra"
              label="Contraseña"
              variant="standard"
              type="password"
              onChange={this.handleChange}
            />
            <TextField
              id="contra-2"
              label="Repita Contraseña"
              variant="standard"
              type="password"
              onChange={this.handleChange}
            />
            <TextField
              id="nombre"
              label="Nombre"
              variant="standard"
              onChange={this.handleChange}
            />
            <TextField
              id="apellido"
              label="Apellido"
              variant="standard"
              onChange={this.handleChange}
            />
            <TextField
              id="celular"
              label="celular"
              variant="standard"
              onChange={this.handleChange}
            />
            <Typography variant="h5" gutterBottom component="div">
              UBICACION
            </Typography>

            <TextField
              id="ciudad"
              label="Ciudad"
              variant="standard"
              onChange={this.handleChange}
            />
            <TextField
              id="distrito"
              label="Distrito"
              variant="standard"
              onChange={this.handleChange}
            />
            <TextField
              id="direccion"
              label="Dirección"
              variant="standard"
              onChange={this.handleChange}
            />
            <TextField
              id="referencia"
              label="Referencia"
              variant="standard"
              onChange={this.handleChange}
            />
            <Button
              variant="outlined"
              className="bRegister"
              onClick={this.handleSubmit}
            >
              Register
            </Button>
          </form>
        </div>
      </main>
    );
  }
}
