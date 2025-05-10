//
// const coding=['js','py','C','cpp','rb','java']

// const values= coding.forEach( (item) => {
//     // console.log(item)
//     return item        //NOTE: for each loop does not return any value    
// })

// console.log(values);


const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num>4 )             //here, in filter each value is taken one by one, the value that 
// console.log(newNums);                                       //satisfies the condition will be returned


// const newNums = myNums.filter( (num) => {
//     num>4                //here again nothing is returned, we have studied earlier in implicit return and
// } )                     // explicit return that in case of implicit, return is not needed, in explicit, return is must
// console.log(newNums);        


// const newNums = myNums.filter( (num) => {
//     return num>4                                //explicit return (as scope is there, so return is must)
// } )             
// console.log(newNums);     


// const newNums=[]

// myNums.forEach( (num) => {      //using for each loop, we did same thing 
//     if(num>4){
//         newNums.push(num)
//     }
// })

// console.log(newNums)



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter( (bk) => bk.genre === 'History')     //return all the books with genre History

userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"   //returns all the books published after 1994 and has genre History
})
console.log(userBooks);