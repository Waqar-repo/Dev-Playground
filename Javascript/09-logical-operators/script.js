//&& (And) both statement has to be true to get true results

console.log(`(5 < 7) && (8 > 4) =  ${(5 < 7) && (8 > 4)}`);

console.log(`(5 < 7) && (8 < 4) =  ${(5 < 7) && (8 < 4)}`);

console.log(`(15 < 7) && (8 > 4) =  ${(5 < 7) && (8 > 4)}`);

const userAge = 25;

console.log(`UserAge = 25 )(userAge >= 18) && (userAge <= 24) =  ${(userAge >= 18) && (userAge <= 24) }`);

const userAge2 = 22;

console.log(`UserAge = 22 )(userAge >= 18) && (userAge <= 24) =  ${(userAge2 >= 18) && (userAge2 <= 24) }`);

// const userAge3 = +prompt('Enter the user age')
// alert(`UserAge = 24 )(userAge >= 18) && (userAge <= 24) =  ${(userAge3 >= 18) && (userAge3 <= 24) }`);
const userAge3 = 24
console.log(`UserAge = 24 )(userAge >= 18) && (userAge <= 24) =  ${(userAge3 >= 18) && (userAge3 <= 24) }`);

// || (Or) operator if one is true then statement is true

const userAge4 = 22

const isSchoolStudent = (userAge4 >= 5) && (userAge4 <= 18)
const iscollegeStudent = (userAge4 >= 18) && (userAge4 <= 24)

const isStudent = isSchoolStudent || isSchoolStudent
console.log(`( userAge4 = 15) isSchoolStudent || isSchoolStudent ${isStudent}`);

const andResult = 0 && 2
const orResult = 0 || 2

const andResult2 = '' && 'Hello'
const orResult2 = '' || 'Hello'

const andResult3 = 'Hello' && null
const orResult3 = 'Hello' || null

const andResult4 = 'Hello' && -4 + 4
const orResult4 = 'Hello' || 4 + 8 * 5


const andResult5 = 'Hello' && console.log('Hello');
const orResult5 =  undefined || console.log('Hello')