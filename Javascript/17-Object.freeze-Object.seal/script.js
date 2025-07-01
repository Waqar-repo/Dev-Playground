let user = {
  firstName: 'Adarsh',
  lastName: 'Singh',
  pata: {
    city: 'Bangalore',
    pinCode: 876876,
    state: 'Karnataka',
    moreDetails: {
      population: 9798897897,
      area: '787 sq km',
    },
  },
  age: 15,
  isGraduate: false,
};

let userName = 'Waqar';

// Object.seal(user) can not add new
//  or delete existing data but modify existing data


// can not add delete or modify data
Object.freeze(user)

// to see if certain key is available
//  inside object or not (key not value)
console.log('isGraduate' in user);
console.log('city' in user.pata);