// Function to print the name of each magician in the array
function show_magicians(magicians: string[]): void {
    // Iterate through the array and print each magician's name
    magicians.forEach((magician) => {
        console.log(magician);
    });
}

// Function to create a new array with "the Great" added to each magician's name
function make_great(magicians: string[]): string[] {
    // Create a copy of the original array
    const greatMagicians: string[] = [];

    // Iterate through the array and add "the Great" to each name, storing in the new array
    magicians.forEach((magician) => {
        greatMagicians.push(`the Great ${magician}`);
    });

    // Return the new array with modified names
    return greatMagicians;
}

// Create an array of magician's names
const magicians: string[] = ['David Copperfield', 'Penn Jillette', 'Teller', 'Criss Angel', 'Dynamo'];

// Call make_great() with a copy of the array and store the result in a new array
const greatMagicians: string[] = make_great(magicians);

// Print the original list of magicians (unchanged)
console.log('Original Magicians:');
show_magicians(magicians);

// Print the list of magicians with "the Great" added
console.log('\nGreat Magicians:');
show_magicians(greatMagicians);
