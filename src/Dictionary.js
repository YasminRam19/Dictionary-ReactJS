import useFetchWord from "./hooks/useFetchWord";
import React from "react";

import "./App.css";

const Dictionary = ({ word = "" }) => {
  const { data, loading } = useFetchWord(word);

  return (
    <>
      <h1 className="centered-div">{word}</h1>
      {loading && <p> loading ...</p>}
      <hr />
      <div>
        {data.map((i) => {
          return (
            <p>
              {i.definitions[0].definition} Example: {i.definitions[0].example}.
            </p>
          );
        })}
      </div>
    </>
  );
};

export default Dictionary;
