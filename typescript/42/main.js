// Function to print the name of each magician in the array
function show_magicians(magicians) {
    // Iterate through the array and print each magician's name
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Function to modify the array of magicians by adding "the Great" to each name
function make_great(magicians) {
    // Iterate through the array and modify each magician's name
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great ".concat(magicians[i]);
    }
}
// Create an array of magician's names
var magicians = ['David Copperfield', 'Penn Jillette', 'Teller', 'Criss Angel', 'Dynamo'];
// Modify the array of magicians by adding "the Great" to each name
make_great(magicians);
// Print the modified list of magicians
show_magicians(magicians);
