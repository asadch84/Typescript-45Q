// Function that accepts an array of items for a sandwich and prints a summary of the sandwich
function order_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    // Print a summary of the sandwich being ordered
    console.log('You have ordered a sandwich with the following items:');
    items.forEach(function (item) {
        console.log("- ".concat(item));
    });
    console.log(''); // Add a blank line for separation
}
// Call the function three times with different numbers of arguments each time
order_sandwich('lettuce', 'tomato', 'cheese');
order_sandwich('turkey', 'ham', 'bacon', 'swiss cheese');
order_sandwich('avocado', 'cucumber', 'sprouts', 'hummus', 'feta cheese');
