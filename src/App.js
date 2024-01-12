const Friends = (props) => {
  return React.createElement("ul", {}, [
    React.createElement("li", {}, props.name),
    React.createElement("li", {}, props.age),
    React.createElement("li", {}, props.city),
  ]);
};

const App = () => {
  return React.createElement("section", {}, [
    React.createElement(
      "p",
      { id: "greeting" }, // PUT YOUR ATTRIBUTES IN THIS SECTION
      "Hello world I am coming (;"
    ),
    React.createElement("p", {}, "My some friends name are:"),
    React.createElement(Friends, { name: "Pedram", age: 27, city: "LA" }),
    React.createElement(Friends, {
      name: "Lilo",
      age: 22,
      city: "San Francisco",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));

// NOTE: ASA = Automatically Semicolon Assertion ==> if you write a code something like:
// let y = ['a', 'b']
// [1].map(x => x)
// the compiler think those two lines are with each other like this "let y = ['a', 'b'][1].map(x => x)" and compile them with each other cause we dont use semicolon in the right place.
