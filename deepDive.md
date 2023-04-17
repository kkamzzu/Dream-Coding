### 잘 모르면 구글링 하기

- ex) react pointer events

- 서로 연관있는 데이터는 하나의 객체로 단 하나의 상테를 관리해주는게 좋음.

```js
export default function AppXY() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  // -> 이렇게 하기보다는 한번에 묶어주기


  // 개선
  const [position, setPosition] = useState({ x: 0, y: 0 });
  setPosition({ x: e.clientX, y: e.clientY });
      <div
        className="pointer"
        style={{ transform: `translate(${position.x}px, ${position.y}px` }}
      />
```

- 수평으로만 이동시키고 싶다면?

```js
return (
  <div
    className="container"
    onPointerMove={(e) => {
      console.log(e.clientX, e.clientY);
      // y: prev.y
      setPosition((prev) => ({ x: e.clientX, y: prev.y }));
    }}
  >
    <div
      className="pointer"
      style={{ transform: `translate(${position.x}px, ${position.y}px` }}
    />
  </div>
);
```

- 좌표안에 다양한 값이 있다면 (ex: x: 0, y: 0, z: 0 ) 일일히 다쓰지 않고,
- spread 연산자를 사용.

```js
// 그 중에 x만 원하는 값으로 변경할 것이라면
setPosition((prev) => ({ ...prev, x: e.clientX }));
```

## 중첩된 객체

```js
const [person, setPerson] = useState({
  name: "엘리",
  title: "개발자",
  // 중첩된 객체
  mentor: {
    name: "밥",
    title: "시니어개발자",
  },
});
```

- spread 연산자 이용해서 업데이트하기

```js
import React, { useState } from "react";

const obj = {
  name: "kkamzzu",
  title: "swimmer",
  mentor: {
    name: "barnes",
    title: "constructor",
  },
};

const name = "업데이트 이름";
const update = {
  ...obj,
  // 덮어씌워주기 가능, 이름만 업데이트
  // name: name -> 축약가능
  menter: { ...obj.mentor, name: name },
};
//
```
