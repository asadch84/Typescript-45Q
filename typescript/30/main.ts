// Array of usernames
const usernames: string[] = ['admin', 'Eric', 'Alice', 'John', 'admin'];

// Function to greet users
function greetUsers(usernames: string[]): void {
    for (const username of usernames) {
        if (username.toLowerCase() === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}

// Calling the function to greet users
greetUsers(usernames);
