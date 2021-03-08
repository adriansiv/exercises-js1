let classMembers = ["Giorgio", "Adrian", "Enia", "Kimberly", "Manuel"];

let otherClassMembers = classMembers.concat(["Keti", "Guido", "Artur", "Manpreet", "Kris"]);  
otherClassMembers.sort();
//console.log(otherClassMembers);

function isAtTheClass(name, names) {
    if (names.includes(name)) {
        return `${name} is at the class with ${names.join(", ")}`
    }
    else {
        return `${name} is not at the class with ${names.join(", ")}.`
    }
}
console.log(isAtTheClass("Raul", otherClassMembers));