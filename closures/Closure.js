// function greetings(msg) {
//   function who(name, sentence) {
//     return function test() {
//       console.log(`${msg}, ${name}, ${sentence}`);
//     };
//   }
//   return who("Carlo", "Come stai?");
// }

const greetings = (msg) => {
  return (name) => {
    console.log(`${msg}, ${name}`);
  };
};

const hello = greetings("Hello");
const pippo = greetings("Pippo");
const howAreYou = greetings("Are you feeling good?");

hello("Carlo");
