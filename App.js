import React from "react";
import ReactDOM from "react-dom/client";

// Babel transpiles JSX to React.createElement

const Title = () => <h1>JSX is not html, it is html like syntax</h1>;

const paragraph = <p>This is react element</p>;

//React functional component
//Component composition
const HeadingComponent = () => (
  <div className="heading">
    {Title()}
    <Title />
    <Title></Title>
    <h1>React Functional Component</h1>
    {paragraph}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
