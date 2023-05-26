import React from 'react';

function CipherDisplay({ plaintext, ciphertext }) {
  return (
    <div className="border rounded-md p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">Result</h3>
      {plaintext && <p className="mb-2"><strong>Plaintext:</strong> {plaintext}</p>}
      {ciphertext && <p className="mb-2"><strong>Ciphertext:</strong> {ciphertext}</p>}
    </div>
  );
}

export default CipherDisplay;
