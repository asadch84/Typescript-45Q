function makeShirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("A ".concat(size, " sized shirt will be printed with the message: '").concat(message, "'."));
}
// Making a large shirt with the default message
makeShirt();
// Making a medium shirt with the default message
makeShirt("medium");
// Making a shirt of any size with a different message
makeShirt("small", "Keep coding!");
