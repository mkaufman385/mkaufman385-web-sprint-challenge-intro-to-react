// Write your Character component here

import React from "react";

const Character = (props) => {
  return (
    <div>
      {props.characters.map((characters) => (
        <div>
          <h2>{characters.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Character;
