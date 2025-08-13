// BOM browser Object Model
// to interact with browser, browser vendors have given us object model
//  which called brower object model,whole thing called windwos object model

//browser gives us window object model which consist of features

// it is an object . normally object is in curley brackets and key and value pairs
//so we can interact with brower

//windows.location or just location> 
//location.reload() is a fucntion > reload the page using javascript
//location.reload() fucntion 
setTimeout(()=>{
    location.reload //remove braces not to reload every time
}, 5000)

console.log('hi');

//location.href
// we can change url using code below 
//it stay on same domain/server and after slashing it go to the given string

// window.location.href='script'

// but if we pass whole url https etc then whole location would change
//in short we go to different website code below

// setTimeout(() => {
//     location.href='https://developer.mozilla.org/en-US/'
// }, 5000);





//window.location.replace
//once we visit index.html and go to home.html,
//it will stop us to visit index.html.
//usually done this for login so user wont go back to login once loged in

// location.replace("/home.html")





// window.history 
//imagine you open few website and you can navigate through
//those pages using forward and backword arrow
//but you can do the same using java script

// setTimeout(() => {
//     history.back()
// }, 4000);

// setTimeout(() => {
//     history.forward()
// }, 5000);

//history.go()would take you to the page directly
//suppose we have 4 page opned. history.go(-3) would take you to 1st page
//history.go(+3) would take you the last page. number changes with the respect to page opened

//history.go(+3)
// history.go(-3)
//history.go(+2)




// window.innerHeight and innerWidth gives you hight and width of viewport
//window.outerHeight and window.outerWidth gives over all height and width of browser
//including bar,bookmark console etc 





// window.open

// so open new tab in a browser and returns a windows object
//every tab has different windows object.
//if we do not pass anything inside it will open blank tab

setTimeout(() => {
    // window.open()
}, 5000);

//but if we pass someting , it will add slash and add it to afterword. 
// but on same domain unless you put url with (https) then it would go to that website in new tab

setTimeout(() => {
    // window.open('script.js')
}, 5000);

setTimeout(() => {
    // window.open('https://developer.mozilla.org/en-US/')
}, 5000);

// you can pass another parameter other than url
//2nd parameter is the value of name which is in windows object





//window.close
// can close the tab with window.close() 
// but only those tab which was opened by using javascript window.open()
//opened tab isng open()
// window.open('https://developer.mozilla.org/en-US/')
//now go to console of this tab and use window.close and it will close the tab




//resizeTo()
//the height and width you give the size of the window increase
//there are some condition, 1: tab mush be opened by using window.open()
//2:when we open windows using window.open, we had to tell we need a resizeable window/tab
//3: to tell, we need a 3rd argument when open a tab using window.open

//example
//window.open('https://developer.mozilla.org/en-US/','','resizeable')
//then you can do "resizeTo(600,500)" 1st is width and 2nd is height




//resizeBy()
///The Window.resizeBy() method resizes the current window by a specified amount.
// resizeBy(xDelta, yDelta)
// rules same as resizeto()
//This method resizes the window relative to its current size
//xDelta The number of pixels to grow the window horizontally.

//yDelta The number of pixels to grow the window vertically.

//window.open('https://developer.mozilla.org/en-US/','','resizeable')

//resizeBy(400, 300) so it will add x and y pixel to current size

//resizeBy(200, 100) this will add more pixel to x and y to its current size

//resizeTo(-600,-500) it will decrease the size from the current size with the number of nagative pixel






// moveTo()

//to move the brower tab with java script method moveTo()
//The moveTo() method of the Window interface moves the current window to the specified coordinates.
//but same rules applied

// moveTo(x, y)
// x The horizontal coordinate to be moved to.
// y The vertical coordinate to be moved to.

// moveTo(0, 0)
// moveTo(10, 0)
// Calling it again with the same values won’t move you — because you’re already there




//moveBy() method of the Window interface moves the current window by a specified amount.
// moveBy(deltaX, deltaY)
// deltaX The amount of pixels to move the window horizontally. Positive values are to the right, while negative values are to the left.
// deltaY The amount of pixels to move the window vertically. Positive values are down, while negative values are up.

// moveBy(10,200) 
// If you call it again with the same values, you’ll move another  down





//The scrollBy() method of the Element interface scrolls an element by the given amount.

// scrollBy(xCoord, yCoord)

// xCoord The horizontal pixel value that you want to scroll by.
// yCoord The vertical pixel value that you want to scroll by.

// window.scrollBy(0, 100); // Scrolls 100px down from current position
// If you call it again with the same values, you’ll move another  down




//The scrollTo() method of the Element interface scrolls to a particular set of coordinates inside a given element.

// scrollTo(xCoord, yCoord)
// xCoord The pixel along the horizontal axis of the element that you want displayed in the upper left.
// yCoord The pixel along the vertical axis of the element that you want displayed in the upper left.

// scrollTo(0,1100)

//Calling it again with the same values won’t move you — because you’re already there





// The Window.scroll() method scrolls the window to a particular place in the document.
// Meaning: This is a more modern, flexible method that works like scrollTo(), but supports extra options (like smooth scrolling).
// scroll(xCoord, yCoord)
// xCoord The pixel along the horizontal axis of the document that you want displayed in the upper left.
// yCoord The pixel along the vertical axis of the document that you want displayed in the upper left.

// scroll(0,1200)

// Put the 100th vertical pixel at the top of the window
//window.scroll(0, 100);

// Using options:
// window.scroll({
//   top: 100,
//   left: 100,
//   behavior: "smooth",
// });

//Calling it again with the same values won’t move you — because you’re already there





//print() Opens the print dialog to print the current document.



//document document Object Model
//it is small part of browser object model but it is vert vast itself

//it is not core javascript but is part of web api

// web api : to interact with browser using java script this method is web api



