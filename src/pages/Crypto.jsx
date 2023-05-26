import React, { useState } from 'react';
import '../styles/styles.css'

function Cipher() {
  const [text, setText] = useState('');
  const [shift, setShift] = useState(0);
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleShiftChange = (event) => {
    setShift(parseInt(event.target.value));
  };

  const encryptText = () => {
    let result = '';
    for (let i = 0; i < text.length; i++) {
      let ascii = text.charCodeAt(i);
      if (ascii >= 65 && ascii <= 90) {
        result += String.fromCharCode((ascii - 65 + shift) % 26 + 65);
      } else if (ascii >= 97 && ascii <= 122) {
        result += String.fromCharCode((ascii - 97 + shift) % 26 + 97);
      } else {
        result += text.charAt(i);
      }
    }
    setEncryptedText(result);
  };

  const decryptText = () => {
    let result = '';
    for (let i = 0; i < encryptedText.length; i++) {
      let ascii = encryptedText.charCodeAt(i);
      if (ascii >= 65 && ascii <= 90) {
        result += String.fromCharCode((ascii - 65 - shift + 26) % 26 + 65);
      } else if (ascii >= 97 && ascii <= 122) {
        result += String.fromCharCode((ascii - 97 - shift + 26) % 26 + 97);
      } else {
        result += encryptedText.charAt(i);
      }
    }
    setDecryptedText(result);
  };

  return (
    <div>
      <h1>Caesar Cipher</h1>
      <input type="text" value={text} onChange={handleChange} placeholder="Enter text" />
      <input type="number" value={shift} onChange={handleShiftChange} placeholder="Enter shift" />
      <button onClick={encryptText}>Encrypt</button>
      <button onClick={decryptText}>Decrypt</button>
      <h2>Encrypted Text: {encryptedText}</h2>
      <h2>Decrypted Text: {decryptedText}</h2>
    </div>
  );
}

export default Cipher;
