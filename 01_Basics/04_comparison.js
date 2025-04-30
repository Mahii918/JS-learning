// console.log(2>1)
// console.log(2!=1)

// console.log("2">1)   //true , different datatypes are generally not comparable, so here JS does not give predictable results
// console.log("02">1)

// console.log(null>0)   //false
// console.log(null==0)  //false
// console.log(null>=0);  //true, beacuse equality (==) and comparisons(<,>,<=,>=) works differently and in comparsions, null=0

// console.log(undefined>0)   //false
// console.log(undefined==0)  //false
// console.log(undefined>=0)  //false


//strict check means ===  ,it checks the datatype as well as the value

console.log("2"===2)   //false
console.log(2===02)    //true