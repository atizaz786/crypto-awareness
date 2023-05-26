import React from 'react';
import { Link } from 'react-router-dom';
import Maze from '../components/Maze';
import Tutorial from '../components/Tutorial';

function Level4() {
  // Maze logic and state management

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">The Quest</h1>
      <Maze />
      {/* <Link to="/level5" className="text-blue-500 mt-4 inline-block">
        Next Level
      </Link> */}
      <Tutorial
        title={"Title: The Quest"}
        content={
          "Navigate through a maze, delivering encrypted messages to friendly agents while avoiding adversaries. If an adversary catches you, they will attempt to decrypt the message. Reach the end of the maze before the adversary decrypts the message."
        }
      />
    </div>
  );
}

export default Level4;
