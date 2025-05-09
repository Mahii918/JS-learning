//for each loop

const coding=['js','py','C','cpp','rb','java']

// coding.forEach( function (item){     // after forEach, we will write the fxn that will be applied on each element of the array
//     console.log(item)                //this will print all the values of array    /// here, we dont write the name of the fxn.
// } )

// coding.forEach( (item) => {                 //for each loop using arrow fxn
//     console.log(item);
// })

 
function printMe(item){
    console.log(item);
}

// coding.forEach(printMe)    //here we gave the reference of the fxn, which is already declared   //valid for 'for each' loop

//NOTE: In 'for each' loop, it not only has access to element but also has access to index and the complete array

// coding.forEach((item,index,arr) => {
//     console.log(item,index,arr);
// })


// accessing from array of objects using 'for each' loop
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },

    {
        languageName: "C++",
        languageFileName: "cpp"
    },

    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
} )
