//es6 rest pram
//it look like spread operator as it also use three dots ...
//but functionality is different
//The spread operator is used for expanding elements,
//  while the rest parameter is used for collecting multiple elements into an array 

const num1  = [1,2,3,4]

function add(){
let sum1 = 0
for(let i = 0;i<arguments.length;i++){
    console.log(arguments[i]);
     sum1+=arguments[i]
}return sum1
}

//using arguments is not recommended since rest pram addition is es6 
// rest param
const num2  = [1,2,3,4]
// ...nums we can pass as many as arguments when calling and
// and it will be in array in this case nums and array will have all the values
// spread operator : 	Array literals, object literals, function calls
//rest pram : Function parameter list only

function add1(...nums){
    
    console.log(nums);

let sum2 = 0
for(let i = 0;i<nums.length;i++){
   
     sum2+=nums[i]
}return sum2
}
add1(...num1)
 

//when we pass other parameter along with rest param
// add2(a,b,...nums) like this. and we call add2(1,2,3,4)
//then 1,2 will go to a, b parameter and rest would go to rest thats why it called rest pram
// it can be empty array if pass two argument which go to a,b and rest parameter wwill have an empty array
//rest parameter must be last parameter

//example
function add2(a,b,...nums){
    console.log(a,b);
    console.log(nums);

let sum3 = 0
for(let i = 0;i<nums.length;i++){
   
     sum3+=nums[i]
}return sum3
}
console.log(add2(1,2));

//example two
function add3(...nums){
   console.log(nums);
    
return nums.reduce((acc,curr) => acc + curr)

} 
add3(...num1,...num2)
console.log(add3(...num1,...num2));

// achiving same with arguments

function add4(){
    console.log(arguments);
    return [...arguments].reduce((acc,curr) => acc+curr)
}
console.log(add4(...num1,...num2));

function add5(){
    console.log(arguments);
    return Array.from(arguments).reduce((acc,curr) => acc+curr)
}
console.log(add5(1,2,3,4));

// using rest with for each each and for of

function add6(...nums){
   console.log(nums);
    let adding = 0
nums.forEach((val,index) => {
    adding += val
    
})
return adding

} add6(1,2,3)

console.log('for of')
//for of
function add7(...nums1){
   console.log(nums1);
   let test = 0 
   for(v of nums1){
    
    test += v

   } return test
    


} console.log(add7(6,2));

