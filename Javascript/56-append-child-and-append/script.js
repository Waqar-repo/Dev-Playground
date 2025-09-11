//defer:browser send request to js file and mover forward and start parsing body 
// and when body parse ends, then execute java script

//  without it, browser send request to js file and wait and try to execute it
//but in mean time html elements are not converted into object by parser


//append and append child
//we can insert at end/append one element into another element using this



const h1 = document.querySelector('h1')
const container = document.querySelector(".container")
const card = document.querySelector('.card')

//append child

//we are appending h1 into container it is like cut and paste
//appendchild also return the appened element
// only append nodes
// container.appendChild(h1)

//but if we want to do copy paste appendchild

//clonenode is a fucntion so you have to call it h1.cloneNode(). 
//it return the clone of the element without the text

// h1.cloneNode()

//now if we write true it make a cope with text

// h1.cloneNode(true)

// so doing the all thing in one go. append child with copy element

// container.appendChild(h1.cloneNode(true))

//add string using appendchild

// const newTextNode = document.createTextNode('Hello')
// container.appendChild(newTextNode)

//task

// for (let index = 2; index <=100; index++) {
//     const newCard = card.cloneNode()
//     newCard.innerText = index
//     container.appendChild(newCard)

    
// }


//append
//append does not return the appened element, you can append a string easily and 
//we can append multiple things

//you can append string too
// container.append('hello')

//append multiple
// container.append('hello',h1,'waqar')

//if we need a element from scratch mean we do not need what is inside of that element
// we use clonenode


//practice
const ahmad = document.querySelector('.ahmad')
for (let index = 0; index <=10; index++) {

const newName = ahmad.cloneNode()
newName.innerText = 'Ahmad' + index
container.appendChild(newName)
}

for (let index = 0; index <= 6; index++) {
    container.append(1,index )
    
}


const hiGuys = document.querySelector('.test')

const newHiGuys = hiGuys.cloneNode()
newHiGuys.innerText ='Hi guys clone'
container.appendChild(newHiGuys)