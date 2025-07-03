console.log('pop()');
console.log('before pop()');
const numberPop = [ 1,2,3,4,5,6,7,8,9]
console.log(numberPop);
console.log('after pop()');
console.log(numberPop);

console.log(numberPop.pop());


console.log('------------------------------');
console.log('push()');

const numberPush = [ 1,2,3,4,5,6,7,8,9]

console.log(numberPush);

numberPush.push(10);
console.log(numberPush);
numberPush.push(14)
console.log(numberPush)
numberPush.push('waqar')
console.log(numberPush);

console.log('--------------------------');

console.log('shift');
const numbershift = [ 1,2,3,4,5,6,7,8,9]
console.log(numbershift.shift());
console.log(numbershift);
console.log(numbershift.shift());
console.log(numbershift);

console.log('---------------------------------');

console.log('unshift');

const numberUnshift = [ 1,2,3,4,5,6,7,8,9]

numberUnshift.unshift(-2)
console.log(numberUnshift);
numberUnshift.unshift('waqar')
console.log(numberUnshift);


console.log('-----------------');
console.log('concat');

const numberConcat1 = [ 1,2,3,4,5,6,7,8,9]
const numberConcat2 = [ 10,11,12,13,14,15,16]
console.log(numberConcat1.concat(numberConcat2));
console.log('make new array ');

const stringConcat1 = ['waqar', 'ahmad', 'hina', 'zeeshan']
const stringConcat2 = ['vizz', 'ahmaaad', 'hrrna', 'shan']
console.log(stringConcat1.concat(stringConcat2));
const newString = numberConcat1.concat('', stringConcat1);
console.log(newString);
console.log(typeof(newString));

console.log('-----------------');
console.log('indexOf()');

const numberIndexOf = [ 1,2,3,4,5,6,7,8,9]
console.log(numberIndexOf);
console.log(numberIndexOf.indexOf(8));

const stringIndexOf = ['waqar', 'ahmad', 'hina', 'zeeshan']
console.log(stringIndexOf);
console.log(stringIndexOf.indexOf('hina'));


console.log('-------------------');
console.log('includes()');

const numberIncludes = [ 1,2,3,4,5,6,7,8,9]
console.log(numberIncludes);
const isThere = numberIncludes.includes(9)
console.log(isThere);
console.log(numberIncludes.indexOf(9));

console.log('-------------------');
console.log('reverse()');

const numberReverse = [ 1,2,3,4,5,6,7,8,9]
console.log(numberReverse);
numberReverse.reverse()
const numberReverse2 = [ 1,2,3,4,5,6,7,8,9,8,5]
console.log(numberReverse2);
numberReverse2.reverse()

console.log('----------------------------');

console.log('sort()');
const numberSort = [ 5,7,9,3,2,1,6,]
const numberSort2 = [ 5,7,9,11,12,14,3,2,23,34,56,1,6,]

const stringSort = ['waqar', 'ahmad', 'hina', 'zeeshan' ]

console.log(numberSort);
numberSort.sort()
console.log(numberSort);

console.log(numberSort2);
numberSort2.sort()
console.log(numberSort2);

console.log(stringSort);
console.log(stringSort.sort());

console.log('-----------------------');

console.log('slice()');

const numberSlice = [ 5,7,9,3,2,1,6,]
const stringSlice = ['waqar', 'ahmad', 'hina', 'zeeshan' ]

console.log(numberSlice);
console.log(numberSlice.slice(1,4));
console.log(numberSlice);



console.log(stringSlice);
console.log(stringSlice.slice(0,1));
console.log(stringSlice);

console.log('----------------------------');

console.log('splice()');

const numberSplice = [ 1,2,3,4,5,6,7,8,9]
const stringSplice = ['waqar', 'ahmad', 'hina', 'zeeshan' ]

console.log(numberSplice);
numberSplice.splice(1,1,3)
console.log(numberSplice);

console.log(stringSplice);
console.log(stringSplice.splice(2,2,'maham', 'hina'));
console.log(stringSplice);