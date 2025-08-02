//not every function is method but every method is a function
//when you put fucntion in an object called method
//methods access using . operator

const maths = {
    E: 2.718281828459045,
    add:function (a,b){
    return a + b
},
    subs:function (a,b){
    return a - b;
},
expo:function (a,){
    return a * a
},
//es6 new feature
cube(a){
    return a**3
}
}
