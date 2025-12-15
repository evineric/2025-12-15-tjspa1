import React from "react";
import style from './Button.module.css';
interface IButtonProps{
  children:string|React.ReactElement|Array<string|React.ReactElement>;
  onButtonClick?:()=>void;
  bgColor?:string;
  type?:'button'|'submit'|'reset';
}
const Button = ({ children, onButtonClick, bgColor = "black", type = "button" }:IButtonProps) => {
  console.log(children);
  return (
    <button
      type={type}
      className={style.Button}
      style={{backgroundColor:bgColor}}
      onClick={() => {
        if(onButtonClick != undefined){
          onButtonClick();
        }
        else{
          console.log("j'ai cliqué sur un bouton");
        }
      }}
    >
      {children}
    </button>
  );
};
export default Button;
