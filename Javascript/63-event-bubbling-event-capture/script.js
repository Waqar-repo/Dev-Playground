//event-bubbling-event-capture
//when we click on child element,it also clicked on its parent and its parent's parent
// this is called event bubbling


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