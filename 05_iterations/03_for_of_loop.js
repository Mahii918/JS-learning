//for of loop

// ["", "", ""]    // array containing strings
// [{}, {}, {}]    //array containing objects

const arr=[1,2,3,4,5]

// for (const element of object) {             // syntax of for of loop
    
// }

// for (const num of arr) {           //loop similar to    "for(auto i:arr){---}"   in cpp......
//     console.log(num);
// }


const greetings = "Hello World"

// for(const greet of greetings){                       // here loop runs for each character
//     console.log(`Each char is  ${greet}`)
// }



//Map

const map = new Map()

map.set("IN","India")        //map.set() is used to insert the pair into map
map.set("USA","United States of America")
map.set("Fr","France") 
map.set("IN","India")         //the map still remains the same because map only stores unique values

// console.log(map)                // to see how the map looks

// for (const key of map) {
//     console.log(key)        //prints the arrays of pair of key and value   //e.g.  [ 'IN', 'India' ]
// }

// for (const [key,value] of map) {          // with this we can take keys and values seperately
//     console.log(key, ':-',value)        
// }


//lets for of loop on object---------------//------------------//--------------//--------------------//----------------//-------

// const myObject={
//     'game1':'NFS',
//     'game2':'Spiderman'
// }

// for(const [key,value] of myObject){
//     console.log(key, ':-',value)              //shows error i.e. the object is not iterable   
// }


const myObject={
    game1:'NFS',
    game2:'Spiderman'
}

for(const [key,value] of myObject){
    console.log(key, ':-',value)          //again shows error i.e. the object is not iterable   //so loop doesn't work here..
}