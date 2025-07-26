    debugger
function outer(){
        const a = 4
    function parent(){

    const b = 6
    function add() {

  console.log(a + b)
} return add
} return parent()
}
const add1 = outer()
// add()

//You can see closure in the console. 
// when a variable is defined/declared in the parent function, 
// and use in inner/child function and return inner function, 
//  from parent function, also returns parent function variables that the inner function uses

console.dir(add1);