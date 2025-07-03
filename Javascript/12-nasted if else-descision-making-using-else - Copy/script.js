let userName = 'WAQAR';
// let userAge = 19;
let userAge = parseInt(prompt('Enter your age'));
// const userGener = prompt('What is your Gender  He or She ')



// if(!userAge){
//     userName =  'waqar'
// }
// else {
//     console.log('world');
// }

if(userName){
    console.log(`Name: ${userName}`);
}
if (userAge){
    // console.log(`Age: ${userAge}`);
    alert(`your age is ${userAge}`)
}
if(!userAge){
    console.log('Please enter valid number');
}

if(!userName){
    console.log('Please enter valid name');
}



// console.log(`Name: ${userName}`);
// console.log(`Age: ${userAge}`);
// debugger

if(userAge >= 1 && userAge <= 4){
console.log( `${userName} Is a Infant`);
console.log('and He/She is Playing');
}else if(userAge >= 5 && userAge <= 17){
console.log( `${userName} Is a School Student`);
console.log('and He/She is learning In school');
}else if(userAge >= 18 && userAge <= 24){
console.log( `${userName} Is a college Student`);
console.log('and He/She is learning computer Science');
if(userAge>=20){
    console.log('he is above 20');
} else {
    console.log('he is below 20');
    if(userName.length >= 5){
        console.log('user name lenght is greater than 5');
    } else{
        console.log(`user has ${userName.length} charactor is his Name`);
    }
}
}else if(userAge >= 25 && userAge <= 45){
    console.log(`${userName} Is a Working professional`);
    console.log('and He/She is Web Developer');
}else if(userAge > 45 && userAge < 121){
    console.log(`${userName} Is Retired`);
    console.log('and He/She is Read News Paper');
}else if(userAge > 121){
    console.log(`${userName} Is a Importal`);
}else {
    console.log(`Please enter a valid age`);
}

// // console.log(`type of age is ${typeof(userAge)}`);
console.log('Program Ended');

let maleOrFemale = prompt('Please enter your gender')
if (maleOrFemale == 'male'|| maleOrFemale == 'Male'){
    alert('You have allocated a Male hostel');
}
else if(maleOrFemale == 'fale'|| maleOrFemale == 'Fale'){
    alert('You have been allocated a female hostel');
}
else{
    alert('Please select the Gender')
}