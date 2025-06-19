const userName = prompt('Please Enter You Name') || ('Waqar');
const userAge = parseInt(prompt('Please Enter You age') || (34));
// const userGener = prompt('What is your Gender  He or She ')

debugger
console.log(`Name: ${userName}`);
console.log(`Age: ${userAge}`);

if(userAge >= 1 && userAge <= 4){
console.log( `${userName} Is a Infant`);
console.log('and He/She is Playing');
}

if(userAge >= 5 && userAge <= 17){
console.log( `${userName} Is a School Student`);
console.log('and He/She is learning In school');
}


if(userAge >= 18 && userAge <= 24){
console.log( `${userName} Is a college Student`);
console.log('and He/She is learning computer Science');
}

if(userAge >= 25 && userAge <= 45){
    console.log(`${userName} Is a Working professional`);
    console.log('and He/She is Web Developer');
}

if(userAge > 45){
    console.log(`${userName} Is Retired`);
    console.log('and He/She is Read News Paper');
}

// if(userName == null || userAge == NaN ){

//     console.log('Name : Waqar');
//     console.log('Age : 34');
// }
// console.log(`type of age is ${typeof(userAge)}`);
console.log('Program Ended');