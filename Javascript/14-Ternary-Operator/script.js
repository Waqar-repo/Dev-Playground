// const userName = 5 > 12 ? 'Waqar' : 'Ahmad'
// console.log(userName);

// const gender = prompt('Enter you gender')
// const userMessage = `${gender.toUpperCase() === 'F' ? 'She' : 'He'} is a college student.`
// alert(userMessage)

// const gender = 'F';
// const userMessage = `${gender === 'F' ? 'She' : 'He'} is a college student.`;
// console.log(userMessage);

// const result = 0 ? ' Waqar' : 'Ahmad' ? '12' : 0 ;
// console.log(result);

 const username = prompt('Enter Your Name')
const userAge = parseInt(prompt('Enter you age'))
const gender = prompt('Enter your gender (M/F)')
const genderSelect = gender.toUpperCase() === 'F' ? 'She' : 'He'
switch (true) {
  case userAge >= 0 && userAge <= 4:
    console.log(`${username} is a kid.`);
    console.log(`And ${genderSelect} is playing.`);
    break;

  case userAge >= 5 && userAge <= 17:
    console.log(`${username} is a school student.`);
    console.log(`And ${genderSelect} is learning science and maths.`);
    break;
  case userAge >= 18 && userAge <= 24:
    console.log(`${username} is a college student.`);
    console.log(`And ${genderSelect} is learning computer science.`);
    break;
  case userAge >= 25 && userAge <= 45:
    console.log(`${username} is a working professional.`);
    console.log(`And ${genderSelect} is a web developer.`);
    break;
  case userAge > 45 && userAge < 121:
    console.log(`${username} is retired.`);
    console.log(`And ${genderSelect}reads newspaper.`);
    break;
  case userAge == 121:
    console.log(`${username} is immortal.`);
    console.log(`And ${genderSelect} reads newspaper.`);
    break;
  default:
      console.log('Please Enter a Valid Age');
}