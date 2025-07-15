// debugger
//when we try to access a veriable before declaration 
// and do not give error that mean that veriable is hoist
console.log(a);
var a = 'Waqar'


// A temporal dead zone (TDZ) is the area of a block 
// where a variable is inaccessible until the moment 
// the computer completely initializes it with a value.
//es6 use this for let and const

//veriable is hoist but is in tdz and give us error
// console.log(b);

// let b = 'Ahmad'

// console.log(c);
// const c = 'Vizz'

//when we define a function, store it inside code in memory creation phase
//this is why we can call fucntion before its definition/declaration 
//function/class is JS is hoisted properly
hi()

//fucntion declaration
function hi(){
    console.log('Hello');

}

//when we creat a function const let var it will behave
//like a normal veriable

// if we declare/define fucntion like this, it is not loner
// a hoist function

//creating a function like this called Function Expression
sayHi()     
const sayHi = function(){     //anonymous Function
    console.log('Hiiiii');
}
