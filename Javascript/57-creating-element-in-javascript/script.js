const h1 = document.querySelector('h1')
const container = document.querySelector(".container")

const pokeImg = document.querySelector('img')

//task 
// but we have 1st img of pokemon and we loop on it and make change src to get different img

// for (let index = 1; index <= 100; index++) {
   
//     const newPoke = pokeImg.cloneNode()
//  pokeImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`
//     container.appendChild(newPoke)
// }

//understanding and creating new element using java script and update properties style etc
const p = document.createElement('p')
p.innerText='Ahmad'
p.classList.add('vizz') // adding new class
p.id='vizg' //adding id
container.append(p)

p.style.cssText=`
color: black;
font-size:32px;
`

//task 2 
// now we dont have the source img we have to create element 
//create new img element and clone it and append with dynamic src

const newImg = document.createElement('img')
for (let index = 1; index <= 100 ; index++) {
    const newimg1 = newImg.cloneNode()
    newimg1.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`
   newimg1.alt = `PokeMon Img ${index}`
    container.appendChild(newimg1)
}