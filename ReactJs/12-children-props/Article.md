Children Prop

Normal props are used to pass data from parents component to child component like count, Onclick etc but some times you need to pass content and this content is called children.
You do not have to declare it just 
<MyComponent>
  Something here
</MyComponent>
“Something here” is children. No go to child component and uses children prop and this content will be accessible. You can also wrap an entire component in it. 


1) Component Composition: building bigger components by combining smaller ones, instead of making one huge component.
2) Reusability: Enables the creation of reusable components that accept arbitrary content.
3) Layouts and Wrappers: Useful for creating components that wrap other elements.

You can access the children prop inside a child component by using destructuring. children can be any valid React node, and you can conditionally render children based on logic.
