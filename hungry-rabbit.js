// A very hungry rabbit is placed in the center of of a garden, represented by a rectangular N x M 2D matrix.

// The values of the matrix will represent numbers of carrots available to the rabbit in each square of the garden.If the garden does not have an exact center, the rabbit should start in the square closest to the center with the highest carrot count.

// On a given turn, the rabbit will eat the carrots available on the square that it is on, and then move up, down, left, or right, choosing the square that has the most carrots.If there are no carrots left on any of the adjacent squares, the rabbit will go to sleep.You may assume that the rabbit will never have to choose between two squares with the same number of carrots.

// Write a function which takes a garden matrix and returns the number of carrots the rabbit eats.You may assume the matrix is rectangular with at least 1 row and 1 column, and that it is populated with non - negative integers.For example,

//   [[5, 7, 8, 6, 3],
//   [0, 0, 7, 0, 4],
//   [4, 6, 3, 4, 9],
//   [3, 1, 0, 5, 8]]

//output ==> 27


//coordinates for each potential center square
function hungryRabbit(gardenArray) {
  let start = -1;
  let startX;
  let startY;
  let width = gardenArray[0].length;
  let height = gardenArray.length;
  let xArray = [];
  let yArray = [];
  let carrotsEaten = 0;

  if (height % 2 !== 0) {
    yArray.push(Math.floor(height / 2))
  } else {
    yArray.push(height / 2)
    yArray.push(height / 2 - 1)
  }

  if (width % 2 !== 0) {
    xArray.push(Math.floor(width / 2))
  } else {
    xArray.push(width / 2)
    xArray.push(width / 2 - 1)
  }

  xArray.forEach(x => {
    yArray.forEach(y => {
      if (gardenArray[y][x] > start) {
        start = gardenArray[y][x];
        startX = x;
        startY = y;
      }
    })
  });

  carrotsEaten = start;
  gardenArray[startY][startX] = 0;

  //while loop here...calls getNextCoordinates function to get next coordinates if function is true, saves the returned coordinates to the startX and startY respectively, adds to carrotsEaten, and resets the current spot to 0
  while (getNextCoordinates(startX, startY, gardenArray)) {
    const nextCoordinates = getNextCoordinates(startX, startY, gardenArray);
    startY = nextCoordinates[0];
    startX = nextCoordinates[1];
    carrotsEaten += gardenArray[startY][startX];
    gardenArray[startY][startX] = 0;
  }
  return carrotsEaten;
}

//helper to get the next coordinates
function getNextCoordinates(x, y, gardenArray) {
  let greaterNum = -1;
  let nextX;
  let nextY;

  let left = x === 0 ? undefined : gardenArray[y][x - 1];
  let right = x === gardenArray[0].length - 1 ? undefined : gardenArray[y][x + 1];
  let up = y === 0 ? undefined : gardenArray[y - 1][x];
  let down = y === gardenArray.length - 1 ? undefined : gardenArray[y + 1][x];

  if (left !== undefined && left > greaterNum) {
    greaterNum = left;
    nextX = x - 1
    nextY = y
  }
  if (right !== undefined && right > greaterNum) {
    greaterNum = right;
    nextX = x + 1;
    nextY = y
  }
  if (up !== undefined && up > greaterNum) {
    greaterNum = up;
    nextX = x;
    nextY = y - 1;
  }
  if (down !== undefined && down > greaterNum) {
    greaterNum = down;
    nextX = x;
    nextY = y + 1;
  }

  //conditional to check if all sides are either 0 or undefined. Otherwise, return coordinates
  if ((up === undefined || up === 0) && (down === undefined || down === 0) && (left === undefined || left === 0) && (right === undefined || right === 0)) {
    return;
  } else {
    return [nextY, nextX];
  }
}

const array = [
  [5, 7, 8, 6, 3],
  [0, 0, 7, 0, 4],
  [4, 6, 3, 4, 9],
  [3, 1, 0, 5, 8]]

// const array = [
//   [5, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0]]

console.log(hungryRabbit(array))

// console.log(getNextCoordinates(0, 0, array))


