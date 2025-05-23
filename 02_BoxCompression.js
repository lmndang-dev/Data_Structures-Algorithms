//This is the example if Big O notation O(1)
//No matter how big the input is
//The function will only run once
const boxes = ["box 1", "box 2", "box 3", "box 4", "box 5"];

const logFirstBox = (array) => {
    console.log(`The first box on the list is named: ${array[0]}`);
}

logFirstBox(boxes);