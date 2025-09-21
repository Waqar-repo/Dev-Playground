const h1 = document.querySelector('h1')
const card = document.querySelector('.card')
const container = document.querySelector('.container')
const span = document.querySelector('span')

//click event
//this event will fire when we release the click button. 
//we can press the mouse button it will not fire unless we release the mouse button
let count = 0
// card.addEventListener('click', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// double click event
//this event will fire when we release the click button. 
//we can press the mouse button it will not fire unless we release the mouse button

// card.addEventListener('dblclick', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

//mouse down event it is usually trackpad button / or mouse middle button (sometime mouse wheel button)
//this event will fire as soon as we click, it does wait for release 

// card.addEventListener('mousedown', (e) => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
//     console.log(e);
// })


//mouse up
//it will fire as soon as we release the mouse button
//it might feel like click but it has different properties and different type

// card.addEventListener('mouseup', (e) => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
//     console.log(e);
// })


// mouse enter
//this fires when our mouse enter on an element which has the event listner
//no need to click etc

// card.addEventListener('mouseenter', (e) => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
//     console.log(e);
// })


// mouse leave

//this fires when our mouse leaves on an element which has the event listner
//no need to click etc

// card.addEventListener('mouseleave', (e) => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
//     console.log(e);
// })

//mouse move event
// When the mouse enters or hovers over an element with an event listener,
// and then moves around inside that element,
// the event will keep firing on every mouse movement until it leaves.

// card.addEventListener('mousemove', (e) => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
//     console.log(e);
// })

//mouse out
//similar to mouse leave

// card.addEventListener('mouseout', (e) => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
//     console.log(e);
// })


//mouse over
//similar to mouse enter
//difference: Fires when the mouse pointer leaves the element OR any of its child elements
//in this case span
// card.addEventListener('mouseover', (e) => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card',)
//     span.classList.add('span')
//     newCard.innerText = count++
//     container.append(newCard)
//     console.log(e);
// })


//some other events which are related to mouse but dont have mouse word 

//wheel event

// Fires when the user scrolls using the mouse wheel 
// or performs a two-finger scroll gesture on a trackpad.
// card.addEventListener('wheel', (e) => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
//     console.log(e);
// })


//scroll event fires when we have a side bar and it is scrolling
//this event is placed on document 

// document.addEventListener('scroll', (e) => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
//     console.log(e);
// })

//touch start event
// The touchstart event fires when the user places a finger on the screen
// on the element that has the event listener.

// card.addEventListener('touchstart', (e) => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
//     console.log(e);
// })


//touch end event
// The touchend event fires when the user lifts their finger off the screen
// on the element that has the event listener.

// card.addEventListener('touchend', (e) => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
//     console.log(e);
// })



//touch move event

// The touchmove event fires when the user touches the element
// and moves their finger across it while keeping contact with the screen.

// card.addEventListener('touchmove', (e) => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
//     console.log(e);
// })

//drag event
// Make the element draggable by adding draggable="true"
// and handle drag events such as dragstart and dragend.
// h1.addEventListener('drag', (e) => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
//     console.log(e);
// })#


//pointer 
// pointer move works both mobile and compouter
//works like mouse move and touch move

// card.addEventListener('pointermove', (e) => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
//     console.log(e);
// })

// //pointer enter

// card.addEventListener('pointerenter', (e) => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
//     console.log(e);
// })

// card.addEventListener('pointerleave', (e) => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
//     console.log(e);
// })



