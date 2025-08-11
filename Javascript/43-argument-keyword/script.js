function add (a,b){
    console.log(arguments);
    return a + b
}

function sum(){
    let sum1 = 0
    for(let i = 0; i < arguments.length; i++){
        
        // console.log(arguments[i]);
        sum1 = sum1 + arguments[i]
        

    
    }return sum1
}
// argument keyword is not an array but you can convert it into array
// if you make a function smimilar to above it take 
//zero arguments in braces but you can use arguments keyword
// and play aroud just like what I did

const expo = function(){
    let result = 0
    for(let i = 0; i <arguments.length; i++){
        console.log(arguments[i]);
        result = arguments[i] * arguments[i]
    }return result
}

const arr = function(){
    let array = 0
    array = [...arguments] // spread operator arguments into array
    console.log(array);

     const sumg = array.reduce((acc,curr) =>{
        console.log(acc+curr);
        return acc + curr

     })
     
        
    }