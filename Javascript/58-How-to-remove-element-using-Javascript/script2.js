let container = document.querySelector('.container')

for(let i = 1; i <= 100; i++) {
    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')

    const newImage = document.createElement('img')
    newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

    const paragraph = document.createElement('p')
    paragraph.innerText = i

    imgContainer.append(newImage, paragraph)
    container.append(imgContainer)
}

// let myHTML = ``

// for (let i = 1; i <= 100; i++) {
//   myHTML += `
//     <div class="img-container">
//         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
//         <p>${i}</p>
//     </div>
//     `
// }

// container.innerHTML = myHTML


//new lesson

const myImg = document.querySelector("body > div > div:nth-child(5)")
//simply remove the element 
// myImg.remove()

//but removeChild has to be called on parent
myImg.parentElement.removeChild(myImg)

//remove h1
// document.querySelector("body > h1").remove()

//to remove body

// document.querySelector("body").remove()


//so if we remove container it will be removed but it will still be there
//in side of our memory because container is a veriable in this case

//use let to make variable and after you make it null to solve this problem.
//you can not chnage this if used const

container.remove()

container = null