import React, { useState, useEffect } from 'react';

function Maze() {
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 });
  const [message, setMessage] = useState('');
  const [adversaryPosition, setAdversaryPosition] = useState({ x: 3, y: 3 });
  const [isDecryptionInProgress, setIsDecryptionInProgress] = useState(false);
  const [isMessageDecrypted, setIsMessageDecrypted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const handlePlayerMove = (direction) => {
    if (!isDecryptionInProgress && !isMessageDecrypted && !isGameOver) {
      const newPosition = calculateNewPosition(playerPosition, direction);
      setPlayerPosition(newPosition);
      checkCollision(newPosition);
    }
  };

  const handleAdversaryMove = () => {
    if (!isDecryptionInProgress && !isMessageDecrypted && !isGameOver) {
      const directions = ['up', 'down', 'left', 'right'];
      const randomDirection = directions[Math.floor(Math.random() * directions.length)];
      moveAdversary(randomDirection);
    }
  };

  const moveAdversary = (direction) => {
    const newPosition = calculateNewPosition(adversaryPosition, direction);
    setAdversaryPosition(newPosition);
  };

  useEffect(() => {
    const intervalId = setInterval(handleAdversaryMove, 2000);
    return () => clearInterval(intervalId);
  }, []);

  const calculateNewPosition = (currentPosition, direction) => {
    const { x, y } = currentPosition;
    switch (direction) {
      case 'up':
        return { x, y: Math.max(0, y - 1) };
      case 'down':
        return { x, y: Math.min(4, y + 1) };
      case 'left':
        return { x: Math.max(0, x - 1), y };
      case 'right':
        return { x: Math.min(4, x + 1), y };
      default:
        return currentPosition;
    }
  };

  const checkCollision = (position) => {
    if (position.x === adversaryPosition.x && position.y === adversaryPosition.y) {
      setIsDecryptionInProgress(true);
      startDecryption();
    } else if (position.x === 4 && position.y === 4) {
      setIsMessageDecrypted(true);
      setIsGameOver(true);
      setMessage('Congratulations! You successfully delivered the message!');
    }
  };

  const startDecryption = () => {
    setTimeout(() => {
      setIsDecryptionInProgress(false);
      setIsGameOver(true);
      setMessage('Oh no! The adversary decrypted the message. Game over!');
    }, 3000);
  };

  const restartGame = () => {
    setPlayerPosition({ x: 0, y: 0 });
    setAdversaryPosition({ x: 3, y: 3 });
    setMessage('');
    setIsDecryptionInProgress(false);
    setIsMessageDecrypted(false);
    setIsGameOver(false);
  };

  return (
    <div className="mb-4">
      <div className="grid grid-cols-5 gap-1">
        {Array.from({ length: 25 }, (_, index) => (
          <div
            key={index}
            className={`h-12 w-12 ${
              playerPosition.x === index % 5 && playerPosition.y === Math.floor(index / 5)
                ? 'bg-blue-500'
                : index === 24
                ? 'bg-yellow-500'
                : index === adversaryPosition.x + adversaryPosition.y * 5
                ? 'bg-red-500'
                : 'bg-gray-200'
            }`}
          ></div>
        ))}
      </div>
      {isDecryptionInProgress && <p className="text-yellow-500 mb-2 mt-4">Decryption in progress...</p>}
      {isGameOver && !isDecryptionInProgress && !isMessageDecrypted && (
        <p className="text-red-500 mb-2 mt-4">Game over! {message}</p>
      )}
      {isMessageDecrypted && (
        <p className="text-green-500 mb-2 mt-4">Success! {message}</p>
      )}
      {!isDecryptionInProgress && !isMessageDecrypted && !isGameOver && (
        <div className="flex justify-center mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-1 rounded mr-2"
            onClick={() => handlePlayerMove('up')}
          >
            Up
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-1 rounded mr-2"
            onClick={() => handlePlayerMove('down')}
          >
            Down
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-1 rounded mr-2"
            onClick={() => handlePlayerMove('left')}
          >
            Left
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-1 rounded"
            onClick={() => handlePlayerMove('right')}
          >
            Right
          </button>
        </div>
      )}
      {isGameOver && (
        <div className="flex justify-center mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-1 rounded"
            onClick={restartGame}
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
}

export default Maze;
