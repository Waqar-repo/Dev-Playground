
//when we update string using = sign it also change the address
//as i have understand and noticed in memory change
const userName1 = 'waqar'

let userName2 = userName1

userName2 =  'Vizz'
//this will create a new string with new memory

userName2 += ' Ahmad'


//using other method such as . dot operator 
// than = to duplicate or update
//would also chnage thge orignal value 

// const fruits = ['Mango', 'Apple', 'Orange'];
// const newFruits = fruits;

// newFruits.push('Dates');
// newFruits.push('Grapes');

// const user1 = {
//   firstName: 'Waqar',
//   lastName: 'Ahmad',
// };

// in this case user1 and user2 is pointing to same object address
// if you change user1 or user2, same object memory will be accessed

// const user2 = user1;

// user2.lastName = 'Ahmed';


//the code below also chnage the fruits array
//when we update newfruits as both array is pointing to 
// same memory address

const fruits = ['Mango', 'Apple', 'Orange'];
const newFruits = fruits;

newFruits.push('Dates');
newFruits.push('Grapes');


//two ways to right copy

const fruits1 =['Mango', 'Apple', 'Orange'];

//using spread operator (...)
const newFruits1 = [...fruits1]

//using object.assign 
const fruits2 =['Mango', 'Apple', 'Orange'];
const newFruits2 = []
Object.assign(newFruits2,fruits2)


//doing same thing with other methods

const newFruits3 = [].concat(fruits2)

const newFruits4 = fruits2.slice()



//right way to duplicate 

const user1 = {
  firstName: 'Waqar1',
  lastName: 'Ahmad1',
};

const user2={}

//Object.assign() you can pass two or more /variable/value 
//1st would be the variable that you want to update
//2nd would be the the veriable that you want update from
//Object.assign(user2, user1) user1 value would be copy to user2

Object.assign(user2, user1)


//ES6 has new feature to do same thing 
// user2={...user1} i called spread (...) operator

const user3 = {
  firstName: 'Waqar1',
  lastName: 'Ahmad1',
};
const user4={...user3}



//

const userTest = {
  firstName: 'Waqar1',
  lastName: 'Ahmad1',
  pata:{
    city:'Glenrothes',
    postcode:'KY62EB'
  },
  subjects: ['Physics', 'CS', 'Math']
};

const userTest2 = {...userTest}

//this statement will chnage the city in both objects
//because userTest has two objects one user userTest
//another is pata. {...userTest} will only create 
//one new object. pata has same address in both objects
userTest2.pata.city = 'Pirmahal'

//same thing happening here too. subjects array memory address
//is same in both objects copied and orignal
userTest2.subjects.push('Chemistry')
//above this, we are doing shallow copy. 
//shallow copy do not copy in nested levels



//solution is deep copy
const deepCopyTest = JSON.parse(JSON.stringify(userTest))

deepCopyTest.pata.city = 'Glenrothes'
deepCopyTest.subjects.push('Java Script')
