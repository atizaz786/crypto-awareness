import React, { useState } from 'react';

function Level5() {
  const [alicePrivateColor, setAlicePrivateColor] = useState(null);
  const [bobPrivateColor, setBobPrivateColor] = useState(null);
  const [aliceMixedColor, setAliceMixedColor] = useState(null);
  const [bobMixedColor, setBobMixedColor] = useState(null);
  const [sharedColor, setSharedColor] = useState(null);

  const primaryColors = {
    red: '#FF0000',
    blue: '#0000FF',
    yellow: '#FFFF00',
   
  };

  const vibrantColors = {
    purple: '#8B00FF',
    green: '#00FF00',
    orange: '#FFA500',
    pink: '#FF1493',
  };

  const handleAlicePrivateColor = () => {
    const privateColor = mixColors(primaryColors.red, primaryColors.blue); // Mix red and blue
    setAlicePrivateColor(privateColor);
  };

  const handleBobPrivateColor = () => {
    const privateColor = mixColors(primaryColors.blue, primaryColors.yellow); // Mix blue and yellow
    setBobPrivateColor(privateColor);
  };

  const handleColorExchange = () => {
    setAliceMixedColor(bobPrivateColor); // Alice receives Bob's mixed color
    setBobMixedColor(alicePrivateColor); // Bob receives Alice's mixed color
  };

  const handleSharedColor = () => {
    const sharedColor = mixColors(aliceMixedColor, alicePrivateColor); // Alice combines mixed color with her private color
    setSharedColor(sharedColor);
  };

  const getRandomColor = () => {
    const colors = Object.values(vibrantColors);
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const mixColors = (color1, color2) => {
    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);

    const mixedColor = {
      r: Math.floor((rgb1.r + rgb2.r) / 2),
      g: Math.floor((rgb1.g + rgb2.g) / 2),
      b: Math.floor((rgb1.b + rgb2.b) / 2),
    };

    return rgbToHex(mixedColor.r, mixedColor.g, mixedColor.b);
  };

  const hexToRgb = (hex) => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => {
      return r + r + g + g + b + b;
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const rgbToHex = (r, g, b) => {
    return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
  };

  const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">
        Level 5 - Diffie-Hellman Key Exchange : Mixing Colors Example
      </h1>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Alice</h2>
        {alicePrivateColor ? (
          <div className="flex items-center mt-4">
            <div
              className="w-12 h-12 rounded-full mr-4"
              style={{ backgroundColor: alicePrivateColor }}
            ></div>
            <p>Alice's Private Color: {alicePrivateColor}</p>
          </div>
        ) : (
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={handleAlicePrivateColor}
          >
            Generate Alice's Private Color
          </button>
        )}
        {aliceMixedColor && (
          <div className="flex items-center mt-4">
            <div
              className="w-12 h-12 rounded-full mr-4"
              style={{ backgroundColor: aliceMixedColor }}
            ></div>
            <p>Alice's Mixed Color (Received from Bob): {aliceMixedColor}</p>
          </div>
        )}
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Bob</h2>
        {bobPrivateColor ? (
          <div className="flex items-center mt-4">
            <div
              className="w-12 h-12 rounded-full mr-4"
              style={{ backgroundColor: bobPrivateColor }}
            ></div>
            <p>Bob's Private Color: {bobPrivateColor}</p>
          </div>
        ) : (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleBobPrivateColor}
          >
            Generate Bob's Private Color
          </button>
        )}
        {bobMixedColor && (
          <div className="flex items-center mt-4">
            <div
              className="w-12 h-12 rounded-full mr-4"
              style={{ backgroundColor: bobMixedColor }}
            ></div>
            <p>Bob's Mixed Color (Received from Alice): {bobMixedColor}</p>
          </div>
        )}
      </div>

      <button
        className="bg-green-500 text-white px-4 py-2 rounded mt-4"
        onClick={handleColorExchange}
        disabled={!alicePrivateColor || !bobPrivateColor}
      >
        Exchange Mixed Colors
      </button>

      {aliceMixedColor && bobMixedColor && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-2">Shared Color</h2>
          <button
            className="bg-purple-500 text-white px-4 py-2 rounded"
            onClick={handleSharedColor}
            disabled={!aliceMixedColor || !alicePrivateColor}
          >
            Generate Shared Color
          </button>
          {sharedColor && (
            <div className="flex items-center mt-4">
              <div
                className="w-12 h-12 rounded-full mr-4"
                style={{ backgroundColor: sharedColor }}
              ></div>
              <p>Shared Color: {sharedColor.toUpperCase()}</p>
            </div>
          )}
        </div>
      )}

      <div className="p-4 border rounded-md shadow-md mb-4 mt-4">
        <h2 className="text-2xl font-bold mb-2">How It Works</h2>
        <p>
          In this example, Alice and Bob each choose a private color by mixing
          their primary colors. The primary colors are represented by actual
          color values. Alice combines the red and blue colors, while Bob
          combines the blue and yellow colors. They keep their private colors
          secret.
        </p>
        <br />
        <p>
          Next, Alice and Bob exchange their mixed colors. Alice receives Bob's
          mixed color, and Bob receives Alice's mixed color. They do this over
          an insecure channel, where others can observe the mixed colors but
          cannot determine the original primary colors.
        </p>
        <br />
        <p>
          After the color exchange, Alice combines her private color with Bob's
          mixed color, and Bob combines his private color with Alice's mixed
          color. The resulting color represents the shared secret key that can
          be used for further communication.
        </p>
        <br />
        <p>
          By visualizing the mixing colors analogy, we can understand the
          concept of the Diffie-Hellman key exchange, where two parties can
          securely establish a shared secret key without directly transmitting
          it over an insecure communication channel.
        </p>
      </div>
    </div>
  );
}

export default Level5;

