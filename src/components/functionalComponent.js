/*
    This is a functional component. To handle state you need to
    use React hook "useState".
    You can have several states in a functional component.
*/

import React, { useState } from "react";

const Person = props => {
  const [personState, setPersonState] = useState({
    name: "Chaviño"
  });

  const [ageState, setAgeState] = useState({
    age: 29
  });

  const changeNameHandler = () => {
    setPersonState({
      name: "Not Chaviño"
    });

    setAgeState({
      age: "43"
    });
  };
  return (
    <div>
      <h2>This is a functional component!</h2>
      <p>
        I'm {props.name} and I'm {props.age} years old!
      </p>
      <p>
        <button onClick={changeNameHandler}>Change name!</button>
        <p>
          He's {personState.name} and he's {ageState.age} years old!.
        </p>
      </p>
    </div>
  );
};

export default Person;
