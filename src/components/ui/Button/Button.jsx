import React from "react";
import style from './Button.module.css';
const Button = ({ title, onButtonClick, bgColor }) => {
  console.log(title);
  return (
    <button
      className={style.Button}
      style={{backgroundColor:bgColor}}
      onClick={() => {
        onButtonClick(title);
      }}
    >
      {title}
    </button>
  );
};
export default Button;
