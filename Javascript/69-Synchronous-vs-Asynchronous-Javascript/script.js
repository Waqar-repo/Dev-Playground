
const dogPhoto = document.querySelector('.img')
const btn = document.querySelector('button')


    btn.addEventListener('click',()=>{

//XML HttpRequest it call using new operator
const xhr = new XMLHttpRequest;

// we can set response type to json so we do need to parse it later
// xhr.responseType = 'json'

console.log(xhr);

//add load event on xhr which only triger when response arrives
xhr.addEventListener('load',()=>{

console.log(xhr);

//testing how to get img src if we have not set response type to jason
// let xhrMsg = JSON.parse(xhr.response)

//using response type to json
dogPhoto.src = JSON.parse(xhr.response).message

//convert json to object
console.log(JSON.parse(xhr.response).message); 

});


//we can also use onload instead of load event listener.does same job

// xhr.onload = ()=>{

// console.log(xhr);
// console.log(xhr.response);
// dogPhoto.src = xhr.response.message
// }

//what type of request and url(api)
xhr.open('GET','https://procodrr.vercel.app/?sleep=4000',false)
xhr.send()

    });



//In JavaScript, synchronous code executes sequentially,
//  blocking the program until each task is complete, 
// while asynchronous code allows time-consuming tasks to run 
// in the background without blocking the main thread

// for loop, while loop and fucntions are sync code and
//run on main java script thread

//this is async code
// setTimeout(() => {
//     console.log('hi');
// }, 4000);

const blcok = document.querySelector('.blocking')


blcok.addEventListener('click',()=>{
const startTime = Date.now()
let currentTime = startTime

while(startTime + 4000 > currentTime){
    currentTime = Date.now()
}

})