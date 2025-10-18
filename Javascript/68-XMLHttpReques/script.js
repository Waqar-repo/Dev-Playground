
const dogPhoto = document.querySelector('.img')
const btn = document.querySelector('button')


    btn.addEventListener('click',()=>{
// fetch('https://dog.ceo/api/breeds/image/random')
//       .then(response => response.json())
//       .then(json =>{
       
//         dogPhoto.src = json.message

//     })

//XML HttpRequest it call using new operator
const xhr = new XMLHttpRequest;

// we can set response type to json so we do need to parse it later
xhr.responseType = 'json'


// console.log(xhr);
//add load event on xhr which only triger when response arrives
xhr.addEventListener('load',()=>{

console.log(xhr);
console.log(xhr.response);

//testing how to get img src if we have not set response type to jason
// let xhrMsg = JSON.parse(xhr.response)

//using response type to json
dogPhoto.src = xhr.response.message

//convert json to object
// console.log(JSON.parse(xhr.response)); 

});

//we can also use onload instead of load event listener.does same job

// xhr.onload = ()=>{

// console.log(xhr);
// console.log(xhr.response);
// dogPhoto.src = xhr.response.message
// }

//what type of request and url(api)
xhr.open('GET','https://dog.ceo/api/breeds/image/random')
xhr.send()

    });
