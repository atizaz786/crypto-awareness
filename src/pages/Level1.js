import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Tutorial from "../components/Tutorial";

function Level1() {
  const navigate = useNavigate();
  const [key, setKey] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleKeyChange = (e) => {
    setKey(e.target.value);
  };

  const sendKey = () => {
    navigate("/level2", { state: { key: key } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (key >= 1 && key <= 25) {
      // Perform key generation logic
      console.log("Generated key:", key);
      navigate("/level2", { state: { key: key } });
    } else {
      setErrorMessage("Please enter a valid number between 1 and 25");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Key Generation - Ceaser Cipher </h1>
      <form onSubmit={handleSubmit} className="flex items-center">
        <label htmlFor="keyInput" className="mr-2">
          Choose a number between 1 and 25:
        </label>
        <input
          id="keyInput"
          type="number"
          min="1"
          max="25"
          value={key}
          onChange={handleKeyChange}
          className="border border-gray-400 px-2 py-1 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-1 rounded ml-2"
        >
          Generate Key
        </button>
      </form>
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
      <button className="text-blue-500 mt-4 inline-block mb-4" onClick={sendKey}>
        Next Level
      </button>
      <Tutorial
        title={"Title: Key Generation"}
        content={
          "Generate a secret key by choosing a number between 1 and 25. This key will be used for encryption and decryption in the upcoming levels."
        }
      />
    </div>
  );
}

export default Level1;
