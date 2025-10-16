
const dogPhoto = document.querySelector('.img')
const btn = document.querySelector('button')


    btn.addEventListener('click',()=>{
fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(json =>{
       
        dogPhoto.src = json.message

    })
    })
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));