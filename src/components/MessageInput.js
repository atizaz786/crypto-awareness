import React, { useState } from 'react';

function MessageInput({ onSubmit, buttonText }) {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(message);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={message}
        onChange={handleChange}
        className="border border-gray-400 px-2 py-1 rounded"
        placeholder="Enter your message"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-1 rounded ml-2"
      >
        {buttonText}
      </button>
    </form>
  );
}

export default MessageInput;
