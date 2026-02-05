Scope CSS in React Component

CSS class names are global and can conflict between components in a react application if we use same class name, even if the CSS file is not directly imported into that component. 
To solve this problem we can make a css file “filename.module.css” to import that css in a component(import styles from ‘filename.module.css’) styles words is not mandatory we can use any word here.
to apply this class on a component, suppose we have a class name in css ( .textSize {font-size:18px} )
<h2 className= {styles.textSize}> hi </h2>
Suppose you want to add multiple css class name on same component,
(<h2 className= {[styles.textSize, styles.test].join(‘ ’)}> hi </h2>)
But we normally use one class name but still there is a way to use more than one class on same element
CSS Modules automatically generate unique class names, so styles are scoped to that component only.
