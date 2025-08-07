// // for each array method kind of loop but it is not loop,
// // like (for loop while loop for of for in)
// // for each does not return anything. 

// this is a array method and we use it to print / access  each element of array o
const fruits = ['banana', 'apple', 'peach', 'mango', 'grapes']

// for of loop
// for(const fruit of fruits){
//     console.log(fruit);
// }

// using for each method
// //  this take a call back fucntion.
// // it is such a fucntion that we pass another fucntion

// // it will call this fucntion as many times as there are element in the array


fruits.forEach(function(fruit)  // the twist is, if pass any parameter,
// that parameter would act like a each element of an array 
 {
    console.log(fruit);
})

console.log('--using foreach and arrow function--');
// // foreach is a higher order fucntion and 
// anonymous function/also arrow fucntion is call back function
fruits.forEach(fruit1 => console.log(fruit1))

//doing same but normal fucntion
console.log('--doing same but normal fucntion--');
fruits.forEach(abs)

function abs(el){
    console.log(el);

}


console.log('------practice-------');

const cars = ['honda','bmw','toyata', 'lambo']

cars.forEach(el => {
    // for(let i = 0; i < cars.length; i++){
    //     console.log(i);
    // }
    // for(const el1 of cars){
    //     console.log(cars.indexOf(el1));
    // }
    // debugger
    console.log(cars.indexOf(el), el);

}
)
const index = cars.indexOf('toyata')
    // if(index !== -1){
    //     cars.splice(index , 1)
    //     cars.push('honda')
    // }
console.log(cars);

cars.forEach((el,index) => {
    if(el == 'toyata'){
        cars.splice(index , 1)
        cars.push('honda')

    }
    
}
)
console.log(cars);