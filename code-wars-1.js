// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored. Create a function that calculates the final points for the team and returns that value.
function scoreBasketBallGame(twoPointers, threePointers) {
  return twoPointers * 2 + threePointers * 3;
}

console.log(scoreBasketBallGame(2, 3));

// Write a function findNeedle() that takes an array full of items but containing one item, "needle"
// . After your function finds the needle, it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle.

let haystack = ["stuff", "morestuff", "avocado", "needle", "wine"];

function findNeedle(haystack) {
  let needleIndex = haystack.indexOf("needle");
  return `found the needle at position ${needleIndex}`;
}

function findNeedle(arr) {
  let needleIndex = arr.indexOf("needle");
  return `found the needle at position ${needleIndex}`;
}

console.log(findNeedle(haystack));
