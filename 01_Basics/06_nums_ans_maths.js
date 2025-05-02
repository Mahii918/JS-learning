const score=400
// console.log(score);    //400

const balance = new Number(100)   // [Number: 100]       //here, we are declaring by specifying the datatype as Number
// console.log(balance);

// console.log(balance.toString());   //100     //100 is converted to string
// console.log(balance.toString().length);   //3    //gives the length of the string i.e. "100"  == 3

// console.log(balance.toFixed(2));   //100.00     //the number of decimals are fixed

const num1=89.5685
// console.log(num1.toPrecision(2))     // 90     //here, the priority is given to first 2 digits and rest is rounded off
// console.log(num1.toPrecision(3));    //89.6    // priority is given to first 3 digits and rest is rounded off

const hundreds = 1000000
// console.log(hundreds.toLocaleString());           //1,000,000    //in US form
// console.log(hundreds.toLocaleString('en-IN'));    //10,00,000    //in Indian form




//----------------------------------------------MATHS-----------------------------------------------------------------------

// console.log(Math)        //Object
// console.log(Math.abs(-4))     //4     //gives absolute value
// console.log(Math.round(8.9));     //9   //round off the nearest integer
// console.log(Math.ceil(2.6));      //3   
// console.log(Math.floor(2.1))       //2
// console.log(Math.min(33,45,23,12,34,51));      //12     //gives the min value from the given values
// console.log(Math.max(33,45,23,12,34,51));         // 51    //gives the max value from the given values

// console.log(Math.random())    //gives a random valur between 0 and 1, including 0 and 1



//when we want a number between a specific numbers
const min=10;
const max=20;

console.log(Math.floor( Math.random()*(max-min+1) )+min);    //general formula to get integers in a specific numbers






