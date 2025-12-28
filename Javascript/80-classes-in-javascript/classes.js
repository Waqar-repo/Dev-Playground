/* how to create class */

class CreateUser{

    //this is constructor method we can put value inside here
    //constructor method automatically runs when we call it using new keyword
    constructor(a,b,c){
        this.firstName = a;
        this.lastName = b;
        this.age = c;
    }

    // we dont have to do CreateUser.prototype.getBirthYear in class. we simply declare a fucntion 
    // which automatically goes into prototype of createuser object, created by new CreateUser
getBirthYear(){
    console.log(this);
      return new Date().getFullYear() - this.age
  
  }
  getFullName(){
    console.log(this);
    return this.firstName + ' ' + this.lastName
}
    
}
const user1 = new CreateUser('Waqar', 'Ahmad', 32)
const user2 = new CreateUser('Sahil', 'Ahmad', 72)



/* unlike fucntions, in class we use above method */

// CreateUser.prototype.getBirthYear = function (){
//     console.log(this);
//       return new Date().getFullYear() - this.age
  
//   }
// CreateUser.prototype.getFullName = function(){
//     return this.firstName + ' ' + this.lastName
// }

/* Practice */
const ul = document.querySelector('ul')

class Product {
    constructor(brand,des,price){
this.brand = brand;
this.des = des;
this.price = price;
    }
}

async function getProcts() {
    const url = 'https://dummyjson.com/products/1'
    const res = await fetch(url)
    const data = await res.json()
    // console.log(res);
    // console.log(data);

    const product1 = new Product(data.brand,data.description,data.price)
    console.log(product1);
    console.log(typeof product1);

    // const ul1 = document.createElement('li')
    // ul1.innerText = data.brand
    // ul2.innerText = data.description
    // ul3.innerText = data.price

    // ul.appendChild(ul1)
    // ul.appendChild(ul2)
    // ul.appendChild(ul3)
const len = Object.values(product1).length
for(var l in product1){
    console.log(l , product1[l])
}

// Object.values(product1).forEach(value =>{
//     const li = document.createElement('li')
//     li.innerText = value
//     ul.appendChild(li)
// })
for (let key in product1){
    const li = document.createElement('li')
    li.innerText = product1[key]
    ul.appendChild(li)
}
}