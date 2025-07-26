//eventloop checks the callback queue and call stack,
//if any function is in call backqueue and call stack is empty.
//if call stack is empty and fucntion is in callback queue,
//then evenloop put fucntion from callback queue to call stack 



console.log('hi-1');


function hello(){
    console.log('Hello World 1');
}

function hello2(){
    console.log('Hello world 2');
}



hello()
setTimeout(hello,999)
setTimeout(hello2,998)
setTimeout(function(){
    console.log('Hello World 3')
},998)

for(let i = 1; i <=2; i++){
    console.log(i);
}
console.log('hi-2');

