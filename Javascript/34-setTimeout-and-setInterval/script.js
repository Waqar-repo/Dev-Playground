//inside setTImeout() is single quote it will take it as veriable or java script code not string or numer etc
// it also returns the value which isnthe id of the time


//this can execute the code user desired time in milliseconds
//1st argument is the code you want to run etc and seconds would be the time in milliseconds
// setTimeout('console.log("Hi"); console.log("I am programmer")',400)

// to use multiple line, use Template literals ``
// setTimeout(`console.log("Hi");
//             console.log("I am programmer")`,400)

// debugger
const time1 = setTimeout(`console.log("Hi")`,1000)
const time2 = setTimeout(`console.log("Hi2")`,2000)
// setTimeout(a(),4000) will explicitly call function will print the value and return undefined 
// and time3 will not run as it will have setTimeout(undefined,4000)
// const time3 = setTimeout(a(),4000)

//use this instead
const time3 = setTimeout(a,4000)

//you can use clearTimeout() /clearInterval() and pass timer ID as a argument to cancel the code execution/run
// clearTimeout(time3)
// console.log(time1);
// console.log(time2);
// console.log(time3);

// practical use
function a(){
console.log('Hello World');
}