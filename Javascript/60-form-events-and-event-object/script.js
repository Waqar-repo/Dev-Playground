//input event

const UserNameInput=document.querySelector("#username")
const p = document.querySelector('p')
const myForm = document.querySelector('form')
// UserNameInput.addEventListener('click', ()=> {console.log('Hi')})
// UserNameInput.addEventListener('dblclick', ()=> {console.log('Hi 2')})

//input event fires when we start writing in input field

// UserNameInput.addEventListener('input', ()=> {console.log('input event fired')})

//but if you want how access the value inside input event,
//for that we have to pass a parameter which is an object. 
// add event listener calls our fucntion.

// e.target.value will give us input ,

// UserNameInput.addEventListener('input', (e)=> 
//     {
// console.log('input event fired')

//         console.log(e.target.value); // we can access the value inside the input
//  p.innerText = e.target.value // we are taking input and write in ptag
//     }) 


//change event this will call/fired when we come out after change in input

    // UserNameInput.addEventListener('change', (e)=> 
    // {
// console.log('input event fired')
// console.log(e);
//         console.log(e.target.value); // we can access the value inside the input
 
//     }) 

    //focus event/ when we click or tab in input field and ready to write

//         UserNameInput.addEventListener('focus', (e)=> 
//     {
//         console.log(e);
// console.log('input focus event fired')


        
// }) 

//blur event when we click outside/ unlike change, it will always fired 
// but change only fired when we chnage in input and click outside

//     UserNameInput.addEventListener('blur', (e)=> 
//     {
//         console.log(e);
// console.log('input Blur event fired')

 
//     }) 

//form event
//if we have form element which has a button, 
// when we click button, then it fires submit event on form

myForm.addEventListener('submit',(e) =>{
    // e.preventDefault()
    console.log('form submitted');

})

// event.target is an element on which event occurs
//event.target can be chnaged based on whom it is clicked, from which element the event is fired/start
myForm.addEventListener('click', (e) =>{
    console.log('clicked', e.target);

//event.currentTarget does not change. it onlkly shows on whom the event is applied like main element
    console.log(e.currentTarget);
})

//event object

//if we have form element which has a button, when we click on button 

myForm.addEventListener('submit',(e) =>{
    e.preventDefault()
    console.log('form submitted',e);
//get form data we use formdata and loop on it to get all value in key value pait
//Formdata is a global method and we call it in new method
let formobject = {}
formobject = new FormData(e.target) //we can Iterate on formobject
for(const p of formobject.entries()) // itertaing on form to get value in key value pair
{
    console.log(p); // this is how we get form data

}

})










// practice
// let inputValue 
// UserNameInput.addEventListener('input', (event)=> 
//     {
// // console.log('input event fired')
//         // console.log(event);
//      inputValue = event.target.value
    
//     }) 

