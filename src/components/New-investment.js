import React, { useState } from "react";
import { Animated } from "react-animated-css";
import "../style/newInvestment.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const NewInvestements = (props) => {

    const [newInvestment, setInvestment] = useState(false);

    const _onSelect = () => {
        console.log('selected')
    }

    const options = [
        'Prestadero', 'Piggo', 'Kueski', 'GBMHomebroker'
    ];

    /*const create = <div className="first_step center">
        {props.options.map((option, index) =>
            <li key={index}>{option.name}</li>
        )}
    </div>

    const AddNew = <div className="first_step center">
        Add
        </div>

    const investment = newInvestment ? create : AddNew*/

    return (
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
            <div className="first_step center">
                <Dropdown className='dropdown_options' options={options} onChange={_onSelect} placeholder="Select an option" />
            </div>
            <div className="add_new center">
                <i className="large material-icons">add</i>
            </div>
        </Animated>
    );
};

export default NewInvestements;
