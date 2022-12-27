import React, { useState } from "react";
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
  ]);

  // Índice del campo actual
  const [currentFieldIndex, setCurrentFieldIndex] = useState(0);

  // Función que maneja el evento de clic en el botón "Siguiente"
  const handleNextClick = () => {
    // Incrementa el índice del campo actual
    const newFieldIndex = currentFieldIndex + 1;

    // Si el índice del campo actual es mayor o igual al número de campos, establece el índice del campo actual en el último campo
    if (newFieldIndex >= formData.length) {
      setCurrentFieldIndex(formData.length - 1);
      return;
    }

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
  const percentage = ((currentFieldIndex + 0) / formData.length) * 100;

  // Si el porcentaje de carga es igual a 100%, muestra un mensaje de bienvenida
  /*if (percentage === 100) {
    return <h1>Bienvenido!</h1>;
  }*/

  return (
    <section className="listWhite">
      <div className="listWhite_image">
        <img className="listWhite_bg" src={imageBg} alt="imagen de fondo" />
        <div className="listWhite_logo">
          <img src={logo} alt="logo" />
          <h3>Inhands</h3>
        </div>
        <div className="listWhite_Percentage">
          <h2>{percentage}%</h2>
        </div>
      </div>
      <div className="listWhite_form">
        <div style={{ display: percentage >= 100 ? "none" : "block" }}>
          <h2>
            la lista exclusiva para <br />
            nuestros usuarios
          </h2>
          <p>
            Serás uno de los primeros en tener acceso a nuestras colecciones:
          </p>
        </div>

        <div style={{ display: percentage >= 100 ? "block" : "none" }}>
          <h1>¡Bienvenido/a!</h1>
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
    </section>
  );
};

export default ListWhite;
