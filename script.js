const theRoot = document.getElementById("root");

const App = () => {
  const myItem = "the next item";

  return (
    <ul>
      <li>item1111</li>
      <li>item2</li>
      <li>{myItem.toUpperCase()}</li>
    </ul>
  );
};

ReactDOM.render(<App />, theRoot);
