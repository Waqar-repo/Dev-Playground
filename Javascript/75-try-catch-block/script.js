
/*example of type error. Cannot read properties of undefined 
try and finally runs but catch only runs when there is an error in try block */
const name = {
    name: 'waqar',
    city: 'fife'
}
try{
console.log(name.country.postcode)
}
catch(err){
    console.dir(err);  //err is object and dir gives us object, it has message and stack
    console.dir(err.message); // shows what error message has, like what is the error
    console.dir(err.stack); // shows what line and character number cause the error
}
finally{
    console.log('hello World');
}

console.log('---------------------------------------------------------------');


try{
console.log(a);
}
catch(err){
    console.dir(err);  //err is object and dir gives us object, it has message and stack
    console.dir(err.message); // shows what error message has, like what is the error
    console.dir(err.stack); // shows what line and character number cause the error
}
finally{
    console.log('hello World');
}

console.log(3+7);
console.log('hello main thread');

console.log('---------------------------------------------------------------');

/* use try and catch in async fucntion */

async function makeAsyncRequest(){
try{
        const response = await fetch('https://dummyjson.com/users/1')
console.log(response);

const data = await response.json()
console.log(data);
}
catch(err){
console.dir(err);
}

console.log('hi in async fucntion');
}

makeAsyncRequest()