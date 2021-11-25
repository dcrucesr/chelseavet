import React from "react";
import '../../../App.css';
import "./Servicios.css";
export default function Services(){
    return (
        <>
          <div class="servicios">
            <div class="servicios-texto">
              <h3>CONTACTANOS PARA SACAR UNA CITA</h3>
              <p class="servicios-texto-cita">
                Para citas de baño y estética, puedes escribirnos a whastapp al
                ########.
              </p>
              <p class="servicios-texto-cita">
                Paracitas de clínica y hospitalización puedes llamar a ########
              </p>
            </div>
            <div class="servicios-tipos">
              <div class="servicios-tipos-item">
                <h2 class="servicios-titulo"> Baños y estetica</h2>
                <div class="servicios-tipos-item-imagen">
                  <img
                    src="http://www.spacaninoallqowasi.pe/images/bano_mascota_768_385.jpg"
                    alt=""
                  ></img>
                </div>
                <div class="servicios-tipos-item-texto">
                  <p class="servicios-descripcion">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
                    et repellendus rem blanditiis culpa iure. Officia dicta sequi
                    placeat, quisquam quibusdam dolores! Atque praesentium aliquid
                    eligendi, voluptate tempore eius voluptatum?
                  </p>
                </div>
              </div>
              <div class="servicios-tipos-item">
                <h2 class="servicios-titulo"> Clinica veterinaria</h2>
                <div class="servicios-tipos-item-imagen">
                  <img
                    src="https://www.veterinariasedavi.com/vet/wp-content/uploads/planes-de-salud-clinica-veterinaria-sedavi-perro.jpg"
                    alt=""
                  ></img>
                </div>
                <div class="servicios-tipos-item-texto">
                  <p class="servicios-descripcion">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis quidem quo asperiores expedita! Cumque odio rerum
                    doloribus tempora, natus architecto, quasi molestiae, fugiat
                    voluptatum maxime facilis. Veritatis consectetur voluptate
                    tempora.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    };