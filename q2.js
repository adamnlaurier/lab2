//Lab 2 - Question 2
//Numeric grade to letter grade
//===============================================================
//Input
var numericGrade = 77;
var letterGrade;

if (numericGrade >= 95 && numericGrade <= 100) {
  letterGrade = 'A+';
} else if (numericGrade >= 87 && numericGrade <= 94) {
  letterGrade = 'A';
} else if (numericGrade >= 80 && numericGrade <= 86) {
  letterGrade = 'A-';
} else if (numericGrade >= 77 && numericGrade <= 79) {
  letterGrade = 'B+';
} else if (numericGrade >= 73 && numericGrade <= 76) {
  letterGrade = 'B';
} else if (numericGrade >= 70 && numericGrade <= 72) {
  letterGrade = 'B-';
} else if (numericGrade >= 67 && numericGrade <= 69) {
  letterGrade = 'C+';
} else if (numericGrade >= 63 && numericGrade <= 66) {
  letterGrade = 'C';
} else if (numericGrade >= 60 && numericGrade <= 62) {
  letterGrade = 'C-';
} else if (numericGrade >= 57 && numericGrade <= 59) {
  letterGrade = 'D+';
} else if (numericGrade >= 53 && numericGrade <= 56) {
  letterGrade = 'D';
} else if (numericGrade >= 50 && numericGrade <= 52) {
  letterGrade = 'D-';
} else if (numericGrade >= 0 && numericGrade <= 49) {
  letterGrade = 'F';
}

console.log(`Numeric grade: ${numericGrade} Letter Grade: ${letterGrade}`);
