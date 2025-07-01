// first name is called key and waqar is called vlaue
// and it is called key value pair {firstName: 'Waqar'}
// const user = {
//   firstName: 'Waqar',
//   lastName: 'Ahmad',
//   age: 34,
//   education: 'Msc',
// };

// const user2 = {
//   firstName: 'Waqar',
//   lastName: 'Ahmad',
//   age: 34,
//   education: 'Msc',
// };

const myName = 'Waqar';

const userName1 = '';
const userName2 = '';
const user1 = {
  firstName: 'Waqar',
  lastName: 'Ahmad',
};

const user2 = {
  //key can also be written inside string
  'first-Name': 'Vizz',
  Waqar: 'Developer',
  age: 10,
  pata: {
    city: 'Glenrothes',
    postCode: 'KY62EB',
    county: 'fife',
    street: 'laxford',
    moreDetails:{
        population: 12334,
        county: 'Scotland'
    }
  },
};
//console.log using dot notation
console.log(user1.firstName);

////console.log using bracket notation
console.log(user1['lastName']);

//console.log using bracket notation key is in string

console.log(user2['first-Name']);

//if you want to access a variable using object
// then use square bracket notation
console.log(user2[myName]);

//you can use expression too
console.log(user2['first-' + 'Name']);

user2.age = 43;
console.log(user2.age);

user2['is-Student'] = true;
