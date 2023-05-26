import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MessageInput from "../components/MessageInput";
import CipherDisplay from "../components/CipherDisplay";
import Tutorial from "../components/Tutorial";

function Level3() {
  const location = useLocation();
  const { key, cipherText } = location.state || {};
  const [plaintext, setPlaintext] = useState("");
  const [ciphertext, setCiphertext] = useState(cipherText);
  const [errorMessage, setErrorMessage] = useState("");
  const [generatedKey, setGeneratedKey] = useState(0); // State variable to store the generated key

  const handleDecrypt = (message) => {
    // Perform decryption logic using the generated key
    const decryptedMessage = decryptWithCaesarCipher(message, parseInt(key));
    setPlaintext(decryptedMessage);
  };

  const decryptWithCaesarCipher = (ciphertext, key) => {
    let plaintext = "";
    const shift = key % 26;

    for (let i = 0; i < ciphertext.length; i++) {
      const char = ciphertext[i];

      if (char.match(/[a-z]/i)) {
        const charCode = char.charCodeAt();

        if (charCode >= 65 && charCode <= 90) {
          plaintext += String.fromCharCode(
            ((charCode - 65 - shift + 26) % 26) + 65
          );
        } else if (charCode >= 97 && charCode <= 122) {
          plaintext += String.fromCharCode(
            ((charCode - 97 - shift + 26) % 26) + 97
          );
        }
      } else {
        // Preserve non-alphabetic characters
        plaintext += char;
      }
    }

    return plaintext;
  };

  const handleCopyCipherText = () => {
    if (ciphertext) {
      navigator.clipboard.writeText(ciphertext).then(
        () => {
          setErrorMessage("Cipher text copied to clipboard!");
        },
        () => {
          setErrorMessage("Failed to copy cipher text.");
        }
      );
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Decryption</h1>
      {key && <h3 className="mb-4">Your selected key is: {key}</h3>}
      {cipherText && (
        <div className="mb-4">
          <h3 className="mb-2">Your cipher text is:</h3>
          <div className="relative">
            <input
              type="text"
              className="border border-gray-300 rounded w-full py-2 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={ciphertext}
              readOnly
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-3 py-1 rounded"
              onClick={handleCopyCipherText}
            >
              Copy
            </button>
          </div>
        </div>
      )}
      <MessageInput onSubmit={handleDecrypt} buttonText="Decrypt" />
      {plaintext && <CipherDisplay plaintext={plaintext} />}
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
      <Link to="/level4" className="text-blue-500 mt-4 inline-block">
        Next Level
      </Link>
      <Tutorial
        title={"Title: Decryption"}
        content={
          "Decrypt a ciphertext message using the Caesar Cipher. Use the same key generated in Level 1 to reverse the encryption and reveal the original plaintext message."
        }
      />
    </div>
  );
}

export default Level3;

