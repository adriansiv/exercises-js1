function exponential(number) {
  return number * number;
}

function isEven(number) {
  return number % 2 === 0;
}

for (let i = 6; i < 20; i = i + 2) {
  console.log(`The exponencial of ${i} is ${exponential(i)}`);
}

function getModulo(number) {
  let resto = (number % 2);
  return resto
}

console.log(getModulo(122));

