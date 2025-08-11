// es6 features 


function multiply(a,b = 1) // 1 is default parameter for b if we not pass argument or pass undefined when calling a fucntion
{
    return a * b
}

multiply(2) // one parameter and we multiply then a has a value 2 but
// b is undefined behind the scene. so number * undefined results in NAN not a number

//learn with example of dice

function dice(numerOfSide = 6){
    // if(numerOfSide === ' ' || numerOfSide === null){
    //     numerOfSide = 6
    // }
    return Math.floor(Math.random() * numerOfSide ) + 1
}

// so what is happening here is that just created the fucntion of a dice
//but some dice have more than 6 sides. 7 8 etc
// so when calling the fucntion you do not need to pass the
// arguments if dice side are 6 as the default parameter is 6
// if more than 6 then you can pass that number in argument
//when calling function

