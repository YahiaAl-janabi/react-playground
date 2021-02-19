const theRoot = document.getElementById("root");

const App = () => {
  const myItem = "the next item";
  const myOtherItem = "This is the other item";

  return (
    <div>
      <ul>
        <li>item1111</li>
        <li>item2</li>
        <li>{myItem.toUpperCase()}</li>
        <li>{myOtherItem.substring(12, 17)}</li>
      </ul>

      <h1>The title of the page</h1>
    </div>
  );
};

ReactDOM.render(<App />, theRoot);
