/*
event-bubbling-event-capture
when we click on child element,it also clicked on its parent and its parent's parent
this is called event bubbling
*/


const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')

/*
  Event Bubbling :
  -------------------------
  - If we click on a child (like pink or blue), the event first fires on that element,
    then "bubbles up" through its ancestors (green → body → document → window).
  - Even if we don’t add an event listener on blue itself, 
    clicking blue will still trigger listeners on its parent elements.
  - If we add a listener directly to the child (pink/blue), it will run first,
    then the parent listeners will follow in bubbling order.
  - Clicking on a parent (green) does NOT trigger the child’s listener, 
    because bubbling only works upward, not downward.
*/

window.addEventListener('click',(e)=>{
    console.log('window event listner ');
})

document.addEventListener('click',(e)=>{
    console.log('document event listner ');
})

document.body.addEventListener('click',(e)=>{
    console.log('body event listner ');
})
green.addEventListener('click',(e)=>{
    // e.stopPropagation()
    console.log('green event listner ');
    console.log(e);
})

pink.addEventListener('click',(e)=>{
    console.log('pink event listner ');
})

// //  - By default, events bubble up from the clicked element to its ancestors.
// //   - If we call e.stopPropagation() inside an event handler (e.g., on blue),
// //     the event will stop right there and won’t continue bubbling to parent elements.
blue.addEventListener('click',(e)=>{
    // e.stopPropagation,true() //event wont go outside blue
    console.log('blue event listner ');
})


/*
  Event Capturing (Trickling Phase):
  ---------------------------------
  - By default, events use bubbling (child → parent → document → window).
  - Capturing is the opposite: the event travels from the top (window → document → body → parent) 
    down to the target element.
  - To enable capturing, pass `true` as the third argument in addEventListener:
      
      green.addEventListener('click', (e) => {
          console.log('green capture');
      }, true);

  - With capture = true, the listener runs on the way down (before the bubbling phase).
  - Example event order if you click on blue:
      window (capture) → document (capture) → body (capture) → green (capture) → blue (target) 
      → green (bubble) → body (bubble) → document (bubble) → window (bubble)
*/

window.addEventListener('click',(e)=>{
    // e.stopPropagation()
    console.log('window event listner ');
},true)

document.addEventListener('click',(e)=>{
    console.log('document event listner ');
},true)

document.body.addEventListener('click',(e)=>{
    console.log('body event listner ');
},true)
green.addEventListener('click',(e)=>{
    // e.stopPropagation()
    console.log('green event listner ');
},true)

pink.addEventListener('click',(e)=>{
    console.log('pink event listner ');
},true)

blue.addEventListener('click',(e)=>{
    
    console.log('blue event listner ');
},{capture:true})



// - The `once` option ensures an event listener runs only a single time.
//   - After the first trigger, the listener is automatically removed.

blue.addEventListener('click',(e)=>{
    
    console.log('blue event listner ');
},{capture: true, once: true}) 


//practice

/* Challenge 3: Delegation Remove the button click handler entirely.
 Instead, attach one listener to .outer and log which child was clicked
  using event.target. (e.g., if you click the button, it should log "Button was clicked!".) */

// const outer = document.querySelector('.outer');
//     const middle = document.querySelector('.middle');
//     const inner = document.querySelector('.inner');
//     const button = document.getElementById('btn');


//  outer.addEventListener('click', (e) => {
//   if (e.target.id === 'btn') {
//     console.log('Button was clicked!');
//   } else if (e.target.classList.contains('inner')) {
//     console.log('Inner div was clicked!');
//   } else if (e.target.classList.contains('middle')) {
//     console.log('Middle div was clicked!');
//   } else if (e.target.classList.contains('outer')) {
//     console.log('Outer div was clicked!');
//   }
// });

/*Challenge 4: Once Option
Add a click listener on .middle that logs "Middle clicked once"
 but only runs the first time you click it.*/

// const outer = document.querySelector('.outer');
//     const middle = document.querySelector('.middle');
//     const inner = document.querySelector('.inner');
//     const button = document.getElementById('btn');

//     // Bubbling listeners

//     middle.addEventListener('click', (e) => {

//      console.log('Middle - bubble')},{once:true});




// const outer = document.querySelector('.outer');
//     const middle = document.querySelector('.middle');
//     const inner = document.querySelector('.inner');
//     const button = document.getElementById('btn');

//     // Bubbling listeners

//     outer.addEventListener('click', (e) => {
// if(e.target.id === 'btn'){
//   console.log('Button clicked')
//   e.stopPropagation()
// }
// else if(e.target.classList.contains('inner')){
// console.log('Inner clicked')

//     }
//     else if(e.target.classList.contains('middle')){
//       console.log('Middle clicked')
//     }
//      });


//   /*  //Challenge 6: Mixing stopPropagation and Delegation

// // Keep only one listener on .outer.

// // If you click the button, log "Button clicked!" and stop the event so that no parent (outer) logs anything else.

// // If you click .inner or .middle, log which one was clicked, and let the event bubble normally to .outer.

// // Hint: use e.target + e.stopPropagation() but only inside the button case. */

// const outer = document.querySelector('.outer');
//     const middle = document.querySelector('.middle');
//     const inner = document.querySelector('.inner');
//     const button = document.getElementById('btn');

//     // Bubbling listeners

//     outer.addEventListener('click', (e) => {
// if(e.target.id === 'btn'){
//   console.log('Button clicked')
//   e.stopPropagation()
// }
// else if(e.target.classList.contains('inner')){
// console.log('Inner clicked')

//     }
//     else if(e.target.classList.contains('middle')){
//       console.log('Middle clicked')
//     }
//      });


/*
🔥 Challenge 7: stopImmediatePropagation

👉 Task:

Add two click listeners on .inner.

The first one should log "Inner listener 1" and call e.stopImmediatePropagation().

The second one should log "Inner listener 2".

Add a listener on .outer that logs "Outer clicked".

🔮 Expected behavior:

If you click .inner: only "Inner listener 1" should run (not "Inner listener 2", not "Outer clicked").

If you click .outer: "Outer clicked" should log normally.

Key difference from stopPropagation:

stopPropagation() stops bubbling but doesn’t stop other listeners on the same element.

stopImmediatePropagation() stops both other listeners on the same element and further bubbling.

*/


// const outer = document.querySelector('.outer');
//     const middle = document.querySelector('.middle');
//     const inner = document.querySelector('.inner');
//     const button = document.getElementById('btn');

//     // Bubbling listeners

// outer.addEventListener('click', (e) => {
//   console.log('Outer clicked')
// })

//     inner.addEventListener('click', (e) => {
// console.log('Inner listener 1')
// e.stopImmediatePropagation()
//      });

//     inner.addEventListener('click', (e) => {
// console.log('Inner listener 2')
//      });
