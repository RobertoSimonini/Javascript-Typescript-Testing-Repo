function Person(name) {
  this.name = name;
  this.introduceYourSelf = () => {
    console.log(`Hi my name is ${this.name}`);
  };
}

const roberto = new Person("Roberto");
roberto.introduceYourSelf();
