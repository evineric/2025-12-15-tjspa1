import React from "react";
import styles from "./FlexH3Grow.module.css";

interface IFlexH3GrowProps {
  children?: React.ReactNode;
  parentStyle?: React.CSSProperties;
}

const FlexH3Grow: React.FC<IFlexH3GrowProps> = ({
  children = "FlexH3Grow Component",
  parentStyle,
}) => {
  return (
    <div
      className={styles.FlexH3Grow}
      style={parentStyle}
      data-testid="FlexH3Grow"
    >
      {children}
    </div>
  );
};

export default FlexH3Grow;
