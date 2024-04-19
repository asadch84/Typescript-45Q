// Array of animals with a common characteristic
const animals: string[] = ['Dog', 'Cat', 'Rabbit'];

// Printing each animal name
console.log("Printing animal names:");
for (const animal of animals) {
    console.log(animal);
}

// Printing statements about each animal
console.log("\nPrinting statements about each animal:");
for (const animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Printing a statement about the common characteristic
console.log("\nAny of these animals would make a great pet!");
