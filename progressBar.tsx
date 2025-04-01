import React from 'react';

export const ProgressBar = (correntValue: number, maxValue: number) => {
  const percent = (correntValue / maxValue) * 100;

  const containerStyle = {
    width: '70%',
    backgroundColor: '#e0e0e0',
    borderRadius: '50',
    height: '20',
    display: 'inline-block',
  };

  const progressBarStyle = {
    width: `${percent}%`,
    backgroundColor: percent > 50 ? 'green' : percent > 20 ? 'yellow' : 'red',
    height: '100%',
    borderRadius: 'inherit',
    transition: 'width 0.5s ease-in-out',
  };

  const labelStyles = {
    padding: '6px',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    fontWeight: 'bold',
  };

  return (
    <>
      Progress bar:
      <div style={containerStyle}>
        <div style={progressBarStyle}>
          <span style={labelStyles}>{percent}%</span>
        </div>
      </div>
    </>
  );
};
