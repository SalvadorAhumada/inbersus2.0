import React, { useState } from "react";
import "../style/welcome.css";
import { Animated } from "react-animated-css";

const Welcome = (props) => {

  const [visible, setVisible] = useState(true);

  const closeModal = () => {
    setVisible(false)
  }

  return (
    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={visible}>
      <section className="welcome_modal_wrapper">
        <div className="welcome_modal">
          <h1 className="center">¡BIENVENIDO A iNBERSUS!</h1>
          <p>
            Esta aplicación web te ayudara a comparar, simular y elegir las
            herramientas de inversión mas sencillas que existen en el mercado
            actual mexicano. Si no estas seguro de como invertir tu dinero ¡Aqui
            te ayudamos!
          </p>
          <p className="center">
            <button className="ok_button bold_text" onClick={closeModal}>Aceptar</button>
          </p>
          <footer>
          </footer>
        </div>
      </section>
    </Animated>
  );
};

export default Welcome;
