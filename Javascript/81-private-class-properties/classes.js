/* how to create class */

class CreateUser{

    // in this way we can create private class field 
     #age
    //this is constructor method we can put value inside here
    //constructor method automatically runs when we call it using new keyword
    constructor(a,b,c){
   
        this.firstName = a;
        this.lastName = b;
        this.#age = c;
    }

    //public class field
    #hi = 'Hello'

    // we dont have to do CreateUser.prototype.getBirthYear in class. we simply declare a fucntion 
    // which automatically goes into prototype of createuser object, created by new CreateUser
getBirthYear(){
    console.log(this.#hi);
    //to access a private function(getFullName) call private function in opther fucntion in same class
    console.log(this.#getFullName());
      return new Date().getFullYear() - this.#age
  
  }
  #getFullName(){
    console.log(this);
    return this.firstName + ' ' + this.lastName
}
    
}
const user1 = new CreateUser('Waqar', 'Ahmad', 32)
const user2 = new CreateUser('Sahil', 'Ahmad', 72)
user1.age = 55



/* unlike fucntions, in class we use above method */

// CreateUser.prototype.getBirthYear = function (){
//     console.log(this);
//       return new Date().getFullYear() - this.age
  
//   }
// CreateUser.prototype.getFullName = function(){
//     return this.firstName + ' ' + this.lastName
// }


//create private property in object
const a = {
    name: 'Waqar',
    '#age': 34,

}
