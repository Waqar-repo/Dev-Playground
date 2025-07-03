const fruitsCollection = [
  'Apple',
  'Banana',
  'Grapes',
  'Dates',
  //   23,
  //   true,
  //   false,
  //   null,
  //   undefined,
  //   {name: 'Waqar', age: 23},
  //   [2,3]
];

//  fruitsCollection[2] = 'Mango'

fruitsCollection[4] = 'Mango';

const rainBowColors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
];

//you can add new string or fruit at the end of the array using this
fruitsCollection[fruitsCollection.length] = 'Khajoor'

//you can add new string or fruit at the end of the array
// using push() method
fruitsCollection.push('Amrood')
fruitsCollection.push('Ananas', 'Kiwi', 'Dragon Fruit')


// to remove item from array .pop() remove last element

fruitsCollection.pop()

//you can not add key value pair directly in array 
//for that you can use newArray.firstName =  'Waqar'
const newArray = []
newArray.firstName =  'Waqar'

const newObject = {}
