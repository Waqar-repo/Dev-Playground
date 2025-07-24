//inside setTImeout() is single quote it will take it as veriable or java script code not string or numer etc
// it also returns the value which is the id of the time


//this can execute the code user desired time in milliseconds
//1st argument is the code you want to run etc and seconds would be the time in milliseconds
// setTimeout('console.log("Hi"); console.log("I am programmer")',400)

// to use multiple line, use Template literals ``
// setTimeout(`console.log("Hi");
//             console.log("I am programmer")`,400)

// debugger
const time1 = setTimeout(`console.log("Hi")`,1000)
const time2 = setTimeout(`console.log("Hi2")`)
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

//passing named fucntion
const time4 = setTimeout(a,3000,'assd',99,'asdasd',[1,7])

//passing Ananymous function
setTimeout(function(){
    console.log('Hi,Ananymous');
},1000)
function a(){
// console.log(arguments);
    console.log('Hello World');

}
//question which one will console.log 1st

//ans: console.log('adsasdasasdsadsad') will print first then
//then const time2 = setTimeout(`console.log("Hi2")`)
//java script normal code is synchronous(line by line)
//but settimeout() asynchronous function (does not happen right away)
console.log('adsasdasasdsadsad');


//setinterval() will run the code on repeate according to given time

// const time5 = setInterval(`console.log("Hi-interval")`,1000)
// const time6 = setInterval(`console.log("Hi2-interval")`)
const time7 = setInterval(a,4000)