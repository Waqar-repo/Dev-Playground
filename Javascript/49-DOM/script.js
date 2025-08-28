//so we will work with document object under windows object
//type of document is object but shows it as html
//console.dir(document) to see in key value pairs

//it has other properties, url "this is a url you have accessed to get to this website/webpage"
//other property is all/ shows all the element of web page. such as p tag img tag a tag etc

//important, we see children of this document, if we open,we see html
//if we expand children > html, it will also have children 
// html children has head and body
//head will also has children meta, title, script,  style
// body children h1 hr p img ul etc

// childen has it parent too. you can check parent element

// so every element has corresponding object created, 
// how many childrens and parent also stored in array, ie all connection created

// html parser does this, 
// html parser understand html,check the element,
//  and create the corressponding object, and make the connection among them,
//tree like structure

//object model is created of what ever we write in html, 

//document.children[0].children[1].children[0] here i am accessing h1
//document 1st[0] child is html, html 2nd child [1] is body
//body 1st [0] child is h1 tag

//document.body.children[0] doing same as above but short form


//code below will change the h1 text to waqar ahmad
//innterhtml have the h1 text which can be chnaged using javascript
//document.body.children[0].innerHTML = 'Waqar Ahmad'

//document.body.children[0].innerText = 'Waqar'

//difference between innerText and innerHTML
//innerHTML set html.example document.body.children[0].innerHTML = '<i> Waqar <\i>' 
// now waqar will be written in italic.
//can not do this in innerText

// textContent gets the content of all elements, including <script> and <style> elements. In contrast, innerText only shows "human-readable" elements.
// textContent returns every element in the node. In contrast, innerText is aware of styling and won't return the text of "hidden" elements.

//DOM not only just make objects but give us feature to change it
// it is also called DOM manululation

// changing the background color in java script
function backgroundColor(){
document.body.children[0].style.backgroundColor = 'brown'
}
// chnaging text of h2 to Hello world

function helloWorld(){
document.body.children[2].innerHTML='Hello World'
}
//changing the image using java script
function changeImg(){
document.body.children[4].src = 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8='
}


function changeTwoImg(){
    document.body.children[5].children[2].children[4].src = 'https://media.istockphoto.com/id/471926619/photo/moraine-lake-at-sunrise-banff-national-park-canada.jpg?s=612x612&w=0&k=20&c=mujiCtVk5QA697SD3d8V8BGmd91-8HlxCNHkolEA0Bo='

   document.body.children[5].children[3].children[1].src =' https://img.freepik.com/premium-photo/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass_181624-22807.jpg'


}