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

