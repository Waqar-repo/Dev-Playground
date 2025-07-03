const evenNumber = [0, 2, 4, 6, 8];
console.log(evenNumber);

//add the element at first index
evenNumber.unshift(-2);
evenNumber.unshift(-4);

console.log(`After using unshift()` + evenNumber);

//remove the element at 1st index unlike pop()
evenNumber.shift();

console.log(`After using shift()` + evenNumber);

console.log('-----------------------------------');

console.log('Use of concate() method');
const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];

// use of concate() method which is used to add two array
// and result goes to new array
console.log(`Array1 ` + array1);
console.log(`Array2 ` + array2);
const result = array1.concat(array2);
console.log(`array1.concat(array2) results  ` + result);
result.shift();
console.log(result);
result.unshift(1);
console.log(result);
const array3 = [11, 12, 13, 14, 15];
console.log(`Array2 = ` + array3);

console.log(`concate three Arrays ` + array1.concat(array2, array3));

console.log(`chage Array order ` + array2.concat(array3, array1));

console.log('------------------------------------');

// gives us the index of the an element 
console.log(' use of Indexof() Method');

const array4 = [1, 2, 3, 4, 5, 6];
console.log(array4);
console.log(`using indexof(6) = ` + array4.indexOf(6));

const animal = [
  'cat',
  'Dog',
  'monkey',
  'snake',
];
console.log(animal);
console.log('using animal.indexof(monkey)' + animal.indexOf('monkey'));

//incase we have same name or number in a array 
// so it will give us the index of the first element in a array

const animal2 = [
  'cat',
  'Dog',
  'monkey',
  'snake',
  'monkey'
];

console.log(animal2);
console.log('using animal2.indexof(monkey)' + animal2.indexOf('monkey'));

console.log('---------------------------------------');
//it just checkl if certain object is in an array
console.log('includes()');

console.log(animal);
const isIncluded = animal.includes('cat');
console.log(`result of animal.includes('cat') = `+ isIncluded);

console.log('---------------------------------------');
//reverse the orignal array
console.log('reverse()');
const reversable = [
  'cat',
  'Dog',
  'monkey',
  'snake',
];
console.log(reversable);
const isReverse = reversable.reverse()
console.log(isReverse);
console.log(reversable);

const numberEven = [2,4,6,8,10,12,14] 
console.log('before reverse even number');
console.log(numberEven);

console.log(numberEven.reverse());

console.log('before reverse odd number');

const numberOdd = [1,3,5,7,9,11]
console.log(numberOdd);
console.log(numberOdd.reverse());

console.log('---------------------------------------');
console.log('sort()');
//sort() order number or string. sort alphabatically order
//change orignal
const animalSort = ['cat',
  'dog',
  'monkey',
  'snake',
  'elephant',
'tiger',
'cow']

console.log('before array string sort');
  console.log(animalSort);

console.log('after array string sort()');
console.log(animalSort.sort());

console.log('before number  sort()');
const numberSort = [1,3,8,6,4,0,11,13,12,36,67]

console.log(numberSort);

console.log('afrter array number sort()');

console.log(numberSort.sort());

console.log('---------------------------------');
console.log('slice()');

//do not change origal array

const animalSlice = ['cat',
  'dog',
  'monkey',
  'snake',
  'elephant',
'tiger',
'cow']

console.log('before array string slice()');
  console.log(animalSlice);

  console.log('after array string slice()');

  //include start index and end index blut excludes ending index
  //in array
console.log(animalSlice.slice(2,6));

console.log(animalSlice);

console.log('--------------------------------');

console.log('splice()');
//same as slice but it delete from orignal and also give us new array

const animalSplice = ['cat',
  'dog',
  'monkey',
  'snake',
  'elephant',
'tiger',
'cow']

console.log('before array string splice()');
  console.log(animalSplice);

   console.log('after array string splice()');

   //starting index and how many you want to delete
console.log(animalSplice.splice(1,3));
console.log(animalSplice);

// but you can also delete an element from aray and insert a new 
console.log(animalSplice.splice(0,2,'labubu', 'hathi', 'kota'));
console.log(animalSplice);
