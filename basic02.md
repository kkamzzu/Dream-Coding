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
- 재사용 가능 언제든지 정의만 해줘도 여러개를 만들 수 있음.

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
