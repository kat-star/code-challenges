// Given an array of sorted numbers (can be negative) and a center num
// return values of the original numbers sorted by the order of the distance between each number and the center num

// I: [ -20, -8, 0, 1, 2, 20], 3
//    [1, 2, 3, 11, 17, 23] <-- distancesArr
// O: [2, 1, 0, -8, 20, -20]

function closestToCenter(arr, num) {
  let distancesArr = [];
  let distanceLookup = {};
  let resultsArray = [];

  // builds distances from input num & object with distance: input
  for (let i = 0; i < arr.length; i++) {
    const distance = Math.abs(arr[i] - num);
    distancesArr.push(distance);
    distanceLookup[distance] = arr[i];
  }

  distancesArr.sort((a, b) => a - b);

  for (let i = 0; i < distancesArr.length; i++) {
    resultsArray.push(distanceLookup[distancesArr[i]]);
  }
  return resultsArray;
}

console.log(closestToCenter([-20, -8, 0, 1, 2, 20], 3)); // [2, 1, 0, -8, 20, -20]
