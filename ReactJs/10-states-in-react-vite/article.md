Event handling in React is different from vanilla JavaScript. Instead of adding events directly to custom components, you attach events to HTML elements inside the component. If a parent component wants to control what happens, it passes a function as a prop to the child component, which the child then uses for the event.

This approach may feel confusing at first, but it makes event handling more predictable and organized in React.

Example:
const Button = ({ onClick }) => {
  return <button onClick={onClick}>Click Me</button>;
};

const App = () => {
  const sayHello = () => console.log("Hello!");
  return <Button onClick={sayHello} />;
};

The parent App passes a function (sayHello) as a prop.

The Button component uses it on the <button> element.

When clicked, sayHello executes.