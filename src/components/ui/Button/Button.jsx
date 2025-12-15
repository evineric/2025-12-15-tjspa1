import React from "react";
import style from './Button.module.css';
const Button = ({ title, onButtonClick, bgColor }) => {
  console.log(title);
  return (
    <button
      className={style.Button}
      style={{backgroundColor:bgColor}}
      onClick={() => {
        if(onButtonClick != undefined){
          onButtonClick(title);
        }
        else {
          console.log("j'ai cliqué sur un bouton");
        }
      }}
    >
      {title}
    </button>
  );
};
export default Button;
