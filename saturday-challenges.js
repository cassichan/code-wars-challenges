//Return greatest and smallest number of numbers in a string
let testStr = "1 2 3 4 5";

function getHighestAndLowestNum(str) {
  let arr = str.split(" ");
  arr.map(Number);
  return `${Math.max(...arr)} , ${Math.min(...arr)}`;
}

console.log(getHighestAndLowestNum(testStr));

//Transform number into a string
function turnNumToStr(num) {
  return num.toString();
}

console.log(turnNumToStr(20));

let arr = [4, "6", 7];
let x = 4;

function check(arr, val) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(check(arr, x));

//Give a random nonnegative number, return digits of this num within an array in reverse order
let num = 349574378956435;

function digitize(n) {
  let strOfNum = n.toString();
  let splitStr = strOfNum.split("");
  let backwardsSplitStr = splitStr.reverse();
  let backwardsArrayOfNum = backwardsSplitStr.map(Number);
  return backwardsArrayOfNum;
}

console.log(digitize(num));
