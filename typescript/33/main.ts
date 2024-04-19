// Array of numbers from 1 to 9
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Function to get the ordinal suffix for a number
function getOrdinalSuffix(num: number): string {
    if (num === 1) {
        return 'st';
    } else if (num === 2) {
        return 'nd';
    } else if (num === 3) {
        return 'rd';
    } else {
        return 'th';
    }
}

// Loop through the array and print the ordinal numbers
for (const num of numbers) {
    const ordinalSuffix = getOrdinalSuffix(num);
    console.log(`${num}${ordinalSuffix}`);
}
