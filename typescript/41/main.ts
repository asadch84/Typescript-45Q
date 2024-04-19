// Function to print the name of each magician in the array
function show_magicians(magicians: string[]): void {
    // Iterate through the array and print each magician's name
    magicians.forEach((magician) => {
        console.log(magician);
    });
}

// Create an array of magician's names
const magicians: string[] = ['David Copperfield', 'Penn Jillette', 'Teller', 'Criss Angel', 'Dynamo'];

// Pass the array of magician's names to the show_magicians() function
show_magicians(magicians);
