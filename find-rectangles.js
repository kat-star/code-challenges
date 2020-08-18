// Find Rectangles

 // Imagine we have an image. We'll represent this image as a simple 2D array where every pixel is a 1 or a 0. The image you get can have several rectangle of 0s on a background of 1s.

// Write a function that takes in the image and returns one of the following representations of the collection of rectangles of 0's: top-left coordinate and bottom-right coordinate OR top-left coordinate, width, and height.

// image1 = [
//   [1, 1, 1, 1, 1, 1, 1],
//   [0, 0, 1, 1, 1, 1, 1],
//   [1, 1, 1, 0, 0, 0, 1],
//   [1, 1, 1, 0, 0, 0, 1],
//   [1, 1, 1, 1, 1, 1, 1],
// ]

// Sample output variations (only one is necessary):

// findRectangle(image1) =>
//   {x: 0, y: 1, width: 2, height: 2}, {x: 3, y: 2, width: 3, height: 2}
//   [1,0,1, 1], [2,3 3,5] -- row,column of the top-left and bottom-right corners

function findRectangles(matrix) {
  // storing found rectangles in an array of objects
  const rectangles = [];
  // want to keep track of rectangles and subsequent zeros found to avoid duplicates
  const coordinatesViewed = {};

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[0].length; x++) {
      const root = coordinatesViewed[y];
      // ternary used in case root is not found in the object (to avoid a type error when trying to access 'x')
      const nested = root ? root[x] : null;
      if (matrix[y][x] === 0 && !nested) {
        const rectangle = findRectangle(matrix, y, x);
        const height = rectangle["height"];
        const width = rectangle["width"];
        rectangles.push(rectangle);
        setCheckedZero(coordinatesViewed, height, width, y, x);
        // incrementing x to the width since don't need to check the zeros already found in the row
        x += width;
      }
    }
  }
  return rectangles;
}

// adds the zeros checked to the coordinatesViewed nested object to avoid duplicate rectangles. coordinatesViewed is passed by reference so we don't need to return anything
function setCheckedZero(coordinatesViewed, height, width, y, x) {
  for (let i = y; i < height + y; i++) {
    for (let j = x; j < x + width; j++) {
      const root = coordinatesViewed[i];
      if (root) {
        coordinatesViewed[i] = Object.assign(root, { [j]: true });
      } else {
        coordinatesViewed[i] = { [j]: true };
      }
    }
  }
}

// helper function to find the dimensions of the rectangle when matrix[y][x] === 0
function findRectangle(matrix, y, x) {
  const rectangle = {'y': y, 'x': x};
  rectangle["width"] = checkWidth(matrix, y, x);
  rectangle["height"] = checkHeight(matrix, y, x);
  return rectangle;
}

// helper function to check the height of the rectangle
function checkHeight(matrix, y, x) {
  let height = 0;

  while (matrix[y] && matrix[y][x] === 0) {
    height++;
    y++;
  }
  return height;
}

// helper function to check the width of the rectangle
function checkWidth(matrix, y, x) {
  let width = 0;

  while (matrix[y][x] === 0) {
    width++;
    x++;
  }
  return width;
}

const image1 = [
  [0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 0, 1, 1], 
  [1, 1, 1, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 0],
];
console.log(findRectangles(image1)); 
          // [
//   { y: 0, x: 0, width: 1, height: 1 },
//   { y: 2, x: 0, width: 1, height: 1 },
//   { y: 2, x: 3, width: 3, height: 2 },
//   { y: 3, x: 1, width: 1, height: 3},
//   { y: 5, x: 3, width: 2, height: 2},
//   { y: 7, x: 6, width: 1, height: 1}
// ];

const image2 = [[0]];
console.log(findRectangles(image2));
// [{ y: 0, x: 0, width: 1, height: 1 }];

const image3 = [
  [1, 1, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 1, 1],
];
console.log(findRectangles(image3));
// [
//   { y: 0, x: 3, width: 1, height: 2 },
//   { y: 1, x: 0, width: 2, height: 2 }
// ]