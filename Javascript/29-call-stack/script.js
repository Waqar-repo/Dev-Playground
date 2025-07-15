//A call stack is a mechanism for an interpreter 
// (like the JavaScript interpreter in a web browser) 
// to keep track of its place in a script that calls 
// multiple functions
debugger;

sayHi();

const username = 'Waqar';
const userAge = 34;

function sayHi() {
  const a = 14;
  const b = 12;
  add(7, 9);
}

function add(x, y) {
  kuchhBhi();
  return x + y;
}

function kuchhBhi() {
  console.log('Kuchh bhi');
}

// function introduceMe(){
//     console.log('Hi, My name is Waqar Ahmad');

// }
// introduceMe()
// console.log('Program Ended');
