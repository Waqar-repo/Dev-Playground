

function makeHttpRequest(method, url) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

const promise = new Promise((resolve,reject)=>{
  xhr.addEventListener('load', () => {
    
  resolve(xhr.response)
  });
   xhr.addEventListener('error', () => {
    
  reject('Failed')
  });
})

  xhr.open(method, url);
  xhr.send();
  return promise
}

// makeHttpRequest('GET', 'https://dummyjson.com/users', (data) => {
//   // console.log(data);
//   makeHttpRequest('GET',`https://dummyjson.com/posts/user/${data.users[0].id}`,(data) => {
//       // console.log(data);
//       makeHttpRequest('GET',`https://dummyjson.com/comments/post/${data.posts[0].id}`,(data) => {
//           // console.log(data.comments[0].id);
//           makeHttpRequest('GET',`https://dummyjson.com/users/${data.comments[0].id}`,(data) => {
//               console.log(data);
//             }
//           );
//         }
//       );
//     }
//   );
// });
makeHttpRequest('GET','https://dummyjson.com/users')
.then((userData)=>{
  console.log(userData);
  return makeHttpRequest('GET',`https://dummyjson.com/posts/user/${userData.users[0].id}`)
})
.then((data)=>{
  console.log(data);
return makeHttpRequest('GET',`https://dummyjson.com/comments/post/${data.posts[0].id}`)
})
.then((data)=>{
  console.log(data);
  return makeHttpRequest('GET',`https://dummyjson.com/users/${data.comments[0].id}`)
})
.then((data)=>{
  console.log(data);
})
.catch((err)=>{
  console.log(err);
})