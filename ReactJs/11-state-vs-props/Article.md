Difference between props and state


1 Source:
Props: Received from the parent component.
State: Defined and managed within the component.

2 Purpose:
Props: Configure child components and pass data from parent to child.
State: Manage data that changes within the component and affects its rendering.

3Mutability:
Props: Immutable and read-only.
State: Mutable and can be updated by the component.

4Lifecycle:
Props: Passed down the component tree and only change when the parent component re-renders with new values.
State: Local to the component and persists across re-renders until updated.


Fragment

Fragment is used when we want to return two JSX element but you can only return one element you can use fragment. 
<>   <div>  <div/>  <p>  <p/>  </>
The benefits of using fragment is that you do not need to create another html element on DOM. You can return two JSX element by putting JSX inside a div but in this way we will have extra div in your dom. 
<div>   <div>  <div/>  <p>  <p/>  <div/>


