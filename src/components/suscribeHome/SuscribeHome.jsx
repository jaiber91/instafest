import React, {useState} from "react";
import "./Suscribe.css";
import CircleBlack from "../../assets/images/landing/circleBlack.svg";
import arrowUp from "../../assets/icons/arrow-up.svg";

const SuscribeHome = () => {
//Para cambiar de color el input al darle click
const [selectedInput, setSelectedInput] = useState(null);


 // Función que maneja el evento de foco en el input
 const handleInputFocus = (event) => {
  setSelectedInput(event.target.name);
};

// Función que maneja el evento de blur en el input
const handleInputBlur = () => {
  setSelectedInput(null);
};
console.log(selectedInput)
  return (
    <div className="suscribeHome">
      <div className="suscribeHome_image">
        <img src={CircleBlack} alt="circulo negro" />
      </div>
      <div className="suscribeHome_form">
        <h2>no te pierdas nunca <br /> una colección</h2>
        <p>
          En este portal podrás seguir cada una de las noticias y novedades
          alrededor del lanzamiento de los Utility NFT de Instafest.{" "}
        </p>
        <form className="suscribeHome_form_input" action="#">
         <input
          type="email"
          name="emails"
          placeholder="E-mail" 
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
           />
         <hr  style={{
                backgroundColor: selectedInput === 'emails' ? 'blue' : '#0000000',
              }} />
            <button  style={{
                backgroundColor: selectedInput === 'emails' ? 'blue' : '#0000000',
              }}>
              <img src={arrowUp} alt="flecha" />
              <div className="button_form_home_circle"></div>
            </button>
        </form>
      </div>
    </div>
  );
};

export default SuscribeHome;
