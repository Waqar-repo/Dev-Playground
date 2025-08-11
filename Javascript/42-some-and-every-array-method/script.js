// it has thre parameter 1st: element of an array,
// 2nd index of each element 3rd is the array itself 
// that we are looping/using

// if we return truthy value then it will return true
//but loop runs number of times, and if it return true/truthy value once then final result wuld be true

// it check all condtion and only one condition is true, it returns true and over all value will be true and terminate with true value


const evenNumbers = [10, 2, 4, 6, 8]

const result = evenNumbers.some((num)=>{
    console.log(num);
    // debugger
    return num > 4
})


//usage:suppose we have an array of even number with 6k of elements

// we want to check if there is an odd number in an array or not 
const evenNumbers1 = [10, 2, 3, 6, 8]

const result1 = evenNumbers1.some((num,i)=>{
    // console.log(num);
    // debugger
if(num % 2 === 1){
    console.log(`index : ${i} , number is : ${num}`);
}
    
    return num % 2 === 1
})

console.log('-------------every fucntion--------');

// every checks  the condition for all elements/values
//and only retun true if all value/element are true 
// returns fales if only one vlaue is fales

const evenNumbers2 = [10, 2, 3, 6, 8]
const result2 = evenNumbers2.every((num)=>{
    return num % 2 === 0
})
console.log(result2);

const evenNumbers3 = [10, 2, 900, 6, 8]
const result3 = evenNumbers3.every((num)=>{
    return num % 2 === 0
})
console.log(result3);