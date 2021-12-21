import React from "react";
import "./Logueo.scss";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";

const Logueo = () => {
  return (
    <main className="containter-login-main">
      <h1>Iniciar Sesión</h1>
      <div className="container-login">
        <form method="post" className="login">
          <TextField
            id="standard-basic"
            label="Correo electrónico"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            label="Contraseña"
            variant="standard"
            type="password"
          />
          <Button variant="outlined" className="bLogin">
            Login
          </Button>
          <FormControlLabel
            control={<Checkbox />}
            label="Recordar Contraseña"
          />
          <a href=" " className="refInciar">¿Olvidaste tu contraseña?</a>
          <a href=" " className="refInciar">Crear cuenta Nueva</a>
        </form>
      </div>
    </main>
  );
};

export default Logueo;
