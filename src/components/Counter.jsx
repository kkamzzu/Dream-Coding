import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <span className="number">{count}</span>
      <button
        className="button"
        onClick={() => {
          // 아무리 많이 setCount를 호출해도 카운트가 0으로 고정되어있어 무조건 0+1
          // setCount(count + 1);
          setCount((prev) => {
            return prev + 1;
          });
          // same
          //setCount가 호출될떄 이전 상탯값을 콜백인자로 전달받음. 리액트가 전달해줌
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
        }}
      >
        Add +
      </button>
    </div>
  );
}
