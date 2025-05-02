//Dates

let myDate=new Date();
// console.log(myDate);     //gives the date and some other extra values which are not understandable
// console.log(myDate.toString());       // It gives day, month, date  and some other values
// console.log(myDate.toDateString());      // It gives day, month, date
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());      //date in the format  M/D/YYYY
// console.log(myDate.toLocaleString());          //same as above with some extra values

// console.log(typeof myDate);   //object                //Date is of Object

let myCreatedDate=new Date(2023,0,23)                 //format is (year,month,date), here month starts from 0 (i.e. january)
// console.log(myCreatedDate.toDateString());      //Mon Jan 23 2023

let myCreatedDate1=new Date(2023,0,23,5,3)    //format is (year,month,date,hours,mins..), here month starts from 0 (i.e. january)
// console.log(myCreatedDate1.toLocaleString());   //1/23/2023, 5:03:00 AM

let myCreatedDate2=new Date("2023-01-14")
// console.log(myCreatedDate2.toLocaleDateString());     // 1/14/2023

let myCreatedDate3=new Date("01-14-2023")
// console.log(myCreatedDate3.toLocaleDateString());       // 1/14/2023


//-------------------------TIME----------------------TIME------------------------------------

let myTimeStamp=Date.now();
// console.log(myTimeStamp)    //gives the time from 1 Jan 1970 in milliseconds
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000))   //time in seconds, which is further rounded off..


let newDate=new Date()
// console.log(newDate)
// console.log(newDate.getMonth());  //we get a month in number (0 means January, 1 means february..)// (for correct month add 1)
// console.log(newDate.getDay());        //we get day in number (0 means Sunday, 1 means Monday, .........)



//to add extra features, we use localeString
newDate.toLocaleString('default',{
    weekday: "long",                                  // ctrl+space shows all options, with which we can play
    
})



