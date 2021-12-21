import React, { useEffect } from "react";
import useFetch from "../../useFetch/useFetch";
import "./Products.scss";
import { useHistory } from "react-router-dom";
export default function Products() {
  const history = useHistory();

  const { data: informacion } = useFetch("http://127.0.0.1:8000/productos");
  
  useEffect(() => {}, [informacion]);
  return (
    <>
      <div class="main-vendidos">
        <h3>NUESTROS PRODUCTOS</h3>
        </div>
      <div class="producto">
        {informacion?.map((post) => (
          <div class="producto-item">
            <div class="producto-item-imagen">
              <img
                src={post.producto_img}
                alt=""
                onClick={() => history.push(`/products/${post.producto_id}`)}
              ></img>
            </div>
            <div class="producto-item-texto">
              <p class="producto-item-texto-nombre">{post.producto_nombre}</p>
              <p class="producto-item-texto-precio">S/.{post.producto_precio}</p>
            </div>
            <div class="producto-item-boton">
              <button
                className="producto-item-boton-carrito"
                onClick={() => history.push(`/products/${post.producto_id}`)}
              >
                Añadir a Carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
