/* local storage is window object
if we reload our page or close the tab then data will not be lost
*/

/* fetching local store data and put in h2 span class name*/
const name = document.querySelector('.name-tag')
const nameinput = document.querySelector('.name-input')
const ageinput= document.querySelector('.age-input')
const age = document.querySelector('.age')
// name.innerText = localStorage.myName

// // localStorage.myName = 'Ahmad' // set/update local storage


// nameinput.addEventListener('input',(e)=>{
//     // localStorage.myName = e.target.value //not good method
//     localStorage.setItem('myName',e.target.value) // recomended method
//     name.innerText = localStorage.getItem('myName') // recomended method
// })

//updating age

// ageinput.addEventListener('input',(e)=>{
//     localStorage.setItem('myAge',e.target.value)
//     age.innerText = localStorage.getItem('myAge')
// })

//above code, we age saving name and age saperatly 
// but want to save both in one object
//we can also store big objects


//we are getting myData from local storage, because we set item using json stringify,
//it is string now, we convert string back to object using jason parse
// if we do not have any data in myData then we pass empty object using or operator
const myData = JSON.parse(localStorage.getItem('myData')) || {}
  
nameinput.addEventListener('input',(e)=>{
    myData.name = e.target.value
// JSON.stringify(myData) // this convert object into string and pass object
//   JSON.parse('{"name":"waqar","age":""}')  //to convert string intp object
localStorage.setItem('myData',JSON.stringify(myData))
name.innerText = myData.name
})

ageinput.addEventListener('input',(e)=>{
    myData.age = e.target.value
localStorage.setItem('myData',JSON.stringify(myData))
age.innerText = myData.age
})
name.innerText = myData.name || ''
age.innerText = myData.age || ''

//this will clear all local storage
// localStorage.clear()

// to clear specific data (key)
// localStorage.removeItem('myData')
// localStorage.removeItem('user2')