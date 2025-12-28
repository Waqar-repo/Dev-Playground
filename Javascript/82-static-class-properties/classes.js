

class CreateUser{

    //this is constructor method we can put value inside here
    //constructor method automatically runs when we call it using new keyword
    constructor(a,b,c){
        this.firstName = a;
        this.lastName = b;
        this.age = c;
    }

// this is how we declare static property. and you can not access this using user1.hi
//but you can access using CreateUser.hi, object does not have any access on it but class does
//static does not inherent to its object. properties,methods and fucntion inside of prototype of the 
// class will inherent to its objects.

static hi = 'Hello'


//static block runs automatically

/*
1 Static properties and methods belong to the class itself, not to instances of the class.
2 To declare a static property or method, use the static keyword.
3 To access a static property or call a static method, use the class name followed by the dot operator.
 */
static {
    console.log('static block');
    this.name1 = 'Waqar'

    //this is pointing to the class itself
    console.log(this);
    this.getBirthYear = function(){
    console.log(this);
      return new Date().getFullYear() - this.age
  
  }
}
    // we dont have to do CreateUser.prototype.getBirthYear in class. we simply declare a fucntion 
    // which automatically goes into prototype of createuser object, created by new CreateUser

// getBirthYear(){
//     console.log(this);
//       return new Date().getFullYear() - this.age
  
//   }
  static getFullName(){
    console.log(this);
    return this.firstName + ' ' + this.lastName
}
    
}
const user1 = new CreateUser('Waqar', 'Ahmad', 32)
const user2 = new CreateUser('Sahil', 'Ahmad', 72)


// To access a static property or call a static method, use the class name followed by the dot operator.

CreateUser.name1 = 'Ahmad'
console.log(CreateUser.name1);