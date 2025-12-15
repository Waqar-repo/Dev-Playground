

/*OOP is a way to write a program. we think everything as a object.
we make an object and keep data inside the object as properties
 instead of defining a veriable globally. variable, logic and data inside an objected
 and this way called OOP. 

 other way to program in java script. functional and procedural programming
 
 Framework 
 Angular is based on OOP
 React used to be OOP but now shifted to functional programing


Four Pillars of Object Oriented Programming

Encapsulation  >> Combines data and behavior into one object.hiding the internal details 
and controlling access to the data through public methods/function.also called Data Hiding 

Abstraction    >> hiding complex internal implementation details and showing only 
the essential features of an object, simplifying its use and reducing complexity

Inheritance    >> a core mechanism where a new class (child/subclass) derives properties
 and behaviors (attributes/methods) from an existing class (parent/superclass

Polymorphism   >> polymorphism describes the concept that you can access objects
 of different types through the same interface. 
 Each type can provide its own independent implementation of this interface.
*/

//example of procedural programming
const user1 = {
  firstName: 'Waqar',
  lastName: 'Ahmad',
  age: 25
}

// getting year of birth
function getAgeYear1(age){
    return new Date().getFullYear() - age
}

//example of OOP

const user2 = {
  firstName: 'Waqar',
  lastName: 'Ahmad',
  age: 25,
//   getAgeYear2: function (){
//     return new Date().getFullYear() - user2.age
// }
  getAgeYear2(){  // new syntax
    return new Date().getFullYear() - user2.age
},
}

/* A factory function is a function that returns a new object.
instead of making objects manually. like we did above

but the issue here is we have same function in both objects. 
constructor function will fix this issue
*/

function createUser(firstName, lastName, age){
    const user = {
          firstName: firstName,
          lastName: lastName,
          age: age,
          getAgeYear2(){  // new syntax
          return new Date().getFullYear() - user.age
},
    }
    return user
}
const user3 = createUser('waqar', 'ahmad', 25)
const user4 = createUser('Hina', 'Razzaq', 27)
