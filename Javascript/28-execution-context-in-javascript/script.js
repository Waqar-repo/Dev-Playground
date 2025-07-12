debugger
sayHi()
// console.log(firstName)

// var firstName = 'Waqar'
// let lastName = 'Ahmad'
// let age = 15
// const yearOfBirth = 1999

const userName = 'Waqar Ahmad'
const userAge = 34

function sayHi(){
    const a = 2
    const b = 4
    add(2,2)
    console.log(a,b);
    console.log('say local context');
}

function add(x,y){
    subs(6,3)
    return x + y
    
    

}

function subs(w,a){
    return w - a
}

console.log('program ended');