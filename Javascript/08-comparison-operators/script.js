//== equal to (equality) implicit conversion (automatic)
const user1Age = '18';
const user2Age = 18 ;

console.log(`using == equlity operator ${user1Age == user2Age} and type of user1Age is  ${typeof(user1Age)} and type of user2Age is   ${typeof(user2Age)}`);

//=== equal value and equal type (strict equality) Explicit 
console.log(`using === strict equlity operator ${parseInt(user1Age) === user2Age} and type of user1Age is  ${typeof(user1Age)} and type of user2Age is   ${typeof(user2Age)}`);


// != not equal
const user3Age = 18;
const user4Age = 18;

console.log(` user3Age != user4Age  ${user3Age != user4Age}`);

//!== not equal value or not equal type (strict)
const user5Age = '18';
const user6Age = 18 ;


console.log(` user3Age !== user4Age  ${user5Age !== user6Age}`);

// > greater than
 
const user7Age = 18;
const user8Age = 24;

console.log(` user8Age (28) > user7Age (18)  ${user8Age > user7Age}`);

//< less than
console.log(` user8Age (28) < user7Age (18)  ${user8Age < user7Age}`);



//>= greater than or equal to

const user9Age = 18;
const user10Age = 18;
console.log(` user9Age (18) >= user10Age (18)  ${user9Age >= user10Age}`);

const user11Age = 19;
const user12Age = 18;
console.log(` user9Age (19) >= user10Age (18)  ${user11Age >= user12Age}`);

const user13Age = 17;
const user14Age = 18;
console.log(` user9Age (17) >= user10Age (18)  ${user13Age >= user14Age}`);

//<= less than or equal to


const user15Age = 18;
const user16Age = 18;
console.log(` user15Age (18) <= user16Age (18)  ${user15Age <= user16Age}`);

const user17Age = 19;
const user18Age = 18;
console.log(` user17Age (19) <= user18Age (18)  ${user17Age <= user18Age}`);

const user19Age = 17;
const user20Age = 18;
console.log(` user19Age (17) <= user20Age (18)  ${user19Age <= user20Age}`);