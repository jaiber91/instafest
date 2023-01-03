import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ListWhite.css";
import imageBg from "../../assets/images/landing/imagesBG.jpg";
import logo from "../../assets/icons/logo.svg";
import arrowUp from "../../assets/icons/arrow-up.svg";

const ListWhite = () => {
  // Definiendo el estado del componente
  const [formData, setFormData] = useState([
    { field: "Email", value: "" },
    { field: "Nombre de usuario", value: "" },
    { field: "Tipo de documento", value: "" },
    { field: "Selecciona tu ubicación", value: "" },
    { field: "Número de billetera virtual", value: "" },
    { field: "", value: "" },
  ]);

  // Índice del campo actual
  const [currentFieldIndex, setCurrentFieldIndex] = useState(0);

  // Indica si el modal está visible o no
  const [modalVisible, setModalVisible] = useState(false);

  // Ejecuta el código cuando el componente se monte o se actualice
  useEffect(() => {
    // Establece el índice del campo actual en 0
    setCurrentFieldIndex(0);
  }, []);

  // Función que maneja el evento de clic en el botón "Siguiente"
  const handleNextClick = () => {
    // Incrementa el índice del campo actual
    const newFieldIndex = currentFieldIndex + 1;

    // Si el índice del campo actual es mayor o igual al número de campos, establece el índice del campo actual en el último campo
    /*if (newFieldIndex >= formData.length) {
      setCurrentFieldIndex(formData.length - 1 );
      return;
    }*/

    setCurrentFieldIndex(newFieldIndex);
    // Actualiza el estado del componente con los nuevos datos
    setFormData(
      formData.map((field, index) => {
        if (index === currentFieldIndex) {
          return {
            ...field,
            value: "",
          };
        }
        //console.log(index + "aqui");
        return field;
      })
    );
  };
  // Función que maneja el evento de cambio en los campos de entrada
  const handleChange = (event) => {
    // Actualiza el estado del componente con el nuevo valor del campo
    setFormData(
      formData.map((field, index) => {
        if (index === currentFieldIndex) {
          return {
            ...field,
            value: event.target.value,
          };
        }

        return field;
      })
    );
  };

  // Renderiza solo el campo actual
  const currentField = formData[currentFieldIndex];

  // Calcula el porcentaje de carga
  let percentage = (currentFieldIndex / 5) * 100;

  // Muestra el modal
  const showModal = () => {
    setModalVisible(true);
  };

  // Oculta el modal
  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <section className="listWhite">
      <div className="listWhite_image">
        <img className="listWhite_bg" src={imageBg} alt="imagen de fondo" />
        <div className="listWhite_logo">
          <Link to={'/'}>
            <img src={logo} alt="logo" />
            <h3>Inhands</h3>
          </Link>
        </div>
        <div className="listWhite_Percentage">
          <h2>{percentage}%</h2>
        </div>
      </div>
      <div className="listWhite_form">
        <div style={{ display: percentage >= 20 ? "none" : "block" }}>
          <h2>
            la lista exclusiva para <br />
            nuestros usuarios
          </h2>
          <p>
            Serás uno de los primeros en tener acceso a nuestras colecciones:
          </p>
        </div>

        <div
          className="listWhite_form_welcome"
          style={{ display: percentage >= 100 ? "block" : "none" }}
        >
          <h2>
            {" "}
            ¡Bienvenido! <br /> <br /> ya eres parte de <br /> nuestro
            ecosistema <br /> inhands{" "}
          </h2>
          <p>
            Nuestro equipo de Inhands validará tu información proporcionada.{" "}
            <br />
            Te enviaremos una notificación cuando este proceso acabe.
          </p>
          <button type="button" onClick={showModal}>
            <img src={arrowUp} alt="flecha" />
          </button>
        </div>

        {/* El componente de modal */}
        <div id="modal" style={{ display: modalVisible ? "block" : "none" }}>
          <div className="modal_container">
            <div className="modal_element">
              <h3>
                lanzamiento oficial <br /> próximamente{" "}
              </h3>
              <p>
                En muy pocos días podrás tener acceso <br /> y disfrutar de la
                colección <br /> <i>NFT Diamonds Lions</i>{" "}
              </p>
              <Link to="/colecciones">
                <button type="button" className="modal_btn">
                  Continuar
                  <img src={arrowUp} alt="btn modal" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="listWhite_form_container"
          style={{ display: percentage >= 100 ? "none" : "block" }}
        >

            <div className="listWhite_form_label">
              <label htmlFor={currentField.field} style={{ display: currentFieldIndex >= 1 ? 'block' : 'none' }}>
                {currentField.field}
                </label>
            </div>
          <form className="listWhite_form_input">
            <input
              type="text"
              name="emails"
              id={currentField.field}
              value={currentField.value}
              onChange={handleChange}
              placeholder={currentField.field}
            />
            <hr />
            <button type="button" onClick={handleNextClick}>
              <img src={arrowUp} alt="flecha" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ListWhite;
