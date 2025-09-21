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

card.addEventListener('pointerleave', (e) => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
    console.log(e);
})





//practice 
// Challenge 1: Click Counter Cards

// Task: Every time you double-click on the .box, 
// create a new <div> with class "mini-box" that shows the count number.

// const box = document.querySelector('.box')
// const wrapper = document.querySelector('.wrapper')
// let num = 1

// box.addEventListener('dblclick', (e) => {
//   const newDiv = document.createElement('div')
//   newDiv.classList.add('mini-box')
//   newDiv.innerText = num
//   num++
//   newDiv.style.cssText = " display: flex; flex-wrap: wrap;"
//   box.append(newDiv)


// })

// Challenge 2: Mouse Enter Highlight

// Task: When the mouse enters the .circle, change its background color to green.
//  When the mouse leaves, change it back to red.

// const circle = document.querySelector('.circle')

// circle.addEventListener('mouseenter', (e) =>{
//   circle.style.cssText = " background-color: green;"
// })

// circle.addEventListener('mouseleave', (e) =>{
//   circle.style.cssText = " background-color: red;"
// })



// Challenge 3: Touch Move Trail (Mobile Friendly)

// Task: When the user touches and moves their finger inside the .pad, 
// create small dots (.dot) where the finger moves.


// const pad = document.querySelector('.pad')

// pad.addEventListener('touchmove', (e) => {
//   e.preventDefault()
//     const touch = e.touches[0];
// const rect = pad.getBoundingClientRect()
// const x = e.touches[0].clientX - rect.left
// const y = e.touches[0].clientY - rect.top
//     const dot = document.createElement('div');
//     dot.classList.add('dot');
//     dot.style.left = `${x}px`;
//     dot.style.top = `${y}px`;

//     pad.appendChild(dot);


// })


// Challenge 4: Double-Click Color Boxes

// Task:

// There’s a .color-box element.

// On double-click, its background color should toggle between blue and red.

// const box = document.querySelector('.color-box');
// box.addEventListener('dblclick', (e) =>{
//   box.classList.toggle('red')
//   box.classList.toggle('blue')
// })

// // css
// .blue{
//   background-color: blue;
// }

// .red{
//   background-color: red;
// }

// //html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <title>Double-Click Color Boxes</title>
//   <style>
//     .color-box { width: 150px; height: 150px; margin: 50px auto; cursor: pointer; }
//   </style>
// </head>
// <body>
//   <div class="color-box blue"></div>
//   <script src="app.js"></script>
// </body>
// </html>


// Challenge 5: Hover Counter

// Task:

// There’s a .hover-counter element.

// Every time the mouse enters the element, increase a counter and display it inside the box.

// const counterBox = document.querySelector('.hover-counter');
// let count = 0;
// counterBox.addEventListener('mouseenter', (e) =>{
//   counterBox.innerHTML = count++
// })



// Master Mini Challenge: Interactive Card Box

// Task:

// There’s a .master-box element on the page.

// Single-click on the box → toggle the border color between black and orange.

// Double-click on the box → toggle the background color between blue and red.

// Mouse enters the box → show a counter of how many times the mouse has entered inside the box.

// const masterBox = document.querySelector('.master-box');
// let enterCount = 0;
// masterBox.addEventListener('mouseenter', (e) =>{
//   masterBox.innerHTML = ++enterCount
// })

// masterBox.addEventListener('click', (e) =>{
//   masterBox.classList.toggle('orange')
// })

// masterBox.addEventListener('dblclick', (e) =>{
//   masterBox.classList.toggle('red')
// })

// Mini Challenge 6: Click & Double-Click Counter

// Task:

// There’s a .counter-box.

// Single click → increase the single-click counter and display it.

// Double-click → increase a double-click counter and display it below the single-click count.

// const box = document.querySelector('.counter-box');
// let clickCount = 0;
// let dblClickCount = 0;
// console.log(box.childNodes);

// box.addEventListener('click',(e) => {
// box.childNodes[0].textContent = `clicks: ${++clickCount}`
// })

// box.addEventListener('dblclick',(e) => {
// box.childNodes[2].textContent = `Double-clicks: ${++clickCount + 1}`
// })


// Mini Challenge 8: Multi-Counter Boxes

// Task:

// There are 3 boxes side by side.

// Click on a box → increment a counter only for that box and display it inside the box.

// Double-click → reset that box’s counter to 0.

// const boxes = document.querySelectorAll('.box');
// let count = 0
// boxes.forEach((element) =>{
//   element.count = 0
// element.addEventListener('click',(e) =>{
// element.count++
// element.innerHTML = element.count

  
// })
// element.addEventListener('dblclick', (e) =>{
//    element.count = 0
//   element.innerHTML = element.count
// })
// })
