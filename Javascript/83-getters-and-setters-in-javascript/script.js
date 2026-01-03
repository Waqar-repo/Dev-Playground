
// const user = {
//     firstName: 'Waqar',
//     lastName: 'Ahmad',
// get fullName(){
//     // console.log('get');
//     return `${user.firstName} ${user.lastName}`
// },

// // set full name we can set full name of an object
// set fullName(value){
// // console.log(value);
// // const splitted = value.split(' ') this works
// // this.firstName = splitted[0]
// // this.lastName = splitted[1]

// // but we can destructure
// const [a,b] = value.split(' ')
// this.firstName = a
// this.lastName = b

// }
// }


// console.log(user.fullName());
// user.fullName = 'Sahil' //we can not set this 

// console.log(user.fullName);// if we use get keyword before a function then we dont need to parentheses to call it

// user.fullName = 'Sahil Ahmad'


//practice
// class CreateUser {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//   }

//   getBirthYear() {
//     return new Date().getFullYear() - this.age
//   }

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
//   set fullName(value){
//     const [a,b,c] = value.split(' ')
//     this.firstName = a
//     this.lastName = b
//     this.age = c
//   } 
// }

// const user1 = new CreateUser('Waqar', 'Ahmad', 32)
// const user2 = new CreateUser('Sahil', 'Waqar', 72)

// practice

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  set fullName(value) {
    const [a,b] = value.split(' ')
    this.firstName = a
    this.lastName = b
  }

  get birthYear() {
    return new Date().getFullYear() - this.age
  }

  set age(value) {
    if(value < 0){
        console.log('wrong age');
        return
    }
    else{
        
        this._age = value
    }
  }

  get age() {
    return this._age
  }

  getProfile() {
    return `Name :${this.firstName} ${this.lastName}
Age: ${this.age}
Birth Year: ${this.birthYear}`;
  }
}

// Create users here
const users = [
  new User('Waqar', 'Ahmad', 32),
  new User('Sahil', 'Waqar', 22),
]

// Loop and display profiles
users.forEach(user =>{
    console.log(user.getProfile());
})