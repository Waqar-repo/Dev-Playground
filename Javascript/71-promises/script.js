const btn = document.querySelector('#resolve-btn')
const rejbtn = document.querySelector('#reject-btn')

//promise is async managed by browser
// we need to pass a call back function in promise
//promise has three states
// pending , fulfilled and rejected
const p = new Promise((resolve,reject)=>{

    //resolve the promise
    // resolve({name:'Waqar'})

    //reject the promise
    // reject('promise rejected')

    //we can resolve it after sometime
    // setTimeout(()=>{
    //     resolve({name:'Waqar'})
    // },4000)

    //we can resolve it using button and eventlistener
    btn.addEventListener('click',()=>{
        resolve('Promise Resolved')
    })


    //we can reject it using button and eventlistener
    rejbtn.addEventListener('click',()=>{
        reject('Promise rejected')
    })
})


//when promise resolve/fulfilled, then() method calls
//you can pass argument in CBF. and it will be value the we pass in resolve('')
//then() also returns a promise you can call then() on then()
// p.then((data)=>{
//     console.log('then');
//     console.log(data);
//     return 15
// }).then((data2)=>{
//     console.log(data2);
//it will console log 15 that we return from 1st then()
// })
p.then((data)=>{
    console.log('then');
    console.log(data);
  

//when promise rejected, catch() method calls    
//you can pass argument in CBF. and it will be value the we pass in rejected('')    
//catch also return a promise
}).catch((err)=>{
    console.log('catch');
    console.log(err);


//finally calls when promise is settled,either fulfilled/rejected    
}).finally(()=>{
    console.log('Finally');
})

//then () sit in microtask queue which has more priority,
//if one function sitting in callback queue and one in microtask queue
//microTask queue will go to call stack 1st. 