console.log('--reduce--');
//reduce the value in an array into one value
//
const nums = [1, 2, 3, 4, 5, 6]

// 1st parameter is accumulator, 2nd parameter is current value/element of array
//3rd is index and 4th is array that we are looping on
 const num = nums.reduce((accumulator, current,index,arr) => {
    // console.log(index ,  ':',current);
    console.log(accumulator);
    // return accumulator + 1
    return current+ accumulator
},10) // 10(can by anything string etc is called intial/accumulator value for 1st time,
//if we did not put any value here,
// it will take 1st value of an array and current/1st element will be skip if we print 2nd current
console.log(num);
console.log('-------------------------------');

const num1=nums.reduce((accumulator,current,index)=>{
    console.log(accumulator);
     return accumulator + current
},0)

//practice making nums into securepassword using num only
console.log('practice');
const passWord = [1,9,1,3,7,8,6,8,1]
const encryptPassword = passWord.reduce((acc,curr,index)=>{
    console.log(acc,curr);
    return acc * curr
},1)

console.log(encryptPassword);

const names = ['waqar','ahmad','hina','razzaq']

let name = names.reduce((acc,curr,index,arr)=>{
    console.log(index,acc,curr);
    console.log(names[2].concat(' ' , names[1]));
    debugger
    return 'gg'
    
  

},0)
console.log(name);
