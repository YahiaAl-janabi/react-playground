const theRoot = document.getElementById("root");

const App = () => {
  const myItem = "the next item";
  const myOtherItem = "This is the other item";
  const theTitle = "This is the title";
  return (
    <div>
      <ul>
        <li>item1111</li>
        <li>item2</li>
        <li>{myItem.toUpperCase()}</li>
        <li>{myOtherItem.substring(12, 17)}</li>
        <li>{myOtherItem.length}</li>
      </ul>

      <h1>{theTitle}</h1>
    </div>
  );
};

ReactDOM.render(<App />, theRoot);
