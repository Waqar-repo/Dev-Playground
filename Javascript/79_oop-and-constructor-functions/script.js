
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
  function createUser(firstName, lastName, age) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
}
createUser.prototype.getBirthYear = function (){
    console.log(this);
      return new Date().getFullYear() - this.age
  
  }



const user1 = new createUser('Waqar', 'Ahmad', 32)
const user2 = new createUser('Sahil', 'Ahmad', 72)


//Practice

  function Product(brand,dis,price){
this.brand = brand
this.description = dis
this.price = price
  }

 async function GetProduct() {
  const res = await fetch('https://dummyjson.com/products/1')
  // console.log(res);
  const data = await res.json()
  // console.log(data);
  const brand = data.brand
const Product1 = new Product(data.brand,data.description,data.price)
console.log(Product1);

 }
GetProduct()

