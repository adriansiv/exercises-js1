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
/*
function logTStrings(days) {

    for (let counter = 0; counter < days.length; counter++) {

      if (days[counter].startsWith("T")){
        console.log(days[counter]);
      }
    }
}
logTStrings(daysOfWeek);
*/

function logString2(days) {
  days.forEach(element => {

    if (element.startsWith("T")){
      console.log(element);
    }
  }); 
}
logString2(daysOfWeek);