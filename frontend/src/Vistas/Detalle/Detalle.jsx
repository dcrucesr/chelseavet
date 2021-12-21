import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../components/useFetch/useFetch";
import { useHistory } from "react-router-dom";
import "./detalle.scss";

const Detalle = () => {
  const { idproducto } = useParams();
  const history = useHistory();
  const { data: producto } = useFetch(
    `http://127.0.0.1:8000/productos/${idproducto}`
  );
  useEffect(() => {}, [producto]);

  return (
    <div class="contenido">
      <div class="contenido_imagen">
        <img src={producto?.producto_img} alt=""></img>
      </div>
      <div class="contenido_texto">
        <p class="contenido_texto_nombre">{producto?.producto_nombre}</p>
        <p class="contenido_texto_precio">S/.{producto?.producto_precio}</p>
        <p class="contenido_texto_descripcion">
          {producto?.producto_descripcion}
        </p>
        <div className="contenido_boton">
          <button className="contenido_boton_comprar" onClick={() => history.push(`/carritoItem/${producto.producto_id}`)}>Comprar ahora</button>
          <button className="contenido_boton_carrito" onClick={() => history.push(`/agregarCarrito/`)}>Agregar a Carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Detalle;
