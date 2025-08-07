//practice

const fruits1 = ['banana', 'apple', 'peach', 'mango', 'grapes']

for(let  i = 0; i < fruits1.length;i++){
    console.log( i);
    console.log(fruits1[i]);
}
console.log(fruits1);

console.log('-------------for of loop ---------------');
// for of use

for(const fru of fruits1){
    console.log(fru);
    
}
console.log(fruits1);
fruits1.push('keela')
console.log(fruits1);

console.log('--on string--');

const user1 = 'Waqar Ahmad'

// let hasname = user1.includes('d')
// if(!hasname){
//    var newuser = user1.concat('d')

//    console.log('has been added');
//    console.log(`old string was "${user1}"`);
//    console.log(`new string is "${newuser}"`);
   
// }
// else {
//     console.log('letter was already there');
// }

// //  in aray and objects will give the key or value not index
for(const letter of user1){
    console.log(user1.indexOf(letter));
    console.log(letter);
}

console.log('--on objects for in--');

const person1 = {
    firstName: 'Waqar',
    lastName: 'Ahmad',
    age:34 ,
    city: 'Glenrothes',
}
for(var l in person1){
    console.log(l," : " , person1[l]);

}
if(person1.age === ''){
    console.log('you have not entered the age');
    // person1.age = parseInt(prompt (+'Enter Your age'))
}

else{
    console.log('You have age set up');
}
console.log(person1);

// fast way

console.log('using object fucntion');

const personKey1 = Object.keys(person1)
for(const l1 of personKey1){
    console.log(l1);
}

const personvalue1 = Object.values(person1)
for(const l2 of personvalue1){
    console.log(l2);
}
console.log('---');
const personentries = Object.entries(person1)
for(var l3 of personentries){
    console.log(l3);
    if(l3[0] === 'age'){
        l3[1] = 24
        
    } 
    
} 

console.log([personentries]);
console.log(person1);