
import { usersData, myName,shahar} from "./usersData.js"; //import veriable name and usersData

// this will import all export from file as all file. 
import * as allFiles from './usersData.js'

// import  productsData , {getFirstProduct} from "./productsData.js";//import a default export and name import function

import  productsData  from "./productsData.js"

import {getFirstProduct} from "./productsData.js"  //name import a function

/*Before ES6 (2015), JavaScript had no built-in module system. That caused several major issues:
Global namespace pollution
Every script file loaded in <script> tags would share the same global scope.
One script could accidentally overwrite another’s variable or function.

ES6 introduced native modules — a standardized way for JavaScript to import and export code.
Goals:
Make code modular, maintainable, and reusable
Avoid polluting the global scope

automatically adds deffer strict mode
variable etc will in module scope not in global/script scope even variable defined globally
*/


console.log(usersData);
console.log(myName);
console.log(shahar);

console.log(productsData);
console.log(getFirstProduct());

//how to use import * as allFiles from './usersData.js'

console.log(allFiles.shahar);
console.log(allFiles.usersData);
console.log(allFiles);
console.log(allFiles.default()); //default export will not have name when we import * it will be named as default


//type module will make this variable in module scope not global/script
const user = 'NexaBot'
console.log(user);