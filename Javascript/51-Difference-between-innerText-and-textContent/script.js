//difference between innertext , innerhtml and text content

//we only see what is displayed in our browser in inner text

//text content we see what we writen in our code (html code) new line extra space etc, whether it is visible on the browser or not

//innerHTMl we see all html with all tags style etc and modify it 


//innerText below

//paragraph.innerText
//'Frontend development is the development of the graphical user
//  interface of a website, through the use of HTML, CSS, and JavaScript,
//  so that users can view and interact with that website.'


//textContent below

//paragraph.textContent
//'\n      Frontend     development is the development of the
// \n      graphical user interface\n      of a website, through the use of
// \n      HTML,\n      CSS, and
// \n      JavaScript, so that users can view and interact with that website.\n    '

//innerhtml below

//paragraph.innerHTML
//'\n      <b>Frontend     development</b> is the development of the\n      
// <a href="https://en.wikipedia.org/wiki/Graphical_user_interface" target="_blank" 
// title="Graphical user interface">graphical user interface</a>\n      of a website,
//  through the use of\n      
// <a target="_blank" href="https://en.wikipedia.org/wiki/HTML">HTML</a>,\n     
//  <a target="_blank" href="https://en.wikipedia.org/wiki/CSS">CSS</a>, and\n  
//     <a target="_blank" href="https://en.wikipedia.org/wiki/JavaScript">JavaScript</a>, 
// so that users can view and interact with that website.\n    '

// so in short 

const paragraph = document.querySelector('p')
// console.log(paragraph.innerHTML);

// paragraph.innerHTML = '<h4>hi</h4>'

paragraph.innerText

paragraph.textContent

const h1 = document.querySelector('h1')