const addOne = (int) => {
  return int + 1;
};

const addTwo = (int) => {
  return int + 2;
};

const addThree = (int) => {
  return int + 3;
};

const doOperations = () => {
  let result = 0;

  result = addOne(result);
  result = addTwo(result);
  result = addThree(result);

  console.log(`The result is ${result}`);
};

doOperations();
