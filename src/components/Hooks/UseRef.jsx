import React, { useRef } from "react";

const UseRef = () => {
  const colorParagraph = useRef(null); //  colorParagraph = {current:null}
  const colors = ["#8D6F64", "#060270", "#E4080A", "#FE9900", "#D20103"];

  const StyleParagraph = () => {
    const randomColors = Math.floor(Math.random() * colors.length);
    colorParagraph.current.style.color = colors[randomColors];
  };
  return (
    <div>
      <button onClick={StyleParagraph}>Change text Color</button>
      <h1 ref={colorParagraph}>Abineshwaran </h1>
    </div>
  );
};

export default UseRef;
