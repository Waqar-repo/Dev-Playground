//es6 feature destructuring
// we use it with array,objects,parameters(when we accept parameter in a fucntion)
// it usefull and shorten our code

const colors = ['red', 'green', 'yellow', 'pink', 'black', 'orange', 'white']
// for exmaple we want to extract a color from this array

const color2= colors[1]
//we can do that in above code but image we want to get more color
//we have to repeate same process again adna again
const color3= colors[2]
const color4= colors[3]

// doing same with destructuring
//we are creating an array it is a syntax. 
//colors array's value would go to each variable in respective order [a,b]
// a,b etc are variables  
const [a,b]=colors

// now just imagine you need a value of colors yellow 2nd [2] index
const [,,c] = colors

//1st and 3rd is saved in a1 c1 respective order
const [a1,,c1]=colors

// as we know typeOf array is also object so can do this also
//what we are doing is, what ever value is in index 1 put it in the variable gr
const{1:gr}=colors

const{4:blc,6:wht}=colors

const user = {
  name: 'waqar',
  age: 25,
  address: {
    city: 'Glenrothes',
    county: 'Fife',
  },
}

//old way to get name and age

const age1= user.age
const name1 = user.name

// doing same but using destructuring
// curley bracket object symbol because we are getting object value
    // it check if there is key in user object with the name of key{name} and key{age}
//if yes, it will create a variable and put the value whatever put against that key

// const {name,age} = user

//if you want the veriable name to be username(or anyother name)
// and the value you want to put is against the key name 'waqar' 
//this will do that
const {name:userName,age:userAge} = user

//for nasted objects and want to get one value for exampel address

//code below i am doing two things, getting the value of nested object,
//and giving different name to variable compared to it key.

//also called multi level destructuring
const {address:{city:myCity}} = user
