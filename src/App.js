import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import Character from "./components/Character";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        console.log("response", response.data);
        setCharacters(response.data);
        console.log("characters", characters);
      })
      .catch((error) => {
        console.log(`Error ${error}`);
        setError(error);
      });
  }, []);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // console.log(characters);
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character characters={characters} />
    </div>
  );
};

export default App;
