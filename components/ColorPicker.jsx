import React, { useContext } from "react";
import { PainterContext } from "../contexts/PainterContext";
import { useState } from "react";

export default function ColorPicker(props) {
  const color = props.color;

  const { selColor, setSelColor } = useContext(PainterContext);
  return (
    <div
      onClick={() => {
        setSelColor(color);
      }}
      style={{
        backgroundColor: color,
        width: "50px",
        height: "50px",
        borderStyle: "solid",
        borderColor: selColor === color ? "magenta" : "black",
        borderWidth: selColor === color ? "7px" : "2px",
      }}
    />
  );
}
