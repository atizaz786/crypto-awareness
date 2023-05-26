import React from 'react';

function Tutorial({ title, content }) {
  return (
    <div className="p-4 border rounded-md shadow-md mb-4">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Tutorial;
