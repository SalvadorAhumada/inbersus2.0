import React, { Component } from "react";
import Welcome from "./Welcome.js";
import NewInvestment from "./New-investment.js"
import "../style/main.css";

class Main extends Component {

  state = {
    welcome: true,
    options: [
      { name: 'GBMhomebroker' },
      { name: 'Kueski' },
      { name: 'Piggo' }
    ],
    investments: [
      { id: 1 }
    ]
  };

  closeFunction = () => {
    this.setState({ welcome: false });
  };

  render() {
    const welcome = this.state.welcome ? <Welcome closeCallBack={this.closeFunction} /> : null
    return (
      <section>
        <div className="first_step center">Para iniciar a analizar una herramienta de click en mas</div>
        {this.state.investments.map((investment, index) =>
          <NewInvestment key={index} options={this.state.options} />
        )}
        {welcome}
      </section>
    );
  }
}

export default Main;
