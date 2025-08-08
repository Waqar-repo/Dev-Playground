// // smimilar to forEach but it return the array 
const months = ['January', 'February', 'March', 'April', 'May', 'December']

// debugger
// // map give us/return  new array that we can save in variable and see
const capitalMonths= months.map(month =>{
    console.log(month); // console log month name
    return month.toUpperCase()
})
console.log(capitalMonths);

// // or you can put all code in console.log() will output the new array

console.log(months.map(month =>{
    console.log(month); // console logmonth name
    return month.toUpperCase()
}));

// if you want to index of each array then add another 
// variable/parameter in fucntion 2nd variable return the index
//

console.log(months.map((month, index) =>{
    console.log(index, month ); // console log month name and index
    return month.toUpperCase()
}));


// //  3rd parameter/argument return the array that we are looping on
// so in this case it will returnall array of months

// // first parameter would be the element of a array, 
// 2nd parameter is index of the array
// 3rd parameter would be the array itself that we are looping 

console.log(months.map((month, index,arr) =>{
    console.log(index, month ); // console log month name,
    // console.log(arr); // will console log array that we are looping
    return month.toUpperCase()
}));

console.log('--------using filter-----');

// // filter gives us a new array which is equal or less than the orignal array
// depending on the condition you you return with

// // first parameter would be the element of a array, 
// 2nd parameter is index of the array
// 3rd parameter would be the array itself that we are looping 


const filterMonths= months.filter((month,index,arr) =>{
    // console.log(month.length <= 5); // console log month name according to condition
    // return month.toUpperCase()
    return month.length <= 5
})
console.log(filterMonths); 

console.log('---assignment---');

//assignment filter the months which has letter m 

const filterMonths1 = months.filter((month,index,arr) =>{

    // two solutions to same problem 
  
    // if(month.includes('m') || month.includes('M')){
    //     return month
        
    // }
    return month.toLocaleLowerCase().includes('m')

}) 
console.log(filterMonths1);

console.log('--assignment 2 ---');
// assignment 2 filter  age is >= 18
const students = [
    {
        name: 'Akash',
        age: 21,
    },
    {
        name: 'Adarsh',
        age: 17,
    },
    {
        name: 'Amir',
        age: 18,
    },
    {
        name: 'Raman',
        age: 23,
    },
    {
        name: 'Nidhi',
        age: 16,
    },
]

// chaning of filter method
const adultStudents = students.filter((stu , index, arr) =>{

    // console.log(stu.age >= 18);
    return stu.age >= 18
}).map((na,index,arr) =>{
return na.name
}).filter(na =>{
    return na.includes('A')
})
console.log(adultStudents);




