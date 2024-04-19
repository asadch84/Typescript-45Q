//Creating a Guest List Array
var guestList = ["arif", "peter", "atif", "professor", "chopra", "munu", "papu"];
//Making variable for those guest who cant come 
var dontCome = guestList[0];
//print the name of guest who cant come
console.log(dontCome, "is not coming");
//Add or remove values from Guest List Array
guestList.splice(0, 1, "aamir");
//Message print for Bigger Table
console.log("Good News ! We have found a bigger table ");
//Adding a New Value at starting index of Array
guestList.unshift("Asad");
// Adding a New Value at the end of Index Array
guestList.push("Zahoor");
//Get a middle index of guest list Array
var middleIndex = Math.floor(guestList.length / 2);
//adding a new guest to middle index of Array
guestList.splice(middleIndex, 0, "usama");
//Print Message of Updated List
console.log("Update List of Our Guest");
//sendin mssage to Uor guest one by one
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", Would You Like to Dinner With Me")); });
