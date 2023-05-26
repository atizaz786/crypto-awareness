import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">CryptoQuest</h1>
      <p className="mb-4">
        Welcome to CryptoQuest, an adventure game where you'll learn about cryptography and encryption techniques. Embark on an exciting journey through various challenges and puzzles to become a master of cryptography!
      </p>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Game Features:</h2>
        <ul className="list-disc pl-6">
          <li>Interactive Tutorials: Learn the concepts of key generation, encryption, decryption, and more through interactive tutorials.</li>
          <li>Real-time Feedback: See the results of your encryption and decryption in real-time.</li>
          <li>Progress Tracking: Keep track of your progress as you complete each challenge.</li>
          <li>Rewards: Earn badges and rewards for completing challenges and mastering cryptography.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Game Levels:</h2>
        <ul className="list-disc pl-6">
          <li>
            <Link to="/level1" className="text-blue-500">
              Key Generation
            </Link>
            : Generate a secret key to be used for encryption and decryption.
          </li>
          <li>
            <Link to="/level2" className="text-blue-500">
              Encryption
            </Link>
            : Encrypt a message using the generated key.
          </li>
          <li>
            <Link to="/level3" className="text-blue-500">
              Decryption
            </Link>
            : Decrypt a ciphertext using the generated key.
          </li>
          <li>
            <Link to="/level4" className="text-blue-500">
              The Quest
            </Link>
            : Navigate through a maze, delivering messages while avoiding adversaries.
          </li>
          <li>
            <Link to="/level5" className="text-blue-500">
              Diffie-Hellman Exchange
            </Link>
            : Learn the concept of secure key exchange using color mixing.
          </li>
        </ul>
      </div>
      <p>
        Ready to embark on the CryptoQuest? Choose a level to begin your journey and become a cryptography expert!
      </p>
    </div>
  );
}

export default Home;
