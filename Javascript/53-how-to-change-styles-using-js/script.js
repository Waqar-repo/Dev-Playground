
//document.querySelector('h1').style it will not show the css if we attached css file but
//it will show inline css properties that we have given in html
//this will give us all css attributes 
document.querySelector('h1').style

//now we are changing h1 color to hot pink
document.querySelector('h1').style.color='hotpink'

//now changing the back ground color
document.querySelector('h1').style.backgroundColor='green'

const h1 = document.querySelector('h1')
const paragraph = document.querySelector('p')

//we can do same thing ushing this.saving h1 tag in h1 veriable

// h1.style.color='hot pink'
// h1.style.backgroundColor='skyblue'

//task changing the atag color to teal

const aTag = document.querySelectorAll('a')
// function chageclr () {
// for (let index = 0; index < aTag.length; index++) {
// aTag[index].style.color='teal'
    
// }
// }
//using for of loop
// for(const link of aTag){
// link.style.color='teal'
// link.style.textDecoration='none'
// link.style.fontWeight= 700
// link.style.fontFamily='cursive'
// link.style.fontSize='20px'

// }

//better solution cssText, we can write as we write in css

// for(const link of aTag){
// link.style.cssText = `
//  font-size: 19px;
//     font-family: cursive;
//     font-weight: 700px;
//     text-decoration-line: none;
//     color:teal`

// }

//best way to do same thing

//here, we are making new class in css and write code in css file
//then link that class name into atag using for of loop. much better way
for(const link of aTag){

// link.className= 'green-link'
// link.setAttribute('class', 'green-link')

}



//to add new class
// document.querySelector("#hii").classList.add('text')
//to remove a class
// document.querySelector("#hii").classList.remove('text')

//but there is another option called toggle: if there is a class with same name on element 
//then i will remove it,but if there is no class given on element, it adds

// document.querySelector("#hii").classList.toggle('text')


//if you want to add more than one class we can link.className= 'green-link wavy-link'
// but we have property called class list. which is better for these kind of work

for(const link of aTag){
link.classList.add('green-link')
//removing the class
link.classList.remove('my-link')
};
// document.querySelector("#hii").classList.toggle('text')





//practice
document.querySelector("#hii").classList.add('hidden')

// Q1. Write JavaScript code to:
// Select all <p> tags and change their text color to blue and font size to 18px.
// const pTag = document.querySelectorAll('p')
// for(const link of pTag){
//     link.style.color='red'
//     link.style.fontSize='18px'
// }

//Q:Add a new class highlight to an element with id="intro", but only if it doesn’t already exist.

// const hlight = document.getElementById('intro')
// hlight.classList.add('highlight')

// const aTag = document.querySelectorAll('a')




// Q:.teal-link {
//   color: teal;
//   font-weight: bold;
//   text-decoration: none;
// }
// Write JS code to apply this class to all <a> tags.
// for(const link of aTag){
// link.classList.add('teal-link')
// }

//Q:<h1>Dog</h1>
//<h1>Cat</h1>
//<h1>Bird</h1>
// Write JS to make all <h1> text blue and italic.

// const h1Tag = document.querySelectorAll('h1')
// for(link of h1Tag){
//     link.style.cssText = `
//         color: blue;
// font-style: italic;
//     `

// }

//Q:<h2 id="sub">Hello World</h2>
//Remove the class old-style (if it exists) and add the class new-style.

// const h2Tag = document.querySelector('h2')
// h2Tag.classList.toggle('old-style')
// h2Tag.classList.add('new-style')



//Q: <div>Box 1</div>
// <div>Box 2</div>
// <div>Box 3</div>


// 👉 Write JS to set:

// Background color = lightgray

// Padding = 10px

// Border radius = 8px

// css class
// .hidden{

// background-color: lightgray;
// padding: 10px;
// border-radius: 8px;

// }

// const divTag = document.querySelectorAll('div')
// for(link of divTag){
// link.classList.add('hidden')
// }


//Q:<p>This is <span>important</span> text.</p>
//  Select only the <span> and:

// Make text color = red

// Make font weight = bold

// const spanTag = document.getElementsByTagName('span')
// spanTag.style.cssText=`
// color: red;
// font-weight: bold;

// `

//Q5. Practice Mix
//<a href="#">Home</a>
//<a href="#">About</a>
//<a href="#">Contact</a>
//Using a loop, give all <a> tags these styles:
//Color = green
//Font size = 20px
//Remove underline

// const aaTag = document.querySelectorAll('a')
// for(link of aaTag){
//     link.style.color = 'green'
//     link.style.fontSize = '20px'
//     link.style.textdecoration = 'none'

// }