function greetings(msg) {
  return function who(name, sentence) {
    console.log(`${msg}, ${name}, ${sentence}`);
  };
}

const hello = greetings("Hello");
const pippo = greetings("Pippo");
const howAreYou = greetings("Are you feeling good?");

hello("Ciao", "Carlo");
