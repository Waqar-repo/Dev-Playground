// click event can do done on any element like h1 p tag 
// but not making sense but can be done

//fucntion on h1 on click event.
//  we write on click in h1 element and pass this function there
//this is a basic form to create/add event listener on element but not final
function sayHi() {
    console.log('hi Js');
}

//if we see even listeners tab on devtools, onclick calls our fucntion sayHi()

//task; console log when uble click on card

function cardHi(){
     console.log('Hi Card');
}

// above code is not best practice as we have to write java script in html
//it aalso has some limitations


//2nd approach
//in this way, our fucntion call directly, 
// unlike writing in html which create a function and that fucntion call our fucntion
//you can see in event listener 
function secondHi(){
    console.log('2nd Approach');
}

const h12 = document.querySelectorAll('h1')
h12[1].onclick = secondHi


//3rd approach
//this is a fucntion so we need to call it and write what kind of event you want to add
//1st parameter is a string that state what kind of event wants to add
//  and 2nd parameter is the fucntion that we want to call on that event
// this a better appraoch as we can add more than one event listener


function thirdHi(){
    console.log('Hi 3rd method');
}

h12[2].addEventListener('click',thirdHi)
h12[2].addEventListener('click',function(){
    console.log('inline fucntion');
})


//Task:  add event listener on card
const cardEvent = document.querySelector('.card')
cardEvent.addEventListener('click',() =>
{console.log('task: Card using add eventListner');})





//task when we click on card it add another card

let count = 1
cardEvent.addEventListener('click', function(){
   const newCard = document.createElement('div')
const container = document.querySelector('.container')
newCard.classList.add('card')
const containerCard = document.querySelector('.card')

newCard.innerText = count++

 container.appendChild(newCard)

})











