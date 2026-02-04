conditional Rendering

Conditional rendering means showing or hiding UI elements in a React application based on a condition
In React, we can use conditions to render components, elements, or text depending on the application state or props.
For example, if a user is logged in, we may want to hide the Login button and show a Logout button. If the user is not logged in, we show the Login button instead:

{loggedin ? <Logout /> : <Login />} 
this is ternary conditional operator so if logged in true logout button will render and if logged in false login button render .
 Inline Conditional Rendering in JSX
We can also conditional render inside a jsx using inline condition which is commonly used using AND && operator

<p>{backetName}{appleCount === 10  &&'  (Full)'}
{appleCount === 0  &&'  (empty)'}
{(appleCount >= 5 && appleCount !== 10) &&  '  Half Full'}
</p>

Conditional rendering is a powerful toolkit in React that allows us to render different values, text, or components according to application requirements, user actions, or state changes.







