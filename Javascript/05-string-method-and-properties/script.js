const message = "Hello World!"
console.log(`accessing each index explicitly ` + message[0])
console.log(`accessing each index explicitly ` + message[1])
console.log(`accessing each index explicitly ` + message[2])
console.log(`accessing each index explicitly ` + message[3])
console.log(`accessing each index explicitly ` + message[4])

const uselessMessage = "   Hi, I am Waqar.   "

// Method chaining means calling multiple methods on the same object, one after another, usually in a single expression
const finalMessageLowercase = uselessMessage.trim().toLowerCase()
const finalMessage = uselessMessage.trim()
console.log(`This is final Message (${finalMessage})`)

//There is only one property that exists.Property
console.log(` with length property ` + message.length)
 // Methods (Without Argument)
console.log(`With upper case method ` +message.toUpperCase())
console.log(`With lower case method ` +message.toLowerCase())
console.log(`normal text without any method ${message}`)
console.log(`starting trim ${uselessMessage.trimStart()}`)
console.log(`ending trim ${uselessMessage.trimEnd()}`)
console.log(`just trim ${uselessMessage.trim()}`)

//Methods (With Argument)
//performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate
const trueOrNot = finalMessage.includes('Hi')
console.log(`check if you have enter correct letter  ${trueOrNot}`)
//just Playing
// const sameValue = prompt('Enter Your name')
// const trueOrNot = finalMessage.includes(sameValue)
// alert(trueOrNot)

//indexof to check the index of the string or number. -1 return if not matching
console.log(finalMessage.indexOf('r'))

// replace() = 1st argument - the old substring we want to replace. 2nd argument - new substring which will replace the old string
const replacedMessage = finalMessage.replace('Hi', 'Hello G')
console.log(`Replaced Hi to Hello G using replace() method(`+replacedMessage)

// replace will change only the first word it will find in a string
//replaceall() will replace all the word in a string
const replacedMessageAll = finalMessage.replaceAll('a', 'A')
console.log(`Using replacall() methd and turned all a into A (${replacedMessageAll})`)


//concat() just combined two string
const conCatMessage = message.concat(', ' ,finalMessage);
console.log(conCatMessage)


//padstart and pad end allow for formatting a string by adding padding characters at the start or the end

const lastFourDigits = '6789'
console.log(lastFourDigits.padStart(9, '*'))
console.log(lastFourDigits.padEnd(9, '*'))


//The charAt() method returns the character at the specified index in a string.

console.log(`using charAt() ` + finalMessage.charAt(7))

//charCodeAt give us asci code of the charactor

// let asciCheck = prompt('enter number')
let asciCheck = '9'
let positionCheck = finalMessage.charAt(asciCheck)
console.log(`using charcodeAt() and  asci of ${positionCheck} is ` + finalMessage.charCodeAt(asciCheck))
// alert(`using charcodeAt() and  asci of ${positionCheck} is ` + finalMessage.charCodeAt(asciCheck))

//  the split() method allows you to split the string into an array of substrings based on a given pattern
console.log(finalMessage.split())
// what every character you pass in argument the string will split from there into array 
console.log(`split(' ')`+ ' ' +finalMessage.split(' '))