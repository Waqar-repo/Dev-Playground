
/*The optional chaining (?.) operator accesses an object's property or calls a function. 
If the object accessed or function called using this operator is undefined or null, 
the expression short circuits and evaluates to undefined instead of throwing an error. */

const user = {
  firstName: "Waqar",
  lastName: "Ahmad",
  age: 35,
  address: {
    city: 'Fife'
  },
getFullNAme: function(){
    return user.firstName + ' ' + user.lastName
}

}

// console.log(user.address && user.address.city);

console.log(user.address?.city); // common
// different way to get same result
console.log(user.address?.['city'])
// other way 
console.log(user?.getFullNAme?.())

