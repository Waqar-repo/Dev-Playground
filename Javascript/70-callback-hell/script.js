function makeHttpRequest(method, url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    console.log();
    callback(xhr.response);
  });

  xhr.open(method, url);
  xhr.send();
}

makeHttpRequest('GET', 'https://dummyjson.com/users', (data) => {
  console.log(data);
  makeHttpRequest('GET',`https://dummyjson.com/posts/user/${data.users[0].id}`,(data) => {
      console.log(data);
      makeHttpRequest('GET',`https://dummyjson.com/comments/post/${data.posts[0].id}`,(data) => {
          console.log(data.comments[0].id);
          makeHttpRequest('GET',`https://dummyjson.com/users/${data.comments[0].id}`,
            (data) => {
              console.log(data);
            }
          );
        }
      );
    }
  );
});
