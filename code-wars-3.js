// 1. To be a senior, a member must be at least 55 years old and have a handicap greater than 7.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(data) {
  let output = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] >= 8) {
      output.push("Senior");
    } else {
      output.push("Open");
    }
  }
  return output;
}

console.log(
  openOrSenior([
    [61, 12],
    [6, 12],
  ])
);

// 2. Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:
// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

let summation = function (num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
};

console.log(summation(3));
