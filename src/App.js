import "./App.css";

function App() {
  const name = "kkamzzu";
  const list = ["milk", "coffee", "banana", "tomato"];
  return (
    <>
      <h1 className="orange">{`Hello! ${name}`}</h1>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img
        style={{ width: "200px", height: "200px" }}
        src="https://images.unsplash.com/photo-1680484006397-64f3fcd8fc14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80 "
      />
    </>
  );
}

export default App;
