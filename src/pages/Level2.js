import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MessageInput from "../components/MessageInput";
import CipherDisplay from "../components/CipherDisplay";
import Tutorial from "../components/Tutorial";

function Level2() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const { key } = location.state || {};
  console.log(key, "checking key");
  const [plaintext, setPlaintext] = useState("");
  const [ciphertext, setCiphertext] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [generatedKey, setGeneratedKey] = useState(2); // State variable to store the generated key

  const handleEncrypt = (message) => {
    // Perform encryption logic using the generated key
    const encryptedMessage = encryptWithCaesarCipher(message, parseInt(key));
    setCiphertext(encryptedMessage);
  };

  const sendKey = () => {
    navigate("/level3", { state: { key: key, cipherText: ciphertext } });
  };

  const encryptWithCaesarCipher = (plaintext, key) => {
    let ciphertext = "";
    console.log(key);
    const shift = key % 26;

    for (let i = 0; i < plaintext.length; i++) {
      const char = plaintext[i];

      if (char.match(/[a-z]/i)) {
        const charCode = char.charCodeAt();

        if (charCode >= 65 && charCode <= 90) {
          ciphertext += String.fromCharCode(
            ((charCode - 65 + shift) % 26) + 65
          );
        } else if (charCode >= 97 && charCode <= 122) {
          ciphertext += String.fromCharCode(
            ((charCode - 97 + shift) % 26) + 97
          );
        }
      } else {
        // Preserve non-alphabetic characters
        ciphertext += char;
      }
    }

    return ciphertext;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Encryption</h1>
      {key && <h3 className="mt-4">Your Selected key is: {key}</h3>}
      <MessageInput onSubmit={handleEncrypt} buttonText="Encrypt" />
      {ciphertext && <CipherDisplay ciphertext={ciphertext} />}
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
      <button className="text-blue-500 mt-4 inline-block" onClick={sendKey}>
        Next Level
      </button>
      <Tutorial
        title={"Title: Encryption"}
        content={
          " Encrypt a message using the Caesar Cipher. The key generated in the previous level will determine the number of shifts in the cipher. Enter a plaintext message and see it transformed into ciphertext in real-time."
        }
      />
    </div>
  );
}

export default Level2;
