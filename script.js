const theRoot = document.getElementById("root");

const App = () => {
  const myItem = "the next item";
  const myOtherItem = "This is the other item";

  return (
    <ul>
      <li>item1111</li>
      <li>item2</li>
      <li>{myItem.toUpperCase()}</li>
      <li>{myOtherItem.substring(12, 17)}</li>
    </ul>
  );
};

ReactDOM.render(<App />, theRoot);
