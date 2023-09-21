import React from 'react';

const Card = ({ children }) => {
  return (
    <div
      style={{ borderRadius: '3rem 0rem' }}
      className="lg:w-1/2 hover:scale-105 border-3 shadow-lg drop-shadow-lg border-pink  mb-5 transition duration-500 relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg  bg-gray/75"
    >
      <div className="mt-4 px-5">{children}</div>
    </div>
  );
};

export default Card;
