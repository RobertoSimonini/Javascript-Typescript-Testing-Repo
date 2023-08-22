const animals = ["dog", "cat", "wolf", "pigeon", "rhino"];

for (let animal of animals) {
  console.log(`The animal is ${animal}`);
}

for (let [idx, val] of animals.entries()) {
  console.log(`${idx}: ${val}`);
}
