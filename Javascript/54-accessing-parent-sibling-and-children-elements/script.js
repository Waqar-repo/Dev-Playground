const h1 = document.querySelector('h1')
const paragraph = document.querySelector('p')
const allLinks = document.querySelectorAll('a')

// console.log(paragraph.innerHTML);

// paragraph.innerHTML = '<h4>Hiii</h4>'

h1.style.color = 'hotpink'
h1.style.backgroundColor = 'skyblue'

// for (let i = 0; i < allLinks.length; i++) {
//   allLinks[i].style.color = 'teal'
// }


for (const link of allLinks) {
    // link.style.color = 'teal'
    // link.style.textDecorationLine = 'none'
    // link.style.fontWeight = '700'
    // link.style.fontFamily = 'cursive'
    // link.style.fontSize = '18px'

    // link.style.cssText = `
    //     color: teal;
    //     text-decoration-line: none;
    //     font-weight: 700;
    //     font-family: cursive;
    //     font-size: 18px;
    // `

    // link.className = 'green-link'
    // link.setAttribute('class', 'green-link')

    link.classList.add('green-link')
    link.classList.remove('my-link')
    // link.classList.toggle('my-link')
}


// new lesson
//all the elements will be a node but there are other things are node apart from elements
// to know/access the parent of an element, we save that element into veriable
const firstlink = document.querySelector("body > p:nth-child(5) > a.hii.hello.green-link")

//then nfirstlink.parentElement will give us the parent of the element, in this case ptag
firstlink.parentElement

//if we run parent element on previous parent element , we get its parent, which is body in thsi case
firstlink.parentElement.parentElement

//here it will give us html in this case
firstlink.parentElement.parentElement.parentElement

//not html does has any parent so return null
firstlink.parentElement.parentElement.parentElement.parentElement

//but parent node of html is document
firstlink.parentElement.parentElement.parentElement.parentNode

//to access the children of an element

//in this case, it does has any child
firstlink.children

//but here we have body right now
firstlink.parentElement.parentElement

//so we accessing parent and then accessing it child,
//now all children of body will be shown in thsi case

firstlink.parentElement.parentElement.children
//output of above code
//firstlink.parentElement.parentElement.children
// HTMLCollection(9) [h1.css-image, h2#hii.heading-1, h2, hr, p, img, ul, p, script, hii: h2#hii.heading-1]
// 0
// : 
// h1.css-image
// 1
// : 
// h2#hii.heading-1
// 2
// : 
// h2
// 3
// : 
// hr
// 4
// : 
// p
// 5
// : 
// img
// 6
// : 
// ul
// 7
// : 
// p
// 8
// : 
// script
// hii
// : 
// h2#hii.heading-1
// length
// : 
// 9

//access siblings  ie next sibling and previous sibling

// nextSibling returns the next node (an element node, a text node or a comment node).
//  Whitespace between elements are also text nodes.
// nextElementSibling returns the next element (not text and comment nodes).


//previousSibling returns the previous node (an element node, a text node or a comment node).
//  Whitespace between elements are also text nodes.
// previousElementSibling returns the previous element (not text and comment nodes).
//you can not access 3rd sibling next or previous, we nede to access step by step


//tis will give us next sibling on the element we have selected, html ITC
firstlink.nextElementSibling

//this will give us next sibling of next sibling, css in this case
firstlink.nextElementSibling.nextElementSibling

//java script in thsi case
firstlink.nextElementSibling.nextElementSibling.nextElementSibling

// this will return null in this case, as it parent (ptag) ends.
//siblings can be under one parent 
firstlink.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling

//same rules for previous sibling
firstlink.previousSibling