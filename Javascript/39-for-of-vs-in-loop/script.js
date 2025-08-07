//for of and for in loop we can use this to loop on array and objects
// for of loop a iterable objects
const fruits = ['banana', 'apple', 'peach', 'mango', 'grapes']

// // using normal loop for array
// // here it change the orignal fruits array 

for(let i = 0; i < fruits.length; i++){
    fruits[i] ;
    
}
console.log(fruits);


// // to make it easy we have for of loop for array loop
// // you can write any variable in place of a,
// // a will represent every element. 1st banana 2nd apple etc 
// // you can use var let const / but using var make it global
// // or if we use var in function then it will stay in fucntion

// // you can use const here but not in above loop,
// // as here everytime create new variable but in above code,
// // variable created once and use it again that why you will get error in above code for suing const 

for(const fruit of fruits){
    // debugger
    console.log(fruit);


}

// also works on string. this code give us single letters from
// string
const user = 'Waqar Ahmad'
for(const letter of user ){
    console.log(letter);
}

// // can not use for of loop on objects
// //
const person = {
    firstName: 'Waqar',
    lastName: 'Ahmad',
    age: 34,
    city: 'Glenrothes',
}
// // code below give us error person is not iterable
// for(const letter of person){
//     console.log(letter);
// }

// // for in will work with objects
// // we will get the key from object key/value pair
for(const key in person){
    console.log(key,':', person[key]);
}

console.log('********');
// // other way to achive same thing in efficient manner
//it convert object into array
const personKey = Object.keys(person)
for(const key of personKey){
    console.log(key, ':', person[key]);
}

// // other option to get the value
const personValue = Object.values(person)

// // to get key and value in an array

const personEntries = Object.entries(person)
console.log(personEntries);
console.log(personEntries['age']);

console.log('---------------script 2 ----------------');