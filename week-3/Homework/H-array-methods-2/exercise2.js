/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
  //return str.charAt(0).toUpperCase() + str.slice(1);
  const word = str.split("");
  const firstLetter = word[0];
  const capitalLetter = firstLetter.toUpperCase();
  const result = capitalLetter + word.slice(1).join("");
  return result;
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
