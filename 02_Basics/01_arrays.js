// Arrays

const myArr = [0,1,2,4,5]    //different types of elements can also be present in arrays like string , bool, etc..

// The arrays in Javascript is resizable and can contain a mix of different types
// copies in JS  - Shallow copies - here, the values are shared by reference (i.e.any changes made in a copy will also be applied 
//                                   to original array)
//               - Deep copies    - here, the values are not shared by reference

const myArr1 = new Array(1,2,3,4);     // Another way to declare an array
// console.log(myArr1[1]);       //2


//Array methods

myArr1.push(9);          // to push an element into an array at end
// console.log(myArr1);     //  [ 1, 2, 3, 4, 9 ]
myArr1.push(2);

myArr1.pop();            // to pop an element from an array
// console.log(myArr1);

myArr1.unshift(5);      // to add an in the starting of an array   //it is costly to shift all elements of an array
// console.log(myArr1);    // [ 5, 1, 2, 3, 4, 9 ]

myArr1.shift();         // to remove the first element of an array, i.e. moving all elements of an array towards left
// console.log(myArr1);

// console.log(myArr.includes(7))     // false
// console.log(myArr.indexOf(5));        //4     //it gives the index of the given element, if the value does not exist, we get -1

const newArr = myArr1.join();      // changes to a string format

// console.log(myArr1);        
// console.log(newArr);         // 1,2,3,4,9       
// console.log(typeof newArr);     //string


// ---------slice----------splice-----------------------------

console.log("A ",myArr1);           //A  [ 1, 2, 3, 4, 9 ]

const myn1 = myArr1.slice(1,3)
console.log(myn1);                 //[ 2, 3 ]

console.log("B ", myArr1)          // B  [ 1, 2, 3, 4, 9 ]

//------splice------------

const myn2 = myArr1.splice(1,3)     //it removes from index 1 to index 3 (including index 3)
console.log("C ", myArr1);    //C  [ 1, 9 ]      // from the original array, (2,3,4) are removed

console.log(myn2)             //[ 2, 3, 4 ]



// So the difference between slice and splice is, SLICE only copies the elements from the original array and the last index is
// is not involved whereas in SPLICE, the elements are removed from the array and the last index is involved... 











