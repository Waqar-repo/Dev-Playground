/*
event simulation:
when we click on an element then an event fires. usualy we manuly click or ticuh to fire that event
we can do same thing using java script using click method and browser think some one click it
 

we mostly use focus,blur and click simulating

*/
const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')

let count = 1

addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})

/* click event simulator
if we call click() method then click will automatically/
suppose we need to click 100 times then we can call this method 100 times  using for loop

*/

// for(let i = 0; i <= 100; i++){
//     addCardBtn.click()
// }

/* or we can animate it or delay execution using higher order fucntion mset interval
we we call set interval() it returns the id. we save that id in IntervalId veriable
and clear interval to stop it*/

//  const intervalID = setInterval(()=>{

//     if(count > 99){
// clearInterval(intervalID)
// }

//     addCardBtn.click()

//     }, 10)


/*focus simulator
we want to focus on input field using focus simulator with the help of java script
focus() method is using to focus that input field like input.focus()
*/
const input = document.querySelector('input')
// input.focus()

/* using settimeout to focus on our element after 1 second*/

// setTimeout(()=>{
//     input.focus()
// },1000)

/* using settimeout to blur out from our element after 3 second
form.blur()method */

// setTimeout(()=>{
//     input.blur()
// },3000)


/* submit event simulator
we can simulate form submit using js code form.submit() method
normally we press enter or click submit button

*/

const form = document.querySelector('form')

// setTimeout(()=>{
//     form.submit()
// },3000)


/*reset form simulator
we can simulate reset using js code form.reset()
it will reset input field after 5 seconds
*/


setTimeout(()=>{
    
    form.reset()
},5000)



/*practice */

/*i have set interval of every 2 sec and timeout 5 sec
so interval runs untill count is > 3 and return to stop the execution */

// let count1 = 0
//     const intId = setInterval(()=>{
//         count1++
//         if(count1 > 3){
//             clearInterval(intId)
//          return
//         }
//         console.log('interval called');
//              setTimeout(()=>{

//     form.reset()
//     console.log('reset called');
// },5000)


   
//     },2000)

/*Your Job in app.js

Select the button and container.

Add an event listener on the button that creates a new .box with a number inside.

Write a loop (or setInterval) that simulates clicking the button 10 times automatically.*/

// const btn = document.querySelector('#addBoxBtn')
// const container = document.querySelector('.container')
// let count = 1

// btn.addEventListener('click',(e) =>{
// const newbtn = document.createElement('div')
// newbtn.classList.add('box')
// newbtn.innerText = count++
// container.append(newbtn)

// })


// const intId = setInterval(()=>{
//   if(count == 10){
//     clearInterval(intId)
//     // return
//   }
//   btn.click()
// })


/*🚀 Coding Challenge 2: Focus & Blur Simulation

👉 Task:
Create a text input field and a button.

When the page loads, after 1 second, automatically focus on the input (like the user clicked inside it).

After 3 seconds, automatically blur the input (like the user clicked away).

When the input is blurred, log "Input blurred" in the console.*/



// const input = document.querySelector('input')

// let count = 0

// setTimeout(()=>{
// input.focus()
// },1000)


// setTimeout(()=>{
// input.blur()
// },3000)


// input.addEventListener('blur',()=>{
//   console.log('Input blurred')
// })

/*🚀 Coding Challenge 3: Form Submit + Reset Simulation

👉 Task:

Create a form with an input field and a submit button.

When the page loads, automatically submit the form after 2 seconds.

When the form is submitted, log "Form submitted" in the console.

After 5 seconds, automatically reset the form (clear the input).

When the form resets, log "Form reset" in the console. */

// const form = document.querySelector('form')

// setTimeout(()=>{
//   form.submit()
// },2000)

// form.addEventListener('submit',(e)=>{
//   e.preventDefault()
//   console.log('Form submitted')
// })

// setTimeout(()=>{
//   form.reset()
// },5000)
// form.addEventListener('reset',(e)=>{
//   console.log('Form reset')
// })


/* 
Master Challenge: “Interactive Dashboard Automation”
What You Need to Do in app.js
Select the button, container, input, and form.
Simulate 5 card additions automatically (click simulation).
After all cards are added:
Focus the input after 1s.
Blur the input after 2s → log "Input blurred".
After the input blurs:
Submit the form automatically → log "Form submitted".
Immediately reset the form → log "Form reset".
*/

// const btn = document.querySelector("#addCardBtn")
// const container = document.querySelector(".container")
// const input = document.querySelector("input")
// const form = document.querySelector('form')

// let count = 1

// btn.addEventListener('click',(e) =>{
// const newbtn = document.createElement('div')
// newbtn.classList.add('card')
// newbtn.innerText = count++
// container.append(newbtn)

// })


// const intId = setInterval(()=>{
//   if(count > 5){
//     clearInterval(intId)
//     setTimeout(()=>{
//       input.focus()
//     },1000)

//     setTimeout(()=>{
//       input.blur()
//       console.log('Input blurred')
//     },2000)

//     setTimeout(()=>{
//      form.submit()
  
//     },3000)

//     setTimeout(()=>{
//       form.reset()
//       console.log('Form reset')
//     },4000)
//   }
//   btn.click()

// },200)
// form.addEventListener('submit',(e)=>{
//   e.preventDefault()
//   console.log('Form submitted')
// })
 
