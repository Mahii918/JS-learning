let score=33

// console.log(typeof (score))      // it can also be written as ---console.log(typeof score)---    //both are same

let score2="343"
// console.log(typeof (score2))
// console.log(score2)
let valueInNumber=Number(score2)   // this will convert score2 into number
// console.log(typeof valueInNumber)  //number
// console.log(valueInNumber)         //343

let score3="11a"
let valueInNumber2=Number(score3)   // this will convert score3 into number
// console.log(typeof valueInNumber2)  //number
// console.log(valueInNumber2)         //the output will be NaN (i.e. Not a Number) as score3 cannot be converted to number

let s4=null
let num1=Number(s4)    //null gets converted to 0 (in number)
// console.log(num1);

let s5=undefined
let num2=Number(s5)    //Here, NaN is the output
// console.log(num2)

let s6=true
let num3=Number(s6)   //true -> 1 (in number) .....Similarly,  false -> 0 (in number)
// console.log(num3)


//conversion to Boolean

let n1=1
let cond1=Boolean(n1)    //gives true for every number other than 0 (zero)
// console.log(cond1)

let n2="0"
let cond2=Boolean(n2);   //gives true for every string other than empty string
// console.log(cond2)

let n3=""
let cond3=Boolean(n3)    // gives false for empty string
// console.log(cond3)


//Conversion to String
let k1=33;
let s1=String(k1)        // Here, the output is 33, but on '33' or "33".......i.e. it looks like number but is a string
// console.log(s1)          //33
// console.log(typeof s1)   // string



//**************************************** OPERATIONS **********************************************


let val=3;
let negval=-val
// console.log(negval)

// console.log(2+2)
// console.log(2/3)
// console.log(2**3)
// console.log(2*3)

let str01="Hello";
let str02=" coders"
let str03=str01+str02
// console.log(str03)

// console.log("1"+2)     //12
// console.log(1+"2")     //12
// console.log("1"+2+2)   //122 here the string is in starting, so all other coming after the string will also be treated as string
// console.log(1+2+"2")   //32  because here, the string is in last, so starting numbers will be evaluated

console.log(+true)     //1        //console.log(true+)   will show error
console.log(+"")       //0 