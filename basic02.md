## Strict Mode

```js
<React.StrictMode>
  <App />
</React.StrictMode>
```

- 엄격한 모드에서 개발하지만 배포시 자동으로 꺼짐

## JSX 주의사항

- 컴포넌트는 꼭 하나의 태그를 반환해야함. 다수의 태그를 반환하고 싶다면 부모 태그로 감싸기
- html: class, React: className 사용
- html처럼 작성하고는 있지만 JavaScript파일에 들어있기 때문에 javascript코드 작성이 가능함. 그렇기에 `javascript코드를 사용할땐 중괄호를 사용해야함`.

```js
function App() {
  const name = "kkamzzu";
  const list = ["milk", "banana", "coffee", "yogurt"];
  return (
    <>
      <h1 className="orange">Hello</h1>
      <h2>Hello</h2>
      // 그냥 name이라고 쓰면 문자열로 인식함.
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img style={{ width: "200px", height: "200px" }} src="https://images.unsplash.com/photo-1680484006397-64f3fcd8fc14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80 " />
    </>
  );
}
```

- 자바스크립트 문법은 무조건 중괄호로 묶어줘야함.
- 변수는 `${}`

```js
<h1 className="orange">{`Hello! ${name}`}</h1>
```

- item을 인자로 받아서 값을 바로 반환하기 때문에 중괄호와 리턴이 생략됨

```js
<ul>
  {list.map((item) => (
    <li>{item}</li>
  ))}
</ul>
```

- 만약 리턴을 생략하고 싶지 않다면..

```js
<ul>
  {list.map((item) => {
    return <li>{item}</li>;
  })}
</ul>
```

- 화살표 함수를 사용하지 않는다면..

```js
<ul>
  {list.map(function (item) {
    return <li>{item}</li>;
  })}
</ul>
```

## JSX 유용한 사이트

html코드를 JSX로 간편하게 변환해주는 사이트

https://transform.tools/html-to-jsx

- react component면 확장자를 `jsx`로 바꿔주기

- 함수 앞에 `export`를 붙힐 수 있음.
- 컴포넌트 이름을 두번 바꾸지 않아도 돼서 편함.

```js
export default function Profile() {
  return <h1>Profile</h1>;
}
```

### global.code-snippets 적용방법

command + shift + p (커멘드 팔렛 열기) => snippets검색 => configure user sinppets => javascript.jsx => 아래 Json파일 붙여넣기

```js
{
  "reactFunction": {
    "prefix": "rfc",
    "body": "import React from 'react';\n\nexport default function ${1:${TM_FILENAME_BASE}}() {\n\treturn (\n\t\t<div>\n\t\t\t\n\t\t</div>\n\t);\n}\n\n",
    "description": "Creates a React Function component"
  },
  "reactStatelessImplicitReturn": {
    "prefix": "rsi",
    "body": "import React from 'react';\n\nexport const ${1:${TM_FILENAME_BASE}} = (props) => (\n\t\t\t$0\n\t);",
    "description": "Creates a React Function component"
  },
  "Import Module CSS": {
    "prefix": "si",
    "body": ["import styles from './$TM_FILENAME_BASE.module.css'"],
    "description": "Import PostCSS"
  },
  "ClassName": {
    "prefix": "cn",
    "body": ["className={styles.$1}"],
    "description": "Adding className"
  }
}
```

-> rfc,rsi : 단축으로 간편하게 만들 수 있음

### box shadow site

https://cssgenerator.org/box-shadow-css-generator.html

## Making component

- 이렇게 컴포넌트를 만들어 두면 외부상태와 연결되어있지않은 독립적인 컴포넌트가 완성됨.
- 재사용 가능 언제든지 정의만 해줘도 여러개를 만들 수 있음.ㅎ

```js
import React from "react";

export default function Profile() {
  return (
    <div className="profile">
      <img
        className="phote"
        src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        alt="avatar"
      />
      <h1>Joy</h1>
      <p>친구네 강아지</p>
    </div>
  );
}
```

## Making Props

-> 재사용성이 낮음 `props`를 이용해서 재사용성 높이기

- 컴포넌트의 속성으로 원하는 key와 value들을 명시하면 key와 value들이 props라는 객체로 전달됨.
- component안에서는 `props.name`, `props.img`로 접근해서 외부(AppProfile.jsx)로 부터 전달된 속성을 ui로 표현해줌.

- `props 오브젝트` 안에 img, name, title 을 받아올 것.
- 이렇게 사용시 앞에 `props.` 생략가능.

```js
// Profile.jsx
import React from "react";

export default function Profile({ image, name, title }) {
  return (
    <div className="profile">
      <img className="phote" src={image} alt="avatar" />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
```

```js
//AppProfile.jsx
import Profile from "./components/Profile";
import "./App.css";

function AppProfile() {
  return (
    <>
      <Profile
        image="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
        name="JOY"
        title="친구네 강아지"
      />
      <Profile
        image="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80"
        name="KIKI"
        title="우리집 강아지"
      />
      <Profile
        image="https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
        name="MONDAY"
        title="친구네 강아지"
      />
    </>
  );
}

export default AppProfile;
```

- isNew가 true인 경우에만 실행.

```js
{
  isNew && <span className="new">New</span>;
}

//

<Profile
  image="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
  name="JOY"
  title="친구네 강아지"
  button="NEW"
  isNew={true}
/>;
```

- 어려우면 개발자 툴에 리액트를 보면서 어떤 prop이 들어왔는지 확인하기

## EVENT

```js
<button
  onClick={(event) => {
    console.log(event);
    alert("버튼이 클릭됨");
  }}
>
  click
</button>
```

<!-- 둘다 가능 -->

```js
function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    alert("버튼이 클릭됨");
  };
  return (
    <>
                  // 함수의 이름만 적어야지 호출하면 안됨.
                  // ex) handelClick()
      <button onClick={handleClick}>click</button>}
```

https://legacy.reactjs.org/docs/handling-events.html

## useState

- 리액트에서는 이렇게 유아이와 밀접하게 관련있는 데이터는 `state` 라는 곳에 보관을 해줘야함.
- 로컬변수를 아무리 만들어도 리액트는 변경이 됐는지 모름.

- stateful한 value를 리턴한다. 즉, 변경이 가능한 value을 리턴함.
  function도 리턴함. 이 value를 업데이트할 수 있는 함수를 리턴해준다

- 배열의 첫번째 아이템 : 초기값
- 배열 두번째 : 상태를 업데이트 할 수 있는 함수가 리턴

```js
const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <span className="number">{count}</span>
      <button
        className="button"
        onClick={() => {
          //setCount에 지금 가지고 있는 count  +1
          setCount(count + 1);
        }})
```

- count 변수는 const에 할당이 되었기 때문에 변경이 불가능하다.

- count 값이 set 될때마다 리액트가 자동적으로 카운터라는 함수를 다시 호출해줌.
- 반환되는 리턴에는 현재 count값이 들어감으로 전체적으로 업데이트됨.

- 중요: count에 전달되는 prop이 있으면 그 Prop이 변경되거나 내부에서 가지고있는 useState 상태가 변경이 되면 -> setCount를 호출하면 내부상태가 변경되고, 변경될때바다 변경된 해당 컴포넌트 함수 전체를 다시 호출함.

- 가상의 Dom 요소를 사용해서 이전 Dom요소와 지금의 Dom요소에서 변경된 부분 즉 span만 업데이트 해줌.

- 함수가 계속 호출되도 0으로 초기화 되지않는 이유는 유즈 스테이트 훅은 아무리 다시 호출해도 증가된 값을 기억함

## UseState(2)

- 리액트에서 상태를 사용할때는 일반변수 사용 안됨. -> useState 사용
- 초기값 설정해주면 useState 호출했을때 베열이 전달됨.

1. 첫 번째는 값을 가리키는 변수.
2. 두 번재 업데이트 할 수 있는 함수.

- 값을 설정해서 setCount틑 0 으로 지정할수 있고, 이전 상태값을 더하거나 빼거나
- -> 기존의 스냅샷인 외부값에 의존하기보다는 콜백함수 형태로 set하는게 안전함.

```js
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
```

## useEffect

- fetch(상대경로로 접근할 수 있음.)
- fetch = 비동기 -> fetch를 잘 받아온다면 response로 받아서 response를 json 형태로 변환해줘야함.
- 이것까지 잘된다면 우리가 원하는 데이터 아이템이 들어옴.
- 잘 받았는지 확인하려면 console.log() -> 무한대로 패치가 나옴.(성능에 큰 문제가 생김)
- useState([])함수가 실행되면서 스테이트를 초기화
- 네트워크를 받아오면 setProducts(data)이용해서 상태를 업데이트 해줌
- 그럼 리액트가 상태가 변경된 컴포넌트의 함수를 리액트가 다시 호출하기 때문.

`무한루프에 빠지지 않으려면 컴포넌트가 보여질때 딱 첫번째만 받아야함 그뒤로는 네트워크를 요청하지 않게 해야함 -> 그게 바로 useEffect!`

```js
import React, { useState } from "react";

export default function Products() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  fetch("data/products.json")
    .then((res) => res.json())
    .then((data) => {
      console.log("뜨끈한 데이터 네트워크에서 받아옴");
      setProducts(data);
    });
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
```

```js
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
// 텅텅빈 배열을 전달하면 아무런 디팬던씨가 전달되지 않고,
// 컴포넌트가 첨 보여질때만 useEffect에 등록된 콜백함수가 호출됨.
// 딱 한번만 데이터를 받고싶으면 텅빈 배열을 넣어줘.
```

### map을 이용해서 리스트의 자식요소를 만들 때 아무런 키를 전달하지 않으면 오류가 생김

- 리스트의 자식들은 유니크한 키를 갖고 있어야함

```js
          <li key={products.id}>

// json file
[
  {
    "name": "좋은청바지",
    "price": "$50",
    "id": "1234"
  },
  {
    "name": "좋은티셔츠",
    "price": "$50",
    "id": "12342"

  },
  {
    "name": "부츠",
    "price": "$20",
    "id": "12334"

  }
]
// 더이상 오류안남

```
