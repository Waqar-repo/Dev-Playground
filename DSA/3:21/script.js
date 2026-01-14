/*
Print Right-Angled Star Triangle

Input: Rows = 5

Output:

*
**
***
****
*****
✨ Teaches nested loops and increasing sequence printing. */

// const row = 5

// for(let i = 1; i <= row; i++){
//     let line = ""
//     for(let j = 1; j<= i; j++){
//         line+="*"
//     }
//     console.log(line);
// }

/*

Print Inverted Right-Angled Triangle

Input: Rows = 5

Output:

*****
****
***
**
*
✨ Reinforces decreasing nested loop structure.

*/

// const row = 5;
// for(let i = row; i >0;i--){
//     let line = ""
//     for(let k = 1;k<=i;k++){
//         line+="*"
//     }
//     console.log(line);

// }



/*

Print Pyramid Pattern

Input: Rows = 5

Output:

    *
   ***
  *****
 *******
*********
✨ Teaches alignment using spaces and nested loops.

*/

// const row = 5;

// for(let i = 1; i <= row; i++){

// let line = ""
// let space = " "
//  for (let k = 1; k <= row - i; k++){
// space+= " "

//  }


// for(let j = 1; j<= i * 2 - 1; j++){
//     line+="*"

// }
// const final = space+line
// console.log(final);
// }


// const row = 5

// for(let i = 1; i <= 2* row -1; i+=2){
//     let line = ""
//     let currentRow = (i+1)/2

//     for(let j = 1; j<= row + currentRow - 1; j++){
//       if(j<=row-currentRow){
         
//         line+=" "
//       }
//       else
//       line+="*"
//     }
//     console.log(line);
// }





/*


Print Inverted Pyramid Pattern

Input: Rows = 5

Output:

*********
 *******
  *****
   ***
    *

*/

// const row = 5

// for(let i = row; i > 0; i--){

// let line = ""
// let space = ""

// for(let k = 1; k <= row - i ;k++){
//     space+= " "
// }

// for(let j = 1; j <= i* 2 - 1; j++ ){
// line+="*"
// }

// console.log(space+line)
// }



/*

Print Hollow Square Pattern

Input: Rows = 5

Output:

*****
*   *
*   *
*   *
*****



*/

// const row = 5

// for(let i = 1; i <=row; i++){
  
//     let line = ""
//     let space = ""
    
//     for(let j = 1; j <= row;j++ ){

//    if(i === 1 || i === row || j ===1 || j === row )
//    {
//         line+="*"
//    }  

//      else{
//         line+= " "
//     }

// }
// console.log(line); 
// }






/*

Print Hollow Pyramid Pattern

Input: Rows = 5

Output:

    *
   * *
  *   *
 *     *
*********



*/

const row = 5

for(let i = 1; i <= 2* row -1; i+=2){
    let line = ""
    let currentRow = (i+1)/2

    for(let j = 1; j<= row + currentRow - 1; j++){
      if(j<=row-currentRow || j > row - currentRow +1 && j < row + currentRow - 1 && i !== 2* row -1){
         
        line+=" "
      }
      else
      line+="*"
    }
    console.log(line);
}
