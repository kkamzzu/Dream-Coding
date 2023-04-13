import React, { useState } from "react";
import Products from "./components/Products";

export default function AppProducts() {
  const [showProducts, setShowProducts] = useState(true);
  return (
    <div>
      {/* showProducts가 true라면 Products을 보여줘라*/}
      {showProducts && <Products />}
      {/* 버튼 클릭시 product을 보여줄지 않을지 토글링 가능 */}
      <button onClick={() => setShowProducts((show) => !show)}>Toggle</button>
    </div>
  );
}
