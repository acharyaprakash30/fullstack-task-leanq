import React from 'react';

const Header = ({ head, title, description }) => {
  return (
    <div className="flex flex-col mb-5 justify-center items-center">
      <h2 className=" font-extrabold mt-10 text-black">{head}</h2>
      <h1 className="text-xl text-black  font-extrabold sm:text-3xl">{title}</h1>
      <hr className="w-20 h-2 mx-auto   border-0 my-2 bg-pink" />
      <p className="text-lg w-auto m-10 text-center mt-5 mb-5 text-black/70">{description}</p>
    </div>
  );
};

export default Header;
