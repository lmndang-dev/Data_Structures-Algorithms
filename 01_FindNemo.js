//This is an example of O(n) --> Linear Time
//The number of operations is the same number of input elements
//If input have 5 items, the function will run 5 times
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];

const findNemo = (array) => {

    let startFunction = performance.now();

    for (let i = 0; i < array.length; i ++){
        if(array[i]=== 'nemo'){
            console.log("Found NEMO!");
        }
    }

    let endFunction = performance.now();

    console.log(`<=== The finding Nemo function took ${endFunction-startFunction} milliseconds ===>`)
}

findNemo(everyone);