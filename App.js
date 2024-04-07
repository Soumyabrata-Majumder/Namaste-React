const heading = React.createElement("h1", { className: "test" }, "Hello World");

/*
<div id="parent">
    <div id="child-1">
        <h1>Child 1</h1>
    </div>
    <div id="child-2">
       <h1>Child 2</h2>
    </div>
</div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child-1" },
    React.createElement("h1", {}, "Child 1")
  ),
  React.createElement(
    "div",
    { id: "child-2" },
    React.createElement("h1", {}, "Child 2")
  ),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
