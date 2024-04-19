// Array of usernames
var usernames = [];
// Function to greet users
function greetUsers(usernames) {
    if (usernames.length === 0) {
        console.log('We need to find some users!');
        return;
    }
    for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
        var username = usernames_1[_i];
        if (username.toLowerCase() === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
// Adding usernames to the array
usernames = ['Eric', 'Alice', 'John', 'admin'];
// Calling the function to greet users
greetUsers(usernames);
// Removing all usernames from the array
usernames = [];
// Calling the function again to greet users
greetUsers(usernames);
