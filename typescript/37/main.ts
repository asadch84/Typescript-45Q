function makeShirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`A ${size} sized shirt will be printed with the message: '${message}'.`);
}

// Making a large shirt with the default message
makeShirt();

// Making a medium shirt with the default message
makeShirt("medium");

// Making a shirt of any size with a different message
makeShirt("small", "Keep coding!");
