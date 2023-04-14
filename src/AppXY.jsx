import React, { useState } from "react";
import "./AppXY.css";

export default function AppXY() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  return (
    <div
      className="container"
      onPointerMove={(e) => {
        // pointer 이동시 좌표가 찍힘.
        console.log(e.clientX, e.clientY);
        setX(e.clientX);
        setY(e.clientY);
      }}
    >
      <div
        className="pointer"
        style={{ transform: `translate(${x}px, ${y}px` }}
      />
    </div>
  );
}
