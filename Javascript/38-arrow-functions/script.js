// //function Declaration

// function square(num){
//     return num * num

// }

// // function Expression

// const square = function(num){
//     return num * num
// }


// // Arrow function Expression
// // use arrow => after parameter and no need to write function keyword

// const square = (num) =>{
    // // explicit return
//    return num * num
// }

//you can return the value without return keyword but also need to remove curly brackets
//called implicit return
//if passing one argument/parameter then
//you do not need to put Parentheses  but 
// you need Parentheses  for zero /more than one arguments/parameters
const square = num => num * num


const add = (a,b) => a+b

// // using as call back fucntion

// // it is set timeout function and arrow fucntion too
setTimeout(() =>{
    console.log('Hiii');
},2000)


// // practice

const subs = (num1, num2) => num1 - num2

const cube = num3 => num3 ** 3

const random = ()=> (
    Math.floor(Math.random()* 10) + 1)


    setTimeout((num4) => {
        console.log('num4')
            return num4 * num4
        },2000)
    