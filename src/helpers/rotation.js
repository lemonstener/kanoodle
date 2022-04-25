const rotateLeft = (arr) => {
  const newShape = [];
  let length = arr[0].length;

  while (length > 0) {
    newShape.push(createNewRowLeft(arr));
    length--;
  }

  return newShape;
};

const rotateRight = (arr) => {
  const newShape = [];
  let length = arr[0].length;

  while (length > 0) {
    newShape.push(createNewRowRight(arr));
    length--;
  }

  return newShape;
};

const createNewRowLeft = (arr) => {
  const newRow = [];
  for (let row of arr) {
    newRow.push(row.pop());
  }
  return newRow;
};

const createNewRowRight = (arr) => {
  const newRow = [];
  for (let row of arr) {
    newRow.unshift(row.shift());
  }
  return newRow;
};

export { rotateLeft, rotateRight };
