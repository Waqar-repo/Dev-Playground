/*when promise resolved, promise result value go to callback argument IE 'data'
fetch returns response object, which has data (body)
and headers. when header comes promise resolved

so we will not get data 1st time, we need to do res.Json() to get data

*/

// fetch('https://dummyjson.com/products')
// .then((res)=>{
// //res.Jason() returns the promise    
//     return res.json()
//     }).then((data)=>{
//         console.log(data);
//     })

// //post request
// fetch('https://dummyjson.com/products/add', {
//   method: 'POST',
// //   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     title: 'BMW Pencil',
//     category:'Stationary',
//     price:2
//     /* other product data */
//   })
// })
// .then((res)=> res.json())
// .then((data)=> console.log(data))
// .catch((err)=>{
//     console.log(err);
// })

//Task convert xmlhttprequest to fetch

fetch('https://dummyjson.com/users')
.then((res) => {
    return res.json()
})
.then((userData)=>{
    console.log(userData);
   return fetch(`https://dummyjson.com/posts/user/${userData.users[0].id}`)
})
.then((res) => {
    return res.json()
})
.then((commentData)=>{
    console.log(commentData);
    return fetch(`https://dummyjson.com/comments/post/${commentData.posts[0].id}`)
})
.then((res) => {
    return res.json()
})
.then((data)=>{
    console.log(data);
    return fetch(`https://dummyjson.com/users/${data.comments[0].user.id}`)
})
.then((res)=>{
    return res.json()
})
.then((userdata)=>{
    console.log(userdata);
})
.catch((err)=>{
    console.log(err);
})