/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
function logTStrings(strings) {

    for (let counter = 0; counter < strings.length; counter++) {
    
    if (strings[counter].startsWith("T")){
      console.log(strings[counter]);
    }
  }
}
logTStrings(daysOfWeek);