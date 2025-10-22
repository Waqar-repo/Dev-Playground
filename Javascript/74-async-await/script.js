/*
async and await is to access the promises. easy or little bit simple than then() and catch
if we make a fucntion a async then it return a promise even we have not returned anything 

by default, async promise is fulfilled,  to reject we need to throw error using throw keyword

*/


// async function makeRequest(){
//     // return 'Hello'               //this will be inside of PromiseResult
//     // throw new Error ('error')    //throw error and reject error

//     fetch('https://dummyjson.com/users/1')
//     .then((res) => res.json())
//     .then((data)=>{
//         console.log(data);
//         return fetch('https://dummyjson.com/users/1')
//     })
//     .then((res)=> res.json())
//     .then((gender)=>{
//         console.log(gender.gender);
//     })
  
// }

async function makeAsyncRequest(){

/*await keyword returns the result of fetch/promise which is response object,otherwise fetch return promise
it waits to data to come.
it leave the call stack and remember at which point it left(browser give new thread,wait there) 
and come back to call stack when data comes and start execution from same point, 
it is async but behave like sync
*/
    const response = await fetch('https://dummyjson.com/users/1')
console.log(response);

/*response veriable has respose notactual data,
code below gives us data from fetch request */
const data = await response.json()
// console.log(data);

//resolve the promise when encounter  return keyword
return data
}
//async return a promise so we can use then() catch()
makeAsyncRequest().then((data)=> console.log(data))
/*code below is sync code when this runs java script main thread blocks
this is example that shows the benefits of async code/request */
function makeSyncRequest(){
    const startTime = Date.now()
    let currentTime = startTime
    while(startTime + 5000 > currentTime){
        currentTime = Date.now()
    }
}
// makeSyncRequest()

/* this will console log while makeAsyncRequest waiting so it is not blocking*/
function addNum(){
    console.log(5 + 5); 
}
addNum()

/*

The throw statement throws a user-defined exception. Execution of the current function will
 stop (the statements after throw won't be executed), and control will be passed to the 
 first catch block in the call stack. If no catch block exists among caller functions, 
 the program will terminate.
*/

// function hi(){
//     console.log('hi');
//     throw 'error'
//     console.log('Hi 2');
// }
