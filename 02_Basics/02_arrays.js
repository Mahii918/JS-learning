//Arrays

const marvel_heros = ["thor","Ironman","spiderman"];
const dc_heros = ["superman","flash","batman"];

// marvel_heros.push(dc_heros);        //by this, the complete array (dc_heros) is pushed into marvel_heros array as element.
// console.log(marvel_heros)           //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3]);       // [ 'superman', 'flash', 'batman' ]
// console.log(marvel_heros[3][1]);     // flash

const all_heros = marvel_heros.concat(dc_heros);    // concat helps to get the union of two arrays
// console.log(all_heros);

const all_new_heros = [...marvel_heros,...dc_heros];   //spread operator  //works similar to concat and using this we can combine 
//                                                       more than two arrays also

const arr2 = [1,2,3,[4,5,6],7,[4,5,[6,7],9]];
const real_arr2 = arr2.flat(Infinity);      //flat brings all elements into a single array at whatever depth they might be present
//                                            here, we have taken the depth to infinity

// console.log(real_arr2);

// console.log(Array.isArray("Unique"));      //false    // It tells us, whether the given is array or not
// console.log(Array.from("Unique"));        // [ 'U', 'n', 'i', 'q', 'u', 'e' ]       //converts the given into array

// console.log(Array.from({name: "Unique"}));   // []    //because, its not able to convert this to array, but after giving a 
//                                                      condition i.e. to convert keys/values into array, then its possible..

const score1=100;
const score2=200;
const score3=300;
// console.log(Array.of(score1,score2,score3));    //[ 100, 200, 300 ]     // forms an array with the given elements




                                                        
