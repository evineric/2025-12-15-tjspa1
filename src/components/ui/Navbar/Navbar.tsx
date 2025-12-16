import React from "react";
import styles from "./Navbar.module.css";

interface INavbarProps {
  children?: React.ReactNode;
  parentStyle?: React.CSSProperties;
}

const Navbar: React.FC<INavbarProps> = ({
  children = "Navbar Component",
  parentStyle,
}) => {
  return (
    <div
      className={styles.Navbar}
      style={parentStyle}
      data-testid="Navbar"
    >
      {children}
    </div>
  );
};

export default Navbar;
