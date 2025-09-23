//there are three kind of keyboard event
//keyup 
//keydown
//keypress
//we can apply keyboard event on any element,but it should be on focus

const h1 = document.querySelector('h1')
const input = document.querySelector('input')
//keypress
//if element is not focusable like h1, to focus it,
//  we have to give tabindex (tabindex="0">)

//usually we usually do that on windows
//keypress count key keyup and key down

// window.addEventListener('keypress', (e) => {
    
//     console.log('Key code :',e.code);
//     console.log('value :',e.key);
//     console.log(e.charCode);
  
// })

// h1.addEventListener('keypress', (e) => {
//     console.log(e.key);
// })

// input.addEventListener('keypress', (e) => {
//     console.log(e.key);
// })


//keyup only fired when key leave the key 
// it will also fire if we press shift,alt f5 etc unlike keypress
// window.addEventListener('keyup', (e) => {
//     console.log(e);
//    console.log('Key code :',e.code);
//     console.log('value :',e.key);
//     console.log(e.charCode);
  
// })



//keydown
//it only fires when we press any key
// it will also fire if we press shift,alt f5 etc unlike keypress
window.addEventListener('keydown', (e) => {
    console.log(e);
   console.log('Key code :',e.code);
    console.log('value :',e.key);
    console.log(e.charCode);
  
})



//practice

/* 
Mini Coding Challenges
Challenge 1: Detect Enter key to submit

 When the user types inside an input and presses Enter, display the input value inside a <p> tag below it.
const inputBox = document.querySelector('input');
const output = document.querySelector('#output');
*/

// inputBox.addEventListener('keydown', (event) => {
//   let newarr = ''
// if(event.code == 'Enter'){
//    newarr += inputBox.value

// output.innerHTML = newarr
// }

// });


// Challenge 2: Keyboard Shortcuts

 /* If the user presses Ctrl + S, show an alert saying "Save triggered!".
If the user presses Ctrl + D, show "Download triggered!". */


// const inputBox = document.querySelector('input');
// const output = document.querySelector('#output');

// window.addEventListener('keydown', (event) => {
//    if(event.ctrlKey && event.key.toLowerCase()=== 's')
//    {
//     event.preventDefault();
//    console.log('Save triggered!')
//    }
//    else if (event.ctrlKey && event.key.toLowerCase() === 'd')
//    {
//     event.preventDefault();
// console.log('download triggered!')
//    }
// });
