//https://www.youtube.com/watch?v=XKu_SEDAykw&ab_channel=LifeatGoogle
//Set in javascript: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

//Given an array of number and finding a pair that can sum up the number is

/*
Input: [1, 2, 3, 9] SUM = 8
Output: Not any pair can sum to 8

Input: [1, 2, 4, 4] SUM = 8
Output: 4+4 is match to 8

Input: [6, 4, 3, 2, 1, 7], 9
Output: 6 + 3 = 9 and 2 + 7 = 9

*/

// Naive
function hasPairWithSum(arr, sum) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum) return true;
    }
  }

  return false;
}

// Better
/*
    Input hasPairWithSum2([6, 3], 9)

    fist loop: mySet = [];
               mySet.has(6) => false
               mySet.add(9 - 6)

    second loop: mySet = [3];
               mySet.has(3) => true
               return true
*/
function hasPairWithSum2(arr, sum) {
  const mySet = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}

console.log(hasPairWithSum2([6, 4, 3, 2, 1, 7], 9));

/*
    Input hasPairWithSum2([1, 2, 3, 4], 7);

    fist loop: mySet = [];
               mySet.has(1) => false
               mySet.add(7 - 1)

    second loop: mySet = [6];
               mySet.has(2) => false
               mySet.add(7-2)

    third loop: mySet = [6, 5];
               mySet.has(3) => false
               mySet.add(7-3)
    forth loop: mySet = [6, 5, 4];
               mySet.has(4) => true
               return true      

    Output true
*/

/*
===> .has()
const set1 = new Set([1, 2, 3, 4, 5]);

console.log(set1.has(1));
// Expected output: true

console.log(set1.has(5));
// Expected output: true

console.log(set1.has(6));
// Expected output: false

===> .add() not added repeated value
const set1 = new Set();

set1.add(42);
set1.add(42);
set1.add(13);

for (const item of set1) {
  console.log(item);
  // Expected output: 42
  // Expected output: 13
}
*/
