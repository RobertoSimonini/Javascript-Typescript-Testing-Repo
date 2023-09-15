const myObject = {
  job: "FrontEnd Developer",
  greet() {
    console.log(`Hi, I'm a ${this.job}`);
  },
};

const protoTypeToPass = {
  sayHi() {
    console.log(`Hi my name is ${this.name}`);
  },
};

class Person {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(Person.prototype, protoTypeToPass);

const roberto = new Person("Roberto");
roberto.sayHi();

const paolo = Object.create(protoTypeToPass);

paolo.name = "Paolo";

paolo.sayHi();
