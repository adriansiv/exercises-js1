// This function returs string
// With his name and his age

function helloAge(name, birthYear) {
    let age = 2021 - birthYear;
    let output = `Hello ${name} you are ${age} years old`;
   return output;
}
console.log(helloAge ("Adrian", 1997));
console.log(helloAge ("Guadalupe", 1957));