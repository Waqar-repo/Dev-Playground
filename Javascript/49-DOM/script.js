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


//object model is created of what ever we write in html, 

//console.dir(document.body.children[0].innerHTML = 'Waqar Ahmad')