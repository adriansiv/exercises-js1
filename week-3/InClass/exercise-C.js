function abracaFunction(yourFunc) {
    console.log(
      "I am abracaFunction! Watch as I mutate an array of strings to your heart's content!"
    );
    const abracaArray = [
      "James",
      "Elamin",
      "Ismael",
      "Sanyia",
      "Chris",
      "Antigoni",
    ];
  
    const abracaOutput = yourFunc(abracaArray);
  
    return abracaOutput;
  }
  const result = abracaFunction(function (array){
      return array.map(function(string){
          return string.toUpperCase();
      });
  });
  result.sort();
  console.log(result);
  
  /*
const abracaArray = [
    "James",
    "Elamin",
    "Ismael",
    "Sanyia",
    "Chris",
    "Antigoni",
  ];
  const abracaFunction = (array) => {return array.toUpperCase() }
  
const result = abracaArray.map(abracaFunction);
console.log(result);
*/

