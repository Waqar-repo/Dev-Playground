const myName = 'Waqar';

const userData1 = {
  firstName: 'Waqar Ahmad',
  age: parseInt(prompt('Enter your Age')),
  gender: prompt('Enter Your Gender (M/F)'),
  'is-Student': true,
   waqar: 'this is test',

  pata: {
    houseNumber: prompt('Enter House number'),
    streetName: prompt('Your Street Name?'),
    city: prompt('Enter City Name'),
   
  },
};

const whatIsGender = userData1.gender.toUpperCase() === 'F' ? 'She' : 'He';

console.log(`${userData1.firstName} is ${userData1.age} years old and
    ${whatIsGender} is living at ${userData1.pata.houseNumber} ${userData1.pata.streetName}
   ${userData1.pata.city} `);

   console.log(userData1[myName]);
