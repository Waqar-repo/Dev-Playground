


//i have wrote my introduction but 
console.log('Hi,');
console.log('My name is Waqar.');
console.log('I am a Web Developer');

// again I need to write my intro so i have to repeate the process
// as you can see it is a dublicate of a code 
//if we need to use a code again and again then we can put that code in a fucntion


console.log('*****');
console.log('Hi,');
console.log('My name is Waqar Ahmad.');
console.log('I am a Web Developer');


// To create a fucntion and put my code inside
//functions are reuseable piece of code that we can suer over and over again
//This is called function definition
function introduceME(){
    console.log('Hi,');
console.log('My name is Waqar.');
console.log('I am a Web Developer');
return 'Returned value in a const'
}

// so we are saving the return value into returnValue

const returnValue = introduceME()

// this is called function call
introduceME()

console.log('**********');
introduceME()

console.log('-----------------------------');

//arguments are the value that we can pass to function

//to use argument, we need to define a parameter in function difinition

console.log('Function parameter and using argument ');
//name = 'Coding Geek' would be default value if nothing pass in argument
//this is called default parameter and introduced 2015 with ES6 launched

//also wrote other method to achive same thig
function introMe(name = 'Coding Geek' )
{
    // if(name === undefined){
    //     name = 'Cooding Geek'
    // }
    // if(!name){
    //     name = 'Cooding Geek'
    // }
    console.log('Hi ,');
    // console.log(`My name is ${name || 'Cooding Geek'} `);
    console.log(`My name is ${name} `);
console.log('I am a Web Developer');

}
introMe('Waqar Ahmad')
introMe('Zeeshan Ahmad')
//without argument
introMe()


//two parameter fucntion 
console.log('-----------------------------');
console.log('Function with three Parameters');
function introMe2(name , work , age){
        console.log('Hi,');
console.log(`My name is ${name || 'Code Geek '}.`);
console.log(`I am ${work ||'Unemployed' }`);

console.log(`He is ${age || 0 } years old`);
}

introMe2()

introMe2('Waqar Ahmad', 'Web Developer', 34)

introMe2('Zeeshan Ahmad', 'Business Man', 37)

