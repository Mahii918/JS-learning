//

const myNumbers = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNumbers.map( (num) => num+10)     //each value of the array is increased by 10

//            //or

// const newNums = myNumbers.map( (num) => {
//     return num+10
// })

// console.log(newNums);      // [11,12,13,14,15,16,17,18,19,20]



// const newNums = myNumbers.map( (num) => num*10 ).map( (num) => num+1)   //this chaining is possible in js
//              or (for simpler understanding)
// const newNums = myNumbers
//                     .map((num) => num*10)     //here array becomes [10,20,....,100] and on this array the next operation is applied
//                     .map((num) => num+1)
// console.log(newNums); 

// applying more chains
const newNums = myNumbers
                    .map((num) => num*10)     
                    .map((num) => num+1)
                    .filter((num) => num>45)
console.log(newNums)