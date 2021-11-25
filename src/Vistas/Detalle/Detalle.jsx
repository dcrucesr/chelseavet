import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./../../components/pages/useFetch/useFetch";

import "./detalle.css";
const Detalle = () => {
  const { idproducto } = useParams();

  const { data: producto } = useFetch(
    `http://localhost:8000/productos/${idproducto}`
  );
  useEffect(() => {}, [producto]);
  return (
    <div class="contenido">
      <div class="contenido_imagen">
        <img src={producto?.imagen} alt=""></img>
      </div>
      <div class="contenido_texto">
        <p class="contenido_texto_nombre">{producto?.nombre}</p>
        <p class="contenido_texto_precio">{producto?.precio}</p>
        <p class="contenido_texto_descripcion">{producto?.descripcion}</p>
        <div className="cotenido_boton">
        <button className="contenido_boton_comprar">
          Comprar ahora
        </button>
        <button className="contenido_boton_carrito">
          Agregar a Carrito
        </button>
        </div>
      </div>
    </div>
  );
};

export default Detalle;
