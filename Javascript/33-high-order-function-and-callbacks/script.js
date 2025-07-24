// debugger
function a(b) {
//   console.log(typeof b);
  console.dir(b);
  b()
}

// a('hiii');
// a({ user: 'Waqar', age: 34 });
// a([1, 2, 3, 4, 5, 6]);
//The console.dir() static method displays a list of the properties of the specified JavaScript object.
//type of fucntion is fucntion but behind, it is object
console.dir(a);
//using fucntionas object as saving age
//display a.age.
a.age =  34
console.log(a.age);
console.log('-----------------------------');

//this is a higher order fucntion
function x(i) {
  console.dir(i);
  i()
}

function sayHi(){
    console.log('say Hiiiiii');
    
}
//sayHi function will pass to x(i) and sayHi() will call as i in x(i)
//sayHi()is a callback fucntion
x(sayHi)

sayHi()
//commonly use this if we will use sayHi() fucntion later
//but if we only using once then use anonymouse function mentioned below

console.log('----------');


//this higher order fucntion fucntion would do exactly the same
//but using anonymous()
function y(j) {
  console.dir(j);
  j()
}

y(function (){
    console.log('say Hiiiiii 2');
    
})


//practical example

