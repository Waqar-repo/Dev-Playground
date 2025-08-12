//es6 feature

// spread operaot normally used with array and objects
//example combine two array or two objects
//you can spread array or string (interable )not normal objects
const nums1 = [1,2,3,4]
const nums2 =  [5,6,7,8,9,10]

const string = ['a','b','c','d']
//1st method to join tgwo array
const joinedArray = nums1.concat(nums2)
console.dir(joinedArray)

// this method becomes very easy when working with lots of array

const joinedArray2 = [...nums1,...nums2,...string]// spread operator

//spread operator also work with string or combination of arrray and string

//code below is copy user object into updated user object also add city
const user={
    name: 'waqar',
    age: 34
}
const updatedUser = {...user,city:'kirkcaldy'}

//we can use spread operator using  fucntion call

function add(){
    let sum = 0
    console.log(arguments);
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i]
        
    } 
return sum
}

 // to calculate the sum of arguments passed when call the function

add(1,2,3,4)

// to calculate the sum of joined array, we use spread operator
//and along with joined array as a argument when calling a function

add(...joinedArray,11,12)