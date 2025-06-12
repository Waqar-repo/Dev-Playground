// (%), returns the remainder of a division operation

// let dividendNumber = prompt('enter the number that you want to know the reminder')
// let divisor = prompt(' enter the divisor that you want to divide to get reminder')
// let reminder1 = dividendNumber % divisor
// alert(`This the ${reminder1} reminder  of ${dividendNumber} % ${divisor}` )


//The exponentiation operator (**) raises the first operand to the power of the second operand:
//returns the result of raising the first operand to the power of the second operand

// let firstOperand = prompt('Enter the First Operand that you want to raise')
// let secondOperand = prompt(' Enter the second Operand or power that you want to raise the 1st operand')
// let power = firstOperand ** secondOperand
// alert(`answer is ${power}` )

// math.sqrt square root function 

console.log('Using Math.sqrt(25) and answer is  '+ Math.sqrt(25))

// this is old to know the  power of a number

console.log('Using Math.pow(2,6) and answer is  '+Math.pow(2,6))


// math.floor(x) it removes the decimal part Ie 2.4 into 2

console.log('Using Math.floor(2.4) and answer is  '+ Math.floor(2.4))
console.log('Using Math.floor(2.99) and answer is  '+ Math.floor(2.99))

//Math.floor(-2.4) returns -3 because it rounds down to the next smaller integer,
//  which is -3. This is a common way to find the largest integer less than or equal to a given number,
//  and it behaves slightly differently for negative numbers than it does for positive numbers. 
console.log('Using Math.floor(-2.4) and answer is  '+ Math.floor(-2.4))

//rounds a number up to the nearest integer,
//  always returning a value that is greater than or equal to the input

console.log('Using Math.ceil(2.4) and answer is  '+ Math.ceil(2.4))
console.log('Using Math.ceil(2.1) and answer is  '+ Math.ceil(2.1))

//Math.ceil() always rounds up, but "up" means toward the more positive number
console.log('Using Math.ceil(-2.4) and answer is  '+ Math.ceil(-2.4))

//The Math.round() method rounds a number to the nearest integer.
// 2.49 will be rounded down (2), and 2.5 will be rounded up (3)
console.log('Using Math.round(2.60) and answer is '+ Math.round(2.60));
console.log('Using Math.round(2.50) and answer is '+ Math.round(2.50));
console.log('Using Math.round(2.49) and answer is '+ Math.round(2.49))
console.log('Using Math.round(-2.60) and answer is '+ Math.round(-2.60));
console.log('Using Math.round(-2.50) and answer is '+ Math.round(-2.50));
console.log('Using Math.round(-2.49) and answer is '+ Math.round(-2.49));

//Math.random(x) gives us value between 0 and 1 not 1
// you you multiply with a number then it will not go more than that number
//you can slo user different math method in a single line
console.log(' math.random() * 20 '+ Math.random()* 20)

// Assignment generate random int between 10 and 20


console.log('Number between 10 and 20  = ' + Math.floor(Math.random()*  10 + 10 ) )

// Infinity and NaN JS happens when we divide a number with a  zero 0

console.log('9 / 0 = ' + 9 / 0 + ' and Type of infinity is '+ typeof(Infinity))

// divide a 0 / 0 

console.log('0 / 0 = ' + 0 / 0 + ' and Type of NaN is '+ typeof(NaN))

// small program to calculate the area of an rectangle 

// alert('This software is to calculate the area of rectangle Press Ok to continue')
// const height = +prompt('Enter the Height Of the Rectangle')
// const width = +prompt('Enter the Width Of the Rectangle')

// const areaRectangle = height * width ;
// const areaRectangle = (+height) * (+width) ;


// alert( `The area of an Rectangle is ${areaRectangle}`)
// console.log(`type of area is ${typeof(areaRectangle)}`)

// document.writeln( `The area of an Rectangle : ${areaRectangle}`)
// document.writeln(`and type of area :  ${typeof(areaRectangle)}`)


// const minNumber = +prompt('Enter the 1st number')
// const maxNumber = +prompt('Enter Last Number ')

// const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber)
// console.log(randomNumber);
