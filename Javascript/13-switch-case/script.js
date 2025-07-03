// const dayNumber = 0

// debugger
// if (dayNumber === 0) {
//   console.log('It is Sunday Today')
// } else if (dayNumber === 1) {
//   console.log('It is Monday Today')
// } else if (dayNumber === 2) {
//   console.log('It is Tuesday Today')
// } else if (dayNumber === 3) {
//   console.log('It is Wednesday Today')
// } else if (dayNumber === 4) {
//   console.log('It is Thursday Today')
// } else if (dayNumber === 5) {
//   console.log('It is Friday Today')
// } else if (dayNumber === 6) {
//   console.log('It is Saturday Today')
// } else {
//   console.log('Please Enter a Valid Day Number')
// }

// now we are using switch statement

// const dayNumber = 14;
// debugger;
// switch (dayNumber) {
//   case 0:
//     console.log('It is Sunday Today');
//     break;

//   case 1:
//     console.log('It is Monday Today');
//     break;

//   case 2:
//     console.log('It is Tuesday Today');
//     break;

//   case 3:
//     console.log('It is Wednesday Today');
//     break;

//   case 4:
//     console.log('It is Thursday Today');
//     break;

//   case 5:
//     console.log('It is Friday Today');
//     break;

//   case 6:
//     console.log('It is Saturday Today');
//     break;

//   default:
//     console.log('Enter valid number');
// }

// const username = 'Waqar';
// const userAge = 120;
// switch (true) {
//   case userAge >= 0 && userAge <= 4:
//     console.log(`${username} is a kid.`);
//     console.log('And he/she is playing.');
//     break;

//   case userAge >= 5 && userAge <= 17:
//     console.log(`${username} is a school student.`);
//     console.log('And he/she is learning science and maths.');
//     break;
//   case userAge >= 18 && userAge <= 24:
//     console.log(`${username} is a college student.`);
//     console.log('And he/she is learning computer science.');
//     break;
//   case userAge >= 25 && userAge <= 45:
//     console.log(`${username} is a working professional.`);
//     console.log('And he/she is a web developer.');
//     break;
//   case userAge > 45 && userAge < 121:
//     console.log(`${username} is retired.`);
//     console.log('And he/she reads newspaper.');
//     break;
//   case userAge == 121:
//     console.log(`${username} is immortal.`);
//     console.log('And he/she reads newspaper.');
//     break;
//   default:
//       console.log('Please Enter a Valid Age');
// }

// const grade = 'C';

// switch (grade.toUpperCase()) {
//   case 'A':
//     console.log('Your Marks between 85% to 100%');
//     break;

//   case 'B':
//     console.log('Your marks between 75% to 85%');
//     break;

//   case 'C':
//     console.log('Your marks between 60% to 75%');
//     break;

//   case 'D':
//     console.log('Your marks between 50% to 60%');
//     break;

//   case 'E':
//     console.log('your makrs between 30% top 50%');

//   default:
//     console.log('Sorry you failed');
// }

// console.log('Program Ennded!');

const grade = prompt('Please Enter Your Grade');

switch (grade.toUpperCase()) {
  case 'A':
    alert('Your Marks between 85% to 100%');
    break;

  case 'B':
    alert('Your marks between 75% to 85%');
    break;

  case 'C':
    alert('Your marks between 60% to 75%');
    break;

  case 'D':
    alert('Your marks between 50% to 60%');
    break;

  case 'E':
    alert('your makrs between 30% top 50%');
    break
  default:
    alert('Sorry you failed');
}
