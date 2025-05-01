const name="Unique"
const repo=50

// console.log(name+repo+"value")    //This syntax is generally not much preferred and not much understandable

console.log(`Hello my name is ${name} and my repo count is ${repo}`)     // `H..d` -> back ticks   // ${xyz} -> string interpolation

const gameName = new String('Hun-gama');    //Another way to declare a string
// console.log(gameName[1])
// console.log(gameName.length)       //for finding the size of the string
// console.log(gameName.toUpperCase())  //to change to UPPER CASE
// console.log(gameName.toLowerCase())  //to change to lower case
// console.log(gameName.charAt(2))      //to find the character at specific index
// console.log(gameName.indexOf('a'))      // to find the index of first occurence of a character in a string

const newString = gameName.substring(0,3)   //it will give the substring starting from index 0 to 2 (3-1)...
// console.log(newString)

const newString1 = gameName.slice(-7,4)    // similar to substring, but here negative can also be given to starting index
// console.log(newString1);


const newString2 = "     Unique  Brain    "
// console.log(newString2)
// console.log(newString2.trim());   //Unique  Brain  // This will ignore the spaces in the starting and the ending of the string

const url="https://uniquebrain.com/unique%20js"
// console.log(url.replace('%20','-'))      //replaces %20 with -

// console.log(url.includes('unique'));     //it checks whether something is present in a string or not and return a boolean

const eg="ab-ac-hi-yz";
// console.log(eg.split('-'))      //it splits the string w.r.t. '-' and returns an array i.e. [ 'ab', 'ac', 'hi', 'yz' ]