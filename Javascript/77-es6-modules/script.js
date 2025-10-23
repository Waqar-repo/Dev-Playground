import { usersData, myName,shahar} from "./usersData.js"; //import veriable name and usersData
import  productsData  from "./productsData.js";  // import a default export

/*Before ES6 (2015), JavaScript had no built-in module system. That caused several major issues:
Global namespace pollution
Every script file loaded in <script> tags would share the same global scope.
One script could accidentally overwrite another’s variable or function.

ES6 introduced native modules — a standardized way for JavaScript to import and export code.
Goals:
Make code modular, maintainable, and reusable
Avoid polluting the global scope
*/


console.log(usersData);
console.log(myName);
console.log(shahar);
console.log(productsData);