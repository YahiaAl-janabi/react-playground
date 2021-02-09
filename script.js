const reactContentRoot = document.getElementById("root");

const list = React.createElement(
  "ul",
  null,
  React.createElement("li", null, "list item 1"),
  React.createElement("li", null, "list item 2")
);

ReactDOM.render(list, reactContentRoot);
