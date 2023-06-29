import React, { useState } from "react";
import PropTypes from "prop-types";
import Dictionary from "./Dictionary";

import "./App.css";

const HelloWorld = ({ name }) => {
  const [inputValue, setInputValue] = useState("");
  const [word, setWord] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 0) {
      setWord(inputValue);
      setInputValue("");
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <form className="centered-div" onSubmit={handleOnSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </form>
      <Dictionary word={word} />
    </>
  );
};

HelloWorld.propsTypes = {
  name: PropTypes.string.isRequired,
};

export default HelloWorld;
