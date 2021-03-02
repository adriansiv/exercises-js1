
function getNumber() {
  return Math.random() * 10;
}

// Return a random number between 0 (included) and 10 (excluded).
console.log(getNumber());

function s(w1, w2) {
  return w1.concat(w2);
}
console.log(s(`Hello `, `world`));

// Return a concatenate string.

// Write the body of this function to concatenate three words together.
// Look at the test case below to understand what this function is expected to return.

function concatenate(firstWord, secondWord, thirdWord) {
  return firstWord.concat(" ", secondWord, " ", thirdWord)
}
console.log(concatenate('code', "your", "future"));
console.log(concatenate('I', "like", "pizza"));

function concatenate2(firstWord, secondWord, thirdWord) {
  return firstWord + " " + secondWord + " " + thirdWord;
  
}
console.log(concatenate2("hola", "soy", "adrian"));
/* ======= TESTS - DO NOT MODIFY =====
There are some Tests in this file that will help you work out if your code is working.
To run these tests type `node 3-function-output` into your terminal
*/

const util = require('util');

function test(test_name, actual, expected) {
    let status;
    if (actual === expected) {
        status = "PASSED";
    } else {
        status = `FAILED: expected: ${util.inspect(expected)} but your function returned: ${util.inspect(actual)}`;
    }

    console.log(`${test_name}: ${status}`);
}

test(
  "concatenate function - case 1 works",
  concatenate('code', 'your', 'future'),
  "code your future"
);
test(
  "concatenate function - case 2 works",
  concatenate('I', 'like', 'pizza'),
  "I like pizza"
);
test(
  "concatenate function - case 3 works",
  concatenate('I', 'am', 13),
  "I am 13"
);
