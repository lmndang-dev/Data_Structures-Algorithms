//Log all pairs of array
//The nested function is Big O(n^2)
//The amount of array length is 5 and the function operating the loop 5*5 = 25 loops has performed

const boxes = ["a", "b", "c", "d", "e"];

function logAllPairsOfArray(array) {
  //First loop
  for (let i = 0; i < array.length; i++) {
    //Second loop inside of first loop
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

logAllPairsOfArray(boxes);
