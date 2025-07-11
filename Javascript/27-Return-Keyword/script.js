
//parameter pass to calculate sum
function addTwoNumber(num1, num2){

//return will return to function caller 
return num1 + num2
}
// debugger

//fucntion calling
const result = addTwoNumber(22,12)
console.log(result);

const test = addTwoNumber(addTwoNumber(5,5),addTwoNumber(20,20))
console.log(test);

console.log('---------');
console.log('substract two number function');

//parameters two substract two number
function substractTwoNumber(a,b){

    //return to function caller/calling
    return a - b

}
const subResult = substractTwoNumber(6,4)
console.log(subResult);

console.log('---------');
console.log('multiply two number function');

function multiTwoNumber(a,b){
    return a * b
}

const multiResult = multiTwoNumber(2,2)

console.log(multiResult);

console.log('---------');
console.log('multiply three number function');

function multiThreeNumber(a,b,c){
    return a * b * c
}
// debugger
const multiResult3 = multiThreeNumber(2,2,4)

console.log(multiResult3);