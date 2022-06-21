import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={`${isDanger ? 'text-red-500' : 'text-black'}`}>
      <p>{addZero(value)} </p>
      {/* <span>{type}</span> */}
    </div>
  );
};

export default DateTimeDisplay;

function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }