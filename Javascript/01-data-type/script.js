console.log(typeof'waqar', 'waqar')

console.log('type of', 10, 'is ',typeof 10 )

// convert string into number
console.log(10+ (+'32'))

// trying to convert name into number NAN error
console.log(+'waqar')
// convert string into number using ParseInt()
console.log(parseInt ('121'), 'parseint') 

// convert number into string
console.log('' +100)

//boolean
console.log(true)
console.log(typeof true)

//convert true and false to number
console.log('convert true to number', +true)
console.log('Convert Fales into number', +false)

//converting true to number and then plus with number1
console.log('convert true to number and plus with 1 =', 1 + true)

//undefined and null
console.log(typeof null)

console.log(typeof undefined)

//bigint
//2 ** 53 - 1 is limit for normal int
let a , b;
a= 2 ** 53 - 1;
b=100;
console.log(`${a} + ${b} = ${a+b}`);


// let a , b;
// a= 2n ** 100n;
// b=2n;
// console.log(`${a} + ${b} = ${a+b}`);


