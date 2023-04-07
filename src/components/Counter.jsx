import React, { useState } from "react";

export default function Counter({ total, onClick }) {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <p className="number">
        {count} <span className="total">/{total}</span>
      </p>
      <button
        className="button"
        onClick={() => {
          // 아무리 많이 setCount를 호출해도 카운트가 0으로 고정되어있어 무조건 0+1
          setCount((prev) => prev + 1);
          onClick();
        }}
      >
        Add +
      </button>
    </div>
  );
}
