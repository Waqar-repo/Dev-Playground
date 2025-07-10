console.log('Program started');

//in for loop you can declare a variable inside
//and pass condition 

// debugger



for (let i = 1; i <=4; i++){
    console.log(i);
}

console.log('Program Ended');


//assignment

const friendsName = ['Waqar', 'Asad', 'Raza', 'Rana', 'Humza', 'Hina'];

for(ii = 0; ii < friendsName.length; ii++){

    console.log(friendsName[ii]);

}
console.log('-----');
console.log('sum of 1 to 50');
//sum of 1 to 50 
let sum = 0

for(let iii = 1; iii <= 50; iii++){
    sum+=iii
}

console.log(sum);

console.log('-----');
console.log('even number from 1 to 100');
 // even odd number

 for(let iv = 0; iv <= 100; iv++){
    if(iv % 2 == 0){
        console.log(iv);
        
    }

}

console.log('-----');
console.log('odd number from 1 to 100');

for(let v = 0 ; v <= 100; v++){
    if(v % 2 !== 0){
        console.log(v);
    }
}

// multiplication table of a number 7
console.log('-------');
console.log('multiplication table of a number 7');

for(let vi = 1; vi <= 10; vi++){
    let num = 0
    num+=vi
    console.log(`7 x ${vi} = ${num * 7}`);
}

console.log('----------');
//Print the square of numbers from 1 to 10.
console.log('square of numbers from 1 to 10.');

for(vii = 1; vii <= 10; vii++){
    console.log(`square of ${vii} is ${vii * vii}`);
}

let star1 = ''
for(let viii = 1; viii <=5; viii ++){
    star1 = '*'.repeat(viii)
    console.log(star1);
}


console.log('----------');
//Reverse a string using a for loop
console.log('//Reverse a string using a for loop');
let rev = ''
let str = ' Hello'
for(let n = str.length - 1; n >= 0; n--){
    rev +=str[n]
}
    console.log(rev);