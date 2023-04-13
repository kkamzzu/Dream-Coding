import React, { useEffect, useState } from "react";

export default function Products() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  // 우리가 원하는 함수를 여기 넣으면 됨
  // 콜백함수를 전달할것.
  useEffect(() => {
    fetch("data/products.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("뜨끈한 데이터 네트워크에서 받아옴");
        setProducts(data);
      });
    return () => {
      console.log("깨끗하게 청소하는 일들을 합니다");
    };
  }, []);
  // 딱 한번만 데이터를 받고싶으면 텅빈 배열을 넣어줘.
  return (
    <>
      <ul>
        {products.map((products) => (
          <li key={products.id}>
            <article>
              <h3>{products.name}</h3>
              <p>{products.price}</p>
            </article>
          </li>
        ))}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}
