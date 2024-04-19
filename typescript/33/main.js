// Array of numbers from 1 to 9
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Function to get the ordinal suffix for a number
function getOrdinalSuffix(num) {
    if (num === 1) {
        return 'st';
    }
    else if (num === 2) {
        return 'nd';
    }
    else if (num === 3) {
        return 'rd';
    }
    else {
        return 'th';
    }
}
// Loop through the array and print the ordinal numbers
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var num = numbers_1[_i];
    var ordinalSuffix = getOrdinalSuffix(num);
    console.log("".concat(num).concat(ordinalSuffix));
}
