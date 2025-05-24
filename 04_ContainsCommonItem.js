//Coding interview exercise 1

//Given 2 arrays, create a function that let's a user know (true/false)
//whether these two arrays contain any common items

//For Example:
/*
const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "i"];
=====> should return false

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];
=====> should return true
*/

const array1 = ["a", "b", "c", "x", "a"];
const array2 = ["z", "y", "x"];

//This approach is using big O(n^2) or O(n) square => not a best practice and need to be avoid
//Space complexity is O(1) - Not create any new variable
const isContainedCommonItem = (firstArray, secondArray) => {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < secondArray.length; j++) {
      if (array1[i] === array2[j]) {
        return true;
      }
    }
  }

  return false;
};

/*
convert one array to object array1 = {
    a: true
    b: true
    c: true
    x: true
}

compare the other array to the object
array2[index] === obj.properties

*/

//Using O(a + b) - linear O(n)
//Space complexity O(n): create new object and adding items to that object with the loops
const isContainedCommonItem2 = (firstArray, secondArray) => {
  //First Loop: loop though first array and create object where properties === items in the array
  let map = {};

  for (let i = 0; i < firstArray.length; i++) {
    //Check if the element of the object is exist
    //If object item is not exist - added item to the element
    //Don't add repeated item to the new object result in create more memory and more time
    /*
        input array1 = ["a", "b", "c", "x", "a"];
        output map = { a: true, b: true, c: true, x: true }
    */
    if (!map[firstArray[i]]) {
      const item = firstArray[i];
      map[item] = true;
    }
  }

  //Second Loop: loop through second array and check if item in second array exists in created object
  for (let j = 0; j < secondArray.length; j++) {
    //const array2 = ["z", "y", "x"];
    //map["z"] = undefined => false
    //map["y"] = undefined => false
    //map["x"] = true
    if (map[array2[j]]) {
      return true;
    }
  }

  return false;
};

//Using javascript array method
const isContainedCommonItem3 = (firstArray, secondArray) => {
  return firstArray.some((item) => secondArray.includes(item));
};

console.log(isContainedCommonItem3(array1, array2));
