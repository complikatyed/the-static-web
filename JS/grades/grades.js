
var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var A = [91-100];
var B = [81-90];
var C = [71-80];
var D = [61 -70];
var F = [50 - 60];

var gradeA = 0;
var gradeB = 0;
var gradeC = 0;
var gradeD = 0;
var gradeF = 0;


// How many of each grade?

for (var i = scores.length - 1; i >= 0; i--) {
  if (scores[i] > 91) {
    gradeA += 1;
  }
  else if (scores[i] >= 81 && scores[i] <= 90) {
    gradeB += 1;
  }
  else if (scores[i] >= 71 && scores[i] <= 80) {
    gradeC += 1;
  }
  else if (scores[i] >= 61 && scores[i] <= 70) {
    gradeD += 1;
  }
  else {
    gradeF += 1;
  }
};

console.log("gradeA", gradeA);
console.log("gradeB", gradeB);
console.log("gradeC", gradeC);
console.log("gradeD", gradeD);
console.log("gradeF", gradeF);


// What is the lowest grade?


var min = Math.min(...scores);
console.log("The lowest score:", min);


// What is the highest grade?




