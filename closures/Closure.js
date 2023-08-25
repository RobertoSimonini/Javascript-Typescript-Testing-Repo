function greetings(msg) {
  function who(name, sentence) {
    return function test() {
      console.log(`${msg}, ${name}, ${sentence}`);
    };
  }
  return who("Carlo", "Come stai?");
}

const hello = greetings("Hello");
const pippo = greetings("Pippo");
const howAreYou = greetings("Are you feeling good?");

function count(step = 1) {
  let count = 0;
  return function increaseCount() {
    count += step;
    return console.log(count);
  };
}

const increaseByOne = count(1);
const increaseByThree = count(3);

increaseByOne();
increaseByOne();

increaseByThree();
increaseByThree();
