// List of current usernames
const current_users: string[] = ['John', 'Alice', 'Bob', 'Eva', 'Mike'];

// List of new usernames
const new_users: string[] = ['Alice', 'Mike', 'Sarah', 'Tom', 'Eva'];

// Function to check if a username is already taken
function checkUsernames(current_users: string[], new_users: string[]): void {
    for (const new_username of new_users) {
        const isTaken = current_users.some(
            (current_username) => current_username.toLowerCase() === new_username.toLowerCase()
        );

        if (isTaken) {
            console.log(`Username '${new_username}' is not available. Please enter a new username.`);
        } else {
            console.log(`Username '${new_username}' is available.`);
        }
    }
}

// Calling the function to check usernames
checkUsernames(current_users, new_users);
