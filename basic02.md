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
  return (
    <>
      <h1 className="orange">Hello</h1>
      <h2>Hello</h2>
      // 그냥 name이라고 쓰면 문자열로 인식함.
      <p>{name}</p>
      <ul>
        <li>우유</li>
        <li>딸기</li>
        <li>바나나</li>
      </ul>
      <img style={{ width: "200px", height: "200px" }} src="https://images.unsplash.com/photo-1680484006397-64f3fcd8fc14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80 " />
    </>
  );
}
```
