debugger

// const,let and var are global but let and const
//fall in script scope and var in window object
const userName = 'Waqar'
let userAge = 34
var a = 50

function add(){
    const userName = 'Ahmad'
    const x = 5
    const y = 8 
    console.log(x + y);
    console.log(userName); // it will log Ahmad
}

function sub(){
    const x = 5
    const y = 8 
    console.log(x - y);
    console.log(userName);
}

add()
sub()

console.log('Program Ended');


// console.log(x);