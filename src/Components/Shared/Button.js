import React from 'react';

const Button = (props) => {
  return (
    <div
      className={`bg-white ${props.className} text-black flex items-center justify-center py-3 rounded-full cursor-pointer`}
      onClick={props.onClick}
    >
      {props.buttonName}
    </div>
  );
};

export default Button;
