How useState Works

useState is a React Hook that let our component have a state and trigger re-render if state changes. It contains data and function which is use to update the data. Behind the scene useState contain a temporary array and 1st initialise it with a value and when we use set function and update the value of data then it just put new value in temporary array.
The setter function queues the update. The state value (count) does not change immediately.      React applies the update after the current event handler finishes and then re-renders the component. So, value of the data would be the same / does change the state, only update when come out of the function. 

For example
const [count, setCount] = useState(0);
setCount(count + 1)
setCount(count + 1)
so, count initial state /value is = 0
and when setCount(count + 1) , 0+1 = 1
and when we do 2nd time, setCount(count + 1); 
is tricky as update is in queue and only update the count value after the function.

setCount(count + 1) uses the snapshot from the current render, which is still 0. React will apply the update after the function completes, so inside this function count hasn’t changed yet.
setCount(count + 1); 0 + 1 = 1

next iteration count be count = 1 
1+1 = 2

But we can change the behaviour.

const [count, setCount] = useState(0);
count = 0
setCount(count + 1);  = 0 + 1 = 1  //previuous state

don’t get confused that it updating the count value immediately, infect code below is getting the value of previous state and adding 1 to it. 

setCount((previousState)=> previousState + 1)

setCount((1)=> 1 + 1) = 2

and after this it will update the count. 
.  



 
