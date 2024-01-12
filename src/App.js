const App = () => {
  return React.createElement(
    "section",
    { id: "first-sec" }, // PUT YOUR ATTRIBUTES HERE
    React.createElement("p", {}, "Hello world I am coming (;")
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));

// NOTE: ASA = Automatically Semicolon Assertion ==> if you write a code something like:
// let y = ['a', 'b']
// [1].map(x => x)
// the compiler think those two lines are with each other like this "let y = ['a', 'b'][1].map(x => x)" and compile them with each other cause we dont use semicolon in the right place.
