import React, { useState } from "react";
import style from './Button.module.css';
interface IButtonProps{
  children:React.ReactNode|Array<React.ReactNode>;
  onButtonClick?:()=>void;
  bgColor?:string;
  type?:'button'|'submit'|'reset';
}
const Button = ({ children, onButtonClick, bgColor = "black", type = "button" }:IButtonProps) => {
  const [isCliked, setIsClicked] = useState(false);
  return (
    <button
      type={type}
      className={style.Button}
      style={{backgroundColor:bgColor}}
      onClick={() => {
        if(onButtonClick != undefined){
          console.log(children);
          onButtonClick();
          setIsClicked(true);          
        }
        else{
          console.log("j'ai cliqué sur un bouton");
        }
      }}
    >
      {children} <br/> {isCliked.toString()}
    </button>
  );
};
export default Button;
