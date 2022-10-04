import React from "react";

function Button({ invert = false, text = 'Get started', clickHandler = () => { } }) {
  return (
    <button  
      onClick={() => clickHandler()}
      className={`
        p-3 px-6 pt-3 rounded-full cursor-pointer
        text-white font-semibold bg-brightRed        
        hover:bg-brightRedLight hover:drop-shadow-lg
        ${invert ? "text-brightRed bg-white hover:bg-white hover:text-brightRedLight" : ""}
      `}            
    >
      {text}
    </button>
  );
}

export default Button;
