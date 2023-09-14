const person = {
  name: "Roberto",
  surname: "Simonini",
  age: 21,
  friends: ["Pippo", "Pluto", "Paperino"],
  introduceYourSelf() {
    console.log(
      `Hi, my name is ${this.name} ${this.surname} and I'm currently ${person.age} years old`
    );
  },
};

//person.introduceYourSelf();
console.log(person["age"]);

person.height = "180 cm";
console.log(person);
