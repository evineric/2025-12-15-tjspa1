import React from "react";
import style from './Button.module.css';
const Button = ({ children, onButtonClick, bgColor = "black" }) => {
  console.log(children);
  return (
    <button
      className={style.Button}
      style={{backgroundColor:bgColor}}
      onClick={() => {
        if(onButtonClick != undefined){
          onButtonClick(children);
        }
        else {
          console.log("j'ai cliqué sur un bouton");
        }
      }}
    >
      {children}
    </button>
  );
};
export default Button;
