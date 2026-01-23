import { user } from "./data.js";
import ReactDOM from 'react-dom/client'
const h2 = <h2>Hello Word</h2>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(h2)

console.log(user);
console.log('Hell');


/*

Parcel is a bundler that automatically configures and runs Babel to transform React JSX into plain JavaScript, 
bundles the application files, and serves them to the browser, 
while ReactDOM is responsible for rendering the React component tree into the browser’s DOM.
,
Parcel runs a Node.js dev server, and it behaves like Live Server — but it’s much more powerful.

Your React + JSX code
        ↓
Parcel (Babel + bundling)
        ↓
Plain JavaScript
        ↓
Browser
        ↓
ReactDOM renders to DOM


*/