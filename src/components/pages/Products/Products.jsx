import React, { useEffect } from "react";
import "../../../App.css";
import useFetch from "../useFetch/useFetch";
import "./Products.css";
import { useHistory } from "react-router-dom";
export default function Products() {
  const history = useHistory();

  const { data: informacion } = useFetch("http://localhost:8000/productos/");
  useEffect(() => {}, [informacion]);
  return (
    <>
      <div class="main-vendidos">
        <div>
          <h3>NUESTROS PRODUCTOS</h3>
        </div>
      </div>
      <div class="producto">
        {informacion?.map((post) => (
          <div class="producto-item">
            <div class="producto-item-imagen">
              <img src={post.imagen} alt=""></img>
            </div>
            <div class="producto-item-boton">
              <button onClick={() => history.push(`/products/${post.id}`)}>
                Comprar ahora
              </button>
              <button onClick={() => history.push(`/products/${post.id}`)}>
                Añadir a Carrito
              </button>
            </div>
            <div class="producto-item-texto">
              <p class="producto-item-texto-nombre">{post.nombre}</p>
              <p class="producto-item-texto-precio">{post.precio}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
