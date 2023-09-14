const person = {
  name: "Roberto",
  surname: "Simonini",
  age: 21,
  introduceYourSelf() {
    console.log(
      `Hi, my name is ${this.name} ${this.surname} and I'm currently ${person.age} years old`
    );
  },
};

person.introduceYourSelf();
