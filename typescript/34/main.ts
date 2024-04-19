// Array of favorite pizza names
const pizzas: string[] = ['Pepperoni', 'Margherita', 'BBQ Chicken'];

// Printing each pizza name
console.log("Printing pizza names:");
for (const pizza of pizzas) {
    console.log(pizza);
}

// Printing sentences about liking each pizza
console.log("\nPrinting statements about liking each pizza:");
for (const pizza of pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Additional sentence expressing love for pizza
console.log("\nI really love pizza!");
