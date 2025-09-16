
const container = document.querySelector(".container")

// practice
// creating new div
const imgContainer = document.createElement('div')

//give class name
imgContainer.classList.add('img-container')





//append new div
container.appendChild(imgContainer)




//in this loop, creating new img element inside 
//set the src dynamic
//now append new img in img container
for (let index = 1; index <= 100; index++) {
    const newimg = document.createElement('img')
    newimg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`
    const p = document.createElement('p')
    p.innerText = index
    imgContainer.appendChild(newimg)
    imgContainer.append(p)
    
}

//other way to do same but less code
// let myHTML = ''
// for(let i = 1; i <= 100; i++){
//     myHTML += `
//       <div class="img-container">
//         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
//         <p>${i}</p>
//     </div>
    
//     `
// }

// imgContainer.innerHTML = myHTML