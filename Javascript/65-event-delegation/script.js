
/* Event Delegation
we can use event delegation to make our code optimise and less load on browser
when we do not add multiple event listner on children but add event listner on parent 
and get the desired output
*/

const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')

let count = 1

addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)

    /*
    code below adds event listener to all newly created cards 
    which is fine for functionality but overloads on browser 
    and code optimisation is not good */
    
    
    newCard.addEventListener('click',(e)=>{
    newCard.remove()
    
})
})

/* 
code below is better optimised as we add event lister on container and
 remove the target card
*/

// container.addEventListener('click',(e)=>{
//     if(e.target !== container && e.target !== card ){
//        e.target.remove() 
//     }
// })


//practice


/* Your Task (in app.js)

When the Add Item button is clicked, append a new <li> with text like "Item X" (incrementing number).
Use event delegation so that when you click on any <li> (even newly added ones),
 it should be removed from the list.*/

//  const btn = document.querySelector('#add')
// const ul = document.querySelector('.list')
// let count = 3
// btn.addEventListener('click',(e)=>{
//   const newul = document.createElement('li')
//   newul.innerText = `Item ${count++}`
//   ul.append(newul)

// })

// ul.addEventListener('click', (e) =>{

//   e.target.remove()

// })

