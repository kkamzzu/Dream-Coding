# `REACT` : 컴포넌트들의 집합체

### 공식 사이트

https://ko.reactjs.org/

- `user interface` 를 만들기 위한 자바스크립트 라이브러리.
- 웹, 모바일 앱을 손쉽게 만들 수 있게 해줌.
- 심플한 정적 사이트부터 복잡한 규모까지 가능.

- `SPA` : Single Page Application

- `CSR` : Client Side Rendering

## `Frame works`

- 만드는데 필요한 것이 다 갖춰짐.
- Routing, UI, HTTP Clients, State management -> 다 들어있음.
- 정해진 틀 안에서 만듬. 자율성은 떨어짐.
- ex) Angular, IOS, 안드로이드 \*Vue는 경량형 프레임 워크

## `Libraries`

- 큰 골격이나 규칙이 정해지지 않음.
- 필요할때마다 내가 원하는 것을 골라 사용 가능 (자율성up).
- ex) React

## `REACT`를 한마디로 정의한다면

- components
- 웹페이지를 박스단위로 분석하기(박스단위로 사고, 구현하기)

## `핵심`

- 각각 필요한 컴포넌트들을 가져와서 조립.
- 컴포넌트들을 잘 가져와 만드는 것.

## 컴포넌트를 나누는 `단위`

- 재사용성 (DRY: Don't Repeat Yorself)
- 단일책임 (SR: Single Responsibility)

A highly cohesive building block for UIs loosely coupled with other components

- React -> root -> navbar, content -> logo, button, article

## 리액트 `동작원리`

```js
// 사용하는 곳
// 대문자 시작
<CounterButton name="dreamCoder" />;

// 컴포넌트 정의
// 함수형 컴포넌트
export function CounterButton(props) {
  const [count, setCount] = useState(0);
  return (
    // render
    <div>
      <h1>Hello, {props.name}</h1>
      <button onClick={() => setCount((count) => count + 1)}>{count}</button>
    </div>
    //  -> JSX문법
  );
}
```

## REACT

- 데이터를 `State`(내부상태), `Props`(외부로부터 전달받은 상태)
- 이 두가지를 나타내는 `render`가 있음.
- 상태가 변경될떄마다 `re-render` 됨.

## `REACT HOOK?`

(낚아채다, 갈고리처럼 연결하다)

- 재사용 가능한 로직들 `재사용 가능한 함수다.`
- 우리만의 Hook 제작 가능. (use로 시작해야함)
- use로 시작함 ex) useState, useEffect, UseRef...
- 내가 원하는 것을 재사용 가능.

### `HOOK은 값의 재사용이 아니라 로직의 재사용을 위한것이다.`

`useState` : 상태관리조직

`useEffect`: 컴포넌트 생애주기 관리조직

`useUser` : 서버에서 받아온 사용자

### `Node`

- 브라우저 밖에서 자바스크립트를 실행할 수 있게 해주는 자바스크립트 실행환경.
- 'NPM'이 자동으로 설치됨. -> 패키지 매니저
- npx도 npm설치시 자동으로 설치됨(패키지들을 개별적으로 실행할 수 있게 도와주는 tool)

### `Yarn`

- pakage manager.
- npm과 서로 호환 가능하지만 추천하진 않음.
- 필요한 라이브러리를 병렬적으로 동시에 설치, 실행.
- npm에 비해 빠르며 보안성도 높음.

## React의 중요한 tool

### BABEL

JavaScript `transcompiler`

- 사용자의 브라우저 버전을 걱정하지 않고 마음껏 최신버전으로 개발가능.

### WEBPACK

`Bundling` the code, JavaScript `module` `bundler`

- 우리의 코드를 잘 포장해서 사용자에게 배포할 수 있게 도와주는 모듈 번들러.

### ESLint

`checking` your code

- 우리가 코드를 잘 작성하고 있는지 어떤 부분이 잘못 되었는지 체크해줌.

### Jest

delightful JavaScript `testing` framework

- 우리 코드가 원하는대로 동작하는지 테스트.

### PostCSS

`expandable` CSS libraries
