// loop on object

const myObject={
    js: "javascript",
    cpp:"C++",
    py:"python"
}

//for object we use for in loop, that doesn't mean, for in loop is used for objects only, it is also used in other places

// for (const key in object) {        //syntax of for in loop
//     
// }

// for (const key in myObject) {
//     // console.log(key);                  //for key of the object
//     // console.log(myObject[key]);        //for value of the object
    
//     console.log(`${key} is shortcut for ${myObject[key]} .`);
// }


//Now lets see that whether for in loop works for array also or not

const programming=['js','py','C','cpp','rb','java']

// for (const key in programming) {
//     // console.log(key);      //this prints numbers, in other words, we can say index values i.e. 0,1,2,3,4....

//     console.log(programming[key])   //this will print the elements of the array in 'for in loop'   
// }


//for in loop on map----------//------------//----------//------------//-------//-------//----------

const map = new Map()

map.set("IN","India")        //map.set() is used to insert the pair into map
map.set("USA","United States of America")
map.set("Fr","France") 
map.set("IN","India")

for (const key in map) {
    console.log(key)   //it will not run because map is not iterable by for in loop
}