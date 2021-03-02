/* exercise 1 */
function percentage(fraction, total){
   return fraction / total * 100;
}
let students = 13;
let mentors = 5;
let mentorsPercentage = percentage(mentors, students + mentors);
let studentsPercentage = percentage(students, students + mentors);

function createMessage(groupName, value){
    return `Percentage ${groupName} ${Math.round(value)}%`
}

console.log(createMessage(`students`, studentsPercentage))
console.log(createMessage(`mentors`, mentorsPercentage))




var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
