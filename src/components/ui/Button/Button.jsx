import React from "react";
import style from './Button.module.css';
const Button = ({ title, onButtonClick }) => {
  console.log(title);
  return (
    <Button
      className={style.Button}
      onClick={() => {
        onButtonClick(title);
      }}
    >
      {title}
    </Button>
  );
};
export default Button;
