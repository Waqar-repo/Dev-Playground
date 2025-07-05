const nameNumber = [
  ['Waqar', 75],
  ['Ahmad', 90],
  ['hina', 0],
];
console.log(nameNumber);
console.log(nameNumber[0][1]);
console.log(nameNumber[1][0]);
nameNumber[0][1] = 95;
console.log(nameNumber);

nameNumber[1][4] = 'test';
nameNumber[2][1] = 99;
console.log(nameNumber);

//test tiktac toe

const ticTakToe = [
  ['X', null, null],
  [null, null, 'O'],
  ['O', null, 'X'],
];


//creating objects in a array
const multiArrayObject = [
  ['waqar', 'ahmad'],
  ['glenrothes'],
  ['fife'],
  { pata: '29 laxford road' },
];
console.log(multiArrayObject);
//accessing object
console.log(multiArrayObject[3]);

//access object value
console.log(multiArrayObject[3].pata);

//changing object > pata value 
multiArrayObject[3].pata = '29 Laxford Road, Glenrothes'
console.log(multiArrayObject[3].pata);
console.log(multiArrayObject[3]);
