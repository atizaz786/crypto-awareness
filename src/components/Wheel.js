import React, { useState } from 'react';
import WheelComponent from 'react-wheel-of-prizes'
// import 'react-wheel-of-prizes/dist/index.css'

function CipherWheel({ key }) {
  const [selectedSection, setSelectedSection] = useState(null);

  const sections = [
    { option: 'A', style: { backgroundColor: '#FF6464', textColor: '#FFFFFF' } },
    { option: 'B', style: { backgroundColor: '#FF9B64', textColor: '#FFFFFF' } },
    { option: 'C', style: { backgroundColor: '#FFE564', textColor: '#000000' } },
    { option: 'D', style: { backgroundColor: '#64FFB4', textColor: '#000000' } },
    { option: 'E', style: { backgroundColor: '#6495FF', textColor: '#FFFFFF' } },
    { option: 'F', style: { backgroundColor: '#B964FF', textColor: '#FFFFFF' } },
    { option: 'G', style: { backgroundColor: '#FF64FF', textColor: '#FFFFFF' } },
    { option: 'H', style: { backgroundColor: '#FF64B4', textColor: '#FFFFFF' } },
  ];

  const handleSpin = () => {
    const randomIndex = Math.floor(Math.random() * sections.length);
    setSelectedSection(sections[randomIndex].option);
  };

  return (
    <div>
      <WheelComponent
        mustStartSpinning={true}
        prizeNumber={sections.length}
        data={sections}
        backgroundColors={['#EEE', '#DDD']}
        textColors={['#333', '#222']}
        onStopSpinning={handleSpin}
      />
      {selectedSection && <p>Selected Section: {selectedSection}</p>}
    </div>
  );
}

export default CipherWheel;
