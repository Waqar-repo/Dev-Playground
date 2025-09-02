
//we give attributes in html and we give attributes in <h1 class="css-image"> opening side
//1st is the tag name(h1), other than that, whatever we write for example class="css-image
//<h1 class="css-image"> so here it is h1 opening tag, class is kind of attribute and css-image is value

//we can give any attribute, hello = 'world' is one example

//we can also use self made attributes in css and style them too

// but these are not valid attributes which is defined in html specification like class, id href etc

const h1 = document.querySelector('h1')
const paragraph = document.querySelector('p')

// console.log(paragraph.innerHTML);

// paragraph.innerHTML = '<h4>Hiii</h4>'

function changeclr (){
    let a = document.querySelector('[nexabot="waqar"]')
    a.innerText = 'Fucntion'
}

//how to access attribute
//this code select attribute with the value of waqar. go to its attributes and select nexabot
document.querySelector('[nexabot="waqar"]').attributes.nexabot

document.querySelector('[nexabot="waqar"]').attributes.nexabot.value // getting the value against attribute

document.querySelector('[nexabot="waqar"]').getAttribute('nexabot')

//in this case we check if we have more attribute on an element, we have hello attribute
//so we getting value of hello attribute
document.querySelector('[nexabot]').getAttribute('hello')

// here weare selecting h1 header
document.querySelector('h1')

//this will give us all the class name in string format from h1 tag
document.querySelector('h1').getAttribute('class')



//how to set attribute

//this is selecting h1 tag and set/write new attribute name title and its value hello world
//you have to give value or it will give you an error
document.querySelector('h1').setAttribute('title','hello world')

//how to set id

document.querySelector('h1').setAttribute('id','heading')

//you can set java script defined attribute directly

document.querySelector('h1').id='newheading'






//practice

document.querySelector('ul').setAttribute('name','border')
const ul = document.getElementsByName('border')
ul[0].style.backgroundColor='brown'

//changing href of an a tag inj tw0o ways

document.getElementsByTagName('a')[0].href='https://www.google.com/'

const a = document.getElementsByTagName('a')
a[0].href='https://www.google.com/'



