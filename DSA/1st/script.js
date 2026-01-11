
/*

Print Numbers from 1 to N

Input: 5
Output: 1 2 3 4 5
✨ Teaches basic loop construction.

*/

// let input = 5
// let output = 0

// for ( let i = 1; i <= input;i++){
//     output++
//     console.log(output);
// }

console.log('------2--------------');


/*
Print Numbers from N to 1 without changing the loop condition of above question

Input: 5
Output: 5 4 3 2 1
✨ Thinking creatively and manipulating logic within the loop

*/

// while(input > 0){
//     output = input--
//     console.log(output);
    
// }


console.log('------3--------------');


/*

Print All Even Numbers from 1 to N

Input: 10
Output: 2 4 6 8 10
✨ Introduces conditional checks inside loops.

*/


// let input = 10
// let output = 0

// for( let i = 1; i <= input; i++){
    
//     if(i % 2 === 0){
// console.log(i);

//     }
// }

console.log('------4--------------');

/**
 Sum of First N Natural Numbers

Input: 5
Output: 15
✨ Encourages cumulative addition and variable usage.
 */

// const n = 5
// let output = 0
// for(i = 1; i <= n; i++){

//     output = output + i
    
// }
// console.log(output);


console.log('------5--------------');


/*

Product (Factorial) of N

Input: 5
Output: 120
✨ Reinforces loop control with multiplication logic.

*/

// const n = 5
// let output = 1
// for(i = 1; i <= n; i++){
// console.log(i);
//     console.log('fac',output = output * i);
    
    
// }
// console.log(output);


console.log('------6--------------');

/*

Sum of All Even Numbers up to N

Input: 10
Output: 30 (2+4+6+8+10)
✨ Combines loops + condition + accumulation.

*/

// const num = 10
// let output = 0

// for (let i=1;i<=num;i++){
//     if(i % 2 === 0){
//         output+=i
//     }
// }
// console.log(output);


console.log('------7--------------');

/*

Print Squares of Numbers from 1 to N

Input: 5
Output: 1 4 9 16 25
✨ Introduces arithmetic pattern generation.


*/

// const num1 = 5

// for(let i = 1; i<=num1;i++){
//     console.log(Math.pow(i,2));
// }


//Practice
console.log('----practice---------');


// console.time()

/*

Print all numbers divisible by 3 and 5 up to N

Input: 30
Output: 15 30
✨ Reinforces conditional checks inside loops.


*/

// const num = 30

// for(let i = 1; i <= num;i++){
  
//     if(i % 3 === 0 && i % 5 === 0){
// console.log(i);
//     }


// }

// console.timeEnd()

// console.time()

// using different approach
//lcm of 3,5 = 15

// const num2 = 30

// for(let i = 15; i <= num2; i=i+15){
  
//    console.log(i);

//     }



// console.timeEnd()


/*
Find the sum of all odd numbers up to N

Input: 10
Output: 25 (1 + 3 + 5 + 7 + 9)
✨ Combines looping with conditional accumulation.

*/

// console.time()

// const input = 10

// function oddNumSum(){
//     const k2 = input / 2
//     return Math.pow(k2,2)
// }
// console.log(oddNumSum())

// console.timeEnd()


// console.time()

// let accu = 0
// for(let i =1; i <= input;i++){
// if(i % 2 !==0){
//     accu = accu + i
// }
// }
// console.log(accu);
// console.timeEnd()

/*

Print the cubes of numbers from 1 to N

Input: 5
Output: 1 8 27 64 125
✨ Extends arithmetic pattern logic beyond squares.


*/

// const input = 5

// for(let i =1; i<= input; i++){
//     console.log(i**3);
// }

/*

Print only the numbers that are both even and perfect squares

Input: 1 to 20
Output: 4 16
✨ Encourages combining two conditions within one loop.

*/

const input = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
  71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
  81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
  91, 92, 93, 94, 95, 96, 97, 98, 99, 100
]

let output=[]
for(let i = 1; i<= input.length;i++){
    
    let sqrt = Math.sqrt(i)
    if(sqrt % 1===0 && sqrt % 2 ===0){
        // console.log(i);
        output.push(i)
    }
}
console.log(output);





