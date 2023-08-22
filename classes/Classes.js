class Pc {
  constructor(name, brand, price) {
    this.name = name;
    this.brand = brand;
    this.price = price;
  }

  print() {
    console.log(this.name);
    console.log(this.brand);
    console.log(this.price + " €");
  }
}

class NoteBook extends Pc {
  constructor(name, brand, price, ageOfRelease, ram) {
    super(name, brand, price);
    (this.ageOfRelease = ageOfRelease), (this.ram = ram);
  }

  print() {
    super.print();
    console.log(
      `Questo notebook è stato rilasciato nel ${this.ageOfRelease} ed ha ${this.ram} gb di ram`
    );
  }
}

class MacBook extends NoteBook {
  constructor(name, brand, price, ageOfRelease, ram, webCam) {
    super(name, brand, price, ageOfRelease, ram);
    this.webCam = webCam;
  }

  print() {
    super.print();
    console.log(`La webcam ha una qualità video di ${this.webCam}`);
  }
}

const noteBook = new NoteBook("NoteBook Pro", "Lenovo", 2000, 2016, 32);
noteBook.print();

const newTest = new MacBook("MacBook", "Apple", 900, 2014, 8, "1080p");
newTest.print();
