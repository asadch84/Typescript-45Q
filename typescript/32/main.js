// List of current usernames
var current_users = ['John', 'Alice', 'Bob', 'Eva', 'Mike'];
// List of new usernames
var new_users = ['Alice', 'Mike', 'Sarah', 'Tom', 'Eva'];
// Function to check if a username is already taken
function checkUsernames(current_users, new_users) {
    var _loop_1 = function (new_username) {
        var isTaken = current_users.some(function (current_username) { return current_username.toLowerCase() === new_username.toLowerCase(); });
        if (isTaken) {
            console.log("Username '".concat(new_username, "' is not available. Please enter a new username."));
        }
        else {
            console.log("Username '".concat(new_username, "' is available."));
        }
    };
    for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
        var new_username = new_users_1[_i];
        _loop_1(new_username);
    }
}
// Calling the function to check usernames
checkUsernames(current_users, new_users);
