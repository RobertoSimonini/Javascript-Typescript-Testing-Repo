class Pc {
    constructor (name, brand, price) {
        this.name = name;
        this.brand = brand;
        this.price = price;
    }

    print() {
        console.log(this.name)
        console.log(this.brand)
        console.log(this.price + ' €');
    }
}

class NoteBook extends Pc {
    constructor(noteBookSpecifics) {
        super (
            noteBookSpecifics.name,
            noteBookSpecifics.brand,
            noteBookSpecifics.price
        )
        this.ageOfRelease = noteBookSpecifics.ageOfRelease,
        this.ram = noteBookSpecifics.ram;
    }

    print () {
        super.print();
        console.log(`Questo notebook è stato rilasciato nel ${this.ageOfRelease} ed ha ${this.ram} gb di ram`)
    }
}

const noteBook = new NoteBook({
    name: 'NoteBook Pro',
    brand: 'Lenovo',
    price: 2000,
    ageOfRelease: 2016,
    ram: 32
});
noteBook.print();