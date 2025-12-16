import React, { useEffect, useState } from "react";
import style from "./Button.module.css";
interface IButtonProps {
  children: React.ReactNode | Array<React.ReactNode>;
  onButtonClick?: () => void;
  bgColor?: string;
  type?: "button" | "submit" | "reset";
}
const Button = ({
  children,
  onButtonClick,
  bgColor = "black",
  type = "button",
}: IButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      if (isClicked) {
        setIsClicked(false);
        console.log("verif");
      }
    }, 421);
    return () => {};
  }, [isClicked]);
  return (
    <button
      type={type}
      className={`${style.Button}${isClicked ? ` ${style.clicked}` : ""}`}
      style={{ backgroundColor: bgColor }}
      onClick={() => {
        if (onButtonClick != undefined) {
          console.log(children);
          onButtonClick();
          setIsClicked(true);
        } else {
          console.log("j'ai cliqué sur un bouton");
        }
      }}
    >
      {children}
    </button>
  );
};
export default Button;
