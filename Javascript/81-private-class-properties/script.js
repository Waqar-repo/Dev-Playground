
/*in funtion below getAgeYear, every time we create a user,
getAgeYear saves in memory every time . we can fix this using two methods.  */



// function createUser(firstName, lastName, age) {
//   const user = {
//     firstName: firstName,
//     lastName: lastName,
//     age:age,
//     // getBirthYear
//     getBirthYear : createUser.commonMethods.getBirthYear
//   }
//   return user
// }


/*1st method
put fucntion as global variable  and also put fucntion in object and it will save in memory
once but every object would have its acces*/

// function getBirthYear(){
  //   console.log(this);
  //     return new Date().getFullYear() - this.age
  
  // }
  
  // 2nd method
  // createUser.commonMethods = {
    
  //   getBirthYear(){
    
  //   console.log(this);
  //     return new Date().getFullYear() - this.age
  
  // }
  // }


  // better way to do same thing
  function CreateUser(firstName, lastName, age) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
}
CreateUser.prototype.getBirthYear = function (){
    console.log(this);
      return new Date().getFullYear() - this.age
  
  }
CreateUser.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName
}


const user1 = new CreateUser('Waqar', 'Ahmad', 32)
const user2 = new CreateUser('Sahil', 'Ahmad', 72)

