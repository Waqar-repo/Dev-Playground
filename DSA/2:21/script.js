/*

Find the Maximum of Three Numbers

Input: 10 20 5
Output: 20
✨ Teaches nested or chained conditional logic and comparative reasoning.

*/
// console.time()
// const a = 10000
// const b = 20000
// const c = 50000
// let result = 0
// if( a > b && a > c){
// result = a
// } else if (b > c){
//     result= b
// }
// else{
//     result = c
// }
// console.log(result);

// console.timeEnd()

// console.time()
// function maxOfThree(a,b,c){
//     let max;

//     if(a>=b && a>= c){
//         max = a
//     } else if(b >= c){
//         max = b
//     }
// else{
//     max = c
// }
// return max
// }
// console.log(maxOfThree(10000,20000,50000));
// console.timeEnd()

// console.time()
// console.log(Math.max(10000,20000,50000));
// console.timeEnd()

/*

Check if a Number is Positive, Negative, or Zero

Input: -9
Output: Negative
✨ Practices multi-branch conditions and comparison operators.


*/

// const num = 1

// function numCheck(n = 0){
//     if(n > 0){
//         return 'Positive'
//     } else if( n <0){
//         return 'Negative'
//     }
//         return 'Zero'
//     }

// console.log(numCheck());

/*

Calculate Electricity Bill
Input: Units = 230

Output: Total Bill = ₹1500

✨ Applies multiple ranges using chained else if and cumulative logic.

Example Logic:

0–100 units → ₹5 per unit
101–200 units → ₹7 per unit
201–300 units → ₹10 per unit
Above 300 units → ₹12 per unit
Teaches: cumulative calculation + condition chaining.


*/

// function calculateBill(unit = 0) {
//   let bill = 0;
//   if (unit <= 100) {
//     return (bill = unit * 5);
//   } else if (unit >= 101 && unit <= 200) {
//     return (bill = (unit - 100) * 7 + 100 * 5);
//   } else if (unit >= 201 && unit <= 300) {
//     const temp = unit - 200;
//     const oldBill = 100 * 7 + 100 * 5;
//     bill = oldBill + temp * 10;
//     return bill;
//   } else {
//     const temp = unit - 300;
//     const oldBill = 100 * 7 + 100 * 5 + 100 * 10;
//     return (bill = oldBill + temp * 12);
//   }
// }
// console.log(calculateBill(330));

//better version

// function calculateBill(unit = 0) {
//   let bill = 0;
//   if (unit <= 100) {
//     bill = unit * 5
//   }
//   else if (unit <= 200)
//     {
//     bill = (100 * 5) + (unit - 100) * 7
//   }
//   else if (unit <= 300) {

//     bill = (100 * 5) + (100 * 7) + (unit - 200) * 10

//   }
//   else {

//     bill = 100 * 5 + 100 * 7 + 100 * 10 + (unit - 300) * 12
//   }
//   return bill
// }
// console.log(calculateBill(330));

/*

Check if a Character is a Vowel or Consonant

Input: e
Output: Vowel
✨ Combines logical OR (||) operator and string comparisons.


*/

// const vovalConsonant = ['a','e','i','o','u']

// function vovelOrConsonant(l){
// let letter = l.toLowerCase()
// // console.log(letter);
// if(vovalConsonant.includes(letter)){
//   console.log('this in vovel')
// }
// else if (/[a-z]/.test(letter)){
//   console.log('Consonant');
// }
// else{
//   console.log('invalid input');
// }

//   }

// vovelOrConsonant('o')

/*
Check if a Year is a Leap Year

Input: 2024
Output: Leap Year
✨ Builds compound condition logic using multiple if statements (%4, %100, %400).
A year is a leap year if it satisfies these conditions:

It is divisible by 4,
➜ year % 4 === 0
But not divisible by 100,
➜ year % 100 !== 0
Unless it is also divisible by 400,
➜ year % 400 === 0
🧩 In Simple Words

If a year is divisible by 4, it’s a leap year.
Except if it’s also divisible by 100, then it’s not a leap year.
But if it’s divisible by 400, it is a leap year again.

*/

// function leapYear(year){
//   if(year % 4 === 0 && year % 100 !==0 || year % 400 === 0){
//     console.log('Leap Year');
//   }
//   else{
//     console.log('Not a leap year');
//   }
// }
// leapYear(1900)

// more Practice

/*

Check if a Character is Uppercase, Lowercase, Digit, or Special Character

Input: A
Output: Uppercase Letter
✨ Teaches use of character code ranges (charCodeAt) and compound logical conditions.
🔍 Concepts: ASCII range checks, compound && and || operators.

*/


// function CharCheck(l) {
//   const charCode = l.charCodeAt(0);
//   // console.log(charCode);
//   if (charCode >= 97 && charCode <= 122) {
//     return l + ' <= Charactor is lower case';
//   } else if (charCode >= 65 && charCode <= 90) {
//     return l + ' <= Charactor is Upper case';
//   } else if (charCode >= 48 && charCode <= 57) {
//     return l + ' <= this is digit';
//   } else {
//     return l + ' <= is special charactor';
//   }
// }
// console.log(CharCheck('i'));
// console.log(CharCheck('I'));
// console.log(CharCheck('£'));
// console.log(CharCheck('1'));


/*

Check Triangle Type Using Sides and Angles
Input: Sides = 3, 4, 5

Output: Right-Angled Triangle

✨ Combines geometric reasoning + Pythagoras theorem check.

Example Logic:

If a² + b² = c² → Right-angled
Else if all sides equal → Equilateral
Else if any two equal → Isosceles
Else → Scalene



*/

// function CheckTriangleType (a,b,c){
 
// if(a+b > c && a + c > b && b + c > a){
//   console.log('This is Triangle');
// }
// else if(a === b && b === c){
// console.log('Equilateral triangle');
// } 
// else if(a*a === (b*b + c*c) || b*b === (a*a + c*c) || c*c === (a*a + b*b)){
//  console.log('Right-angled triangle');
// } else if(a === b || a === c || b === c){
//   console.log('This is Isosceles');
// }
// else{
//   return 'This is Scalene' 
// }
// }

// console.log(CheckTriangleType(2,2,4));


/*

Calculate Income Tax Based on Slabs
Input: Income = ₹7,50,000

Output: Tax = ₹62,500

✨ Applies progressive slab logic similar to electricity bill but with financial context.

Example Logic (example slabs):

Up to ₹2,50,000 → No tax
₹2,50,001 – ₹5,00,000 → 5%
₹5,00,001 – ₹10,00,000 → 20%
Above ₹10,00,000 → 30%
🔍 Requires cumulative calculation using nested if–else or multiple slab loops.


*/

function taxCalcutor(income){

  if(income < 250000){
    console.log(`No Tax: Your Income : ${income} `);
  } 
  else if (income <= 500000){
  const tax = (income - 250000) * 0.05

    console.log(`Income After Tax : ${tax} `);
  } 
  
  else if(income >= 500001 && income <= 1000000){

const five = (250000 ) * 0.05
// console.log(five)

const ten = (income - 500000) * 0.20
console.log('Income After Tax :' , ten + five);
  }
  else{

const five = (250000) * 0.05
// console.log(five)

const ten = (500000) * 0.20
// console.log(ten);
const tw = ( income - 1000000) * 0.30
// console.log(tw);

console.log('Income After Tax : ',five + ten + tw);
  }
}
taxCalcutor(1200000)

