//inner fucntion lexical scope is its own scope,
// outer function scope and global scope.
//  for outer fucntion, own scope and global scope
const username = 'Waqar'
let userAge = 25
var a = 50

// function add() {

//   const username = 'Ahmad'
//   const x = 5
//   const y = 8
//   console.log(x + y)
//   console.log(username)
// }

function subtract() {
// debugger
  const x = 15
  const y = 18
  const z = 28
  console.log(x - y)
  console.log(username)

  // console.log(grandChildName); can acccess parent fucntion's
  //veriable in child/grand. but innter fucntion access to it parent block scope
function child(){
    const childName = 'Muhammad'
    console.log(childName);

    //when inner fucntion use veriable of outter function
    //then inner fucntion makes closure
    console.log(x,z);

    {

  //let and const are block level scope
  //thats why it can not be access outside of its block
  //not not in the case of var but not accessible outside fucntion. 
let num = 40
var num1 = 40
console.log(num);

//if we define a veriable like that.
//it will become windwos object
// "use strict" will prevent this behaviour
num3 = 44

}
// console.log(num)
console.log(num1);

    function grandChild(){
      const grandChildName = 'Ammar'
      console.log(grandChildName);
      console.log(childName);

      
    //when inner fucntion use veriable of outter function
    //then inner fucntion makes closure
      console.log(x);
    }
grandChild()
}
child()
console.log(num3);
// console.log(num1);


}

// add()
subtract()



console.log('Program Ended')