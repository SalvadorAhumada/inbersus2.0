import React from "react";
import "../style/welcome.css";
import { Animated } from "react-animated-css";

const Welcome = () => {
  return (
    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
      <section className="welcome_modal_wrapper">
        <div className="welcome_modal">
          <h1 className="center">¡Bienvenido a Inbersus!</h1>
          <p>
            Esta aplicación web te ayudara a comparar, simular y elegir las
            herramientas de inversión mas sencillas que existen en el mercado
            actual mexicano. Si no estas seguro de como invertir tu dinero ¡Aqui
            te ayudamos!
          </p>
          <p className="center">
            <button className="ok_button bold_text">Aceptar</button>
          </p>
        </div>
      </section>
    </Animated>
  );
};

export default Welcome;
