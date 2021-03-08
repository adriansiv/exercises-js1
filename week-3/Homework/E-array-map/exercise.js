// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function multiplyOneHundred(num) {
    return num * 100;
}
const multiplyOneHundred2 = (num) => {
    return num * 100;
}

const numbersmultiply = numbers.map(multiplyOneHundred);
const numbersmultiply2 = numbers.map(multiplyOneHundred2);
const numbersmultiply3 = numbers.map(num => num * 100);
const numbersmultiply4 = numbers.map (function multiplyOneHumdred3(num) {
    return num * 100;
});

console.log(numbersmultiply4);



/*
function addOne(num) {
    return num + 1;
}

const addOneOther = (num) => {
    return num + 1;
}

const numbersPlusOne1 = numbers.map(addOne);
const numbersPlusOne2 = numbers.map(addOneOther);
const numbersPlusOne3 = numbers.map(num => num + 1);
const numbersPlusOne4 = numbers.map((num) => {
    return num + 1;
});
const numbersPlusOne5 = numbers.map(function addOne2(num) {
    return num + 1;
});

console.log(numbersPlusOne5);

*/    
