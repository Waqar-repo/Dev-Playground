

Lifting State Up in React

Sometimes two sibling components need to communicate with each other.

Normally, siblings cannot talk directly because they are separate components.

One way is using callback functions, but the clean and efficient way is:

 Lift the state up to their closest parent component.


That means:

Create the useState in the parent.

Pass data and functions to children using props.

Children use those props to send and receive data.

Example: Search Feature

Imagine we have:

A SearchInput component

A CardList component (shows filtered data)

Both are inside a parent component.

We lift the state to the parent.


--------------------------------------------------------

useEffect in React

useEffect is a hook that runs side effects in React.

It takes:

A callback function

A dependency array

useEffect(() => {
  // code here
}, [dependencies]);


The code runs whenever the dependencies change.

1️ Run Once (Component Mount)

If we pass an empty array [], the effect runs only once when the component mounts.

Example: Fetching API data

import { useEffect, useState } from "react";

function App() {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch("API_URL")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);

  return <div>{countriesData.length}</div>;
}


Because dependency array is empty, it runs only once.

2 Run When a Variable Changes

If we want the effect to run when a variable changes, we add it to the dependency array.

useEffect(() => {
  console.log("Count changed");
}, [count]);


Now it runs every time count changes.

3️ Cleanup Function

Sometimes we need to clean something when component unmounts.

Example: clearing interval.

useEffect(() => {
  const interval = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => {
    clearInterval(interval);
    console.log("Cleaning up");
  };
}, []);


The function inside return is called cleanup function.

It runs:

When component unmounts Or before effect runs again (if dependencies change)