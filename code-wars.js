// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

let testString = "pear tree";
// let testString = "my pyx"
// let testString = "aeiou";

function getCount(str) {
  let numberOfVowels = 0;
  let arrayStr = str.split("");
  console.log(arrayStr);
  for (i = 0; i < arrayStr.length; i++) {
    if (arrayStr[i] === "a") {
      numberOfVowels++;
    } else if (arrayStr[i] === "e") {
      numberOfVowels++;
    } else if (arrayStr[i] === "i") {
      numberOfVowels++;
    } else if (arrayStr[i] === "o") {
      numberOfVowels++;
    } else if (arrayStr[i] === "u") {
      numberOfVowels++;
    }
  }
  console.log(numberOfVowels);
  return numberOfVowels;
}
console.log(getCount(testString));
