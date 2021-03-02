let numberOfStudents = 15;
let numberOfMentors = 8;
let totalNumber = numberOfStudents + numberOfMentors;

let percentageStudents = (numberOfStudents / totalNumber) * 100;
let percentageMentors = (numberOfMentors / totalNumber) * 100;

console.log(`Percentage students: ${Math.round(percentageStudents)}%`)
console.log(`Percentage mentors ${Math.round(percentageMentors)}%`)  
