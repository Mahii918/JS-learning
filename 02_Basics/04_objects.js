//part 2

// const tinderUser = new Object()          // a way to declare a object                       // singleton object
const tinderUser={}                      // another way to declare a object                 // non singleton object

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false;

// console.log(tinderUser)

const regularUser={           //netsed objects
    email:"someone@gmail.com",
    fullName:{
        userfullname:{
            firstname:"some",
            lastname:"one"
        }
    }
}

// console.log(regularUser.fullName.userfullname.firstname)   // this is way to access something from objects or nested objects

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = Object.assign({}, obj1, obj2)    //it means the elements of obj1,obj2 are copied to empty object i.e. {}

// const obj4 = Object.assign(obj1,obj2)      // it means the elements of obj2 are copied to obj1 and then copied to obj3.. 
//                                         so to avoid changes in the object1 (obj1), we write an empty object ({}), to store them.
//                                         Here, obj4===obj1 i.e. both are equal


const obj5={...obj1, ...obj2}      //using spread operator, we did the same thing that we did above and we will mostly use this..


const users=[
    {
        id:1,
        email:"hii@gmail.com",
    },
    {
        id:2,
        email:"hii2@gmail.com",
    },
    {
        id:3,
        email:"hii3@gmail.com",
    },
    {
        id:4,
        email:"hii@gmail.com",
    }
    
]

users[1].email

// console.log(tinderUser)

// console.log(Object.keys(tinderUser));    // the output is array of all keys of the object tinderUser 
// console.log(Object.values(tinderUser));    // the output is array of all values of the object tinderUser 
// console.log(Object.entries(tinderUser));    // the output is array of all (arrays containing key and its value in each) of 
//                                             the object tinderUser 

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));   //true     // it tells us a specific key exist in a object or not



//--------------------------------------------------------------------------------------------------------------------------

// Object De-structuring

const course={
    courseName:"js in hindi",
    price:"999",
    courseInstructor: "Hitesh Choudhary"
}

// course.courseInstructor        //to print the course instructor again and again, we have to write course.courseInstructor
//                                  but we can also use the one shown below, 

// const {courseInstructor} = course     // after this, we can directly write courseInstructor for name
const {courseInstructor : instructor} = course    // Here, rather than using courseInstructor, we can directly use instructor
//                                                   and it will give same result

// console.log(courseInstructor)         // Hitesh Choudhary   // without "course." at start, it directly printed courseInstructor
// console.log(instructor)         // Hitesh Choudhary   



//---------------JSON API--------------------

// {                                                   // syntax of json , here both keys and values must be strings..
//     "name":"hitesh",                                 //here, it is showing error, but actually there is no error..
//     "courseName":" js in hindi",                    
//     "price":"free"                                  //here, the API is in object format
// }


// [                                         //API in array format
//     {},
//     {},
//     {},
// ]


