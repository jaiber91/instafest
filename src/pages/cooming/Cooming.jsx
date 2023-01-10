import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./Cooming.css";
import arrowUp from "../../assets/icons/arrow-up.svg";
import imagen1 from "../../assets/images/Lanzamiento/1.jpeg";
import imagen2 from "../../assets/images/Lanzamiento/2.jpeg";
import imagen3 from "../../assets/images/Lanzamiento/3.jpeg";
import imagen4 from "../../assets/images/Lanzamiento/4.jpeg";
import imagen5 from "../../assets/images/Lanzamiento/5.jpeg";
import imagen6 from "../../assets/images/Lanzamiento/6.jpeg";


const Cooming = () => {
  const [contenedores, setContenedores] = useState([
    imagen1,
    imagen2,
    imagen3,
    imagen4,
    imagen5,
    imagen6,
   
  ]);

  let imagenes;

  useEffect(() => {
    imagenes = document.querySelectorAll(".cooming-1");
  }, []);

  const [imagenesSeleccionadas, setImagenesSeleccionadas] = useState(new Map());

  const seleccionarImagenAleatoria = () => {
    // seleccionar un índice aleatorio del arreglo de imágenes
    let indiceAleatorio = Math.floor(Math.random() * contenedores.length);
    // obtener la imagen del índice seleccionado
    let imagenAleatoria = contenedores[indiceAleatorio];
    // verificar si la imagen ya se encuentra en el Map
    while (imagenesSeleccionadas.has(imagenAleatoria)) {
      // si ya se encuentra en el Map, obtener su contador
      let contador = imagenesSeleccionadas.get(imagenAleatoria);
      // si el contador es igual al límite permitido (2 en este caso)
      if (contador === 1) {
        // eliminar la imagen del Map
        imagenesSeleccionadas.delete(imagenAleatoria);
      } else {
        // si el contador es menor al límite permitido, incrementarlo y seguir en el ciclo
        imagenesSeleccionadas.set(imagenAleatoria, contador + 1);
        indiceAleatorio = Math.floor(Math.random() * contenedores.length);
        imagenAleatoria = contenedores[indiceAleatorio];
      }
    }
    // agregar la imagen seleccionada al Map con el contador inicializado en 1
    imagenesSeleccionadas.set(imagenAleatoria, 1);
    // retornar la imagen seleccionada
    return imagenAleatoria;
  };

  const cambiarImagenes = () => {
    imagenes.forEach((imagen) => {
      // seleccionar una imagen aleatoria
      const imagenAleatoria = seleccionarImagenAleatoria();
      // asignar la imagen aleatoria a la etiqueta img
      imagen.src = imagenAleatoria;
    });
  };

useEffect(() => {
    const interval = setInterval(() => {
      cambiarImagenes();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  //calculando la altura maxima de la pantalla
  const contentHeight = document.body.scrollHeight;
  const windowHeight = window.innerHeight;
  const maxScrollPosition = contentHeight - windowHeight;
  console.log(maxScrollPosition);

  //Bloqueando el scroll ==>aun no funciona

  useEffect(() => {
    window.scrollTo(0, 700);
  }, []);

  return (
    <>
      <Navbar />
      <div className="cooming">
        <div className="cooming-flex">
          <div>
            <div className="cooming-text">
              <h1>lanzamiento próximamente</h1>
              <p>
                Nos complace invitarte al lanzamiento de la próxima colección
                NFT Diamonds Lions, una colección a cargo del festival
                Instafest, la organización más importante en el mundo de las
                redes sociales que se encarga de premiar a los influencers más
                reconocidos de América Latina. Como todos los años, el evento
                abrirá sus puertas al público el próximo 22 de Diciembre, esta
                vez en la mágica ciudad de Cartagena de Indias. Te invitamos a
                participar de esta extraordinaria experiencia llena de glamour y
                de exclusividad. Conoce a las más importantes celebridades del
                medio, disfruta del clima y la brisa del mar en la playa. Sin
                duda, una oportunidad que no te puedes perder.
              </p>
            </div>

            <div className="cooming-notification">
              <h3> te notificaremos el día del lanzamiento</h3>
              <form className="cooming_form_input">
                <input type="text" name="emails" placeholder="E-mail" />
                <hr />
                <button type="button">
                  <img src={arrowUp} alt="flecha" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="cooming-container-images">
          <div className="cooming-images">
            <div className="cooming-launch-one">
              <img className="cooming-1" src={contenedores[0]} alt="imagen" />
            </div>
            <div className="cooming-launch-two">
              <img className="cooming-1" src={contenedores[1]} alt="imagen" />
              <img className="cooming-1" src={contenedores[3]} alt="imagen" />
            </div>
            <div className="cooming-launch-three">
              <img className="cooming-1" src={contenedores[4]} alt="imagen" />
              <img className="cooming-1" src={contenedores[2]} alt="imagen" />

              <img className="cooming-1 " src={contenedores[5]} alt="imagen" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cooming;
