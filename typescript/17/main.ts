//Creating a Guest List Array
let guestList = ["arif","peter","atif","professor","chopra","munu","papu"];

//Making variable for those guest who cant come 
let dontCome = guestList[0];

//print the name of guest who cant come
console.log(dontCome, "is not coming");

//Add or remove values from Guest List Array
guestList.splice(0,1,"aamir"); 

//Message print for Bigger Table
console.log("Good News ! We have found a bigger table ");

//Adding a New Value at starting index of Array

guestList.unshift("Asad"); 

// Adding a New Value at the end of Index Array
guestList.push("Zahoor");

//Get a middle index of guest list Array
let middleIndex: number = Math.floor(guestList.length/2);

//adding a new guest to middle index of Array
guestList.splice(middleIndex,0,"usama");

//Print Message of Updated List
console.log("Update List of Our Guest");

//sending Invitation  mssage to Our guest one by one
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, Would You Like to Dinner With Me`));

//inform that only two guests can be invited for dinner
console.log("unfortunately, the new taable won't arrive on time , so I can only invite two guests dinner with me ");

//using while loop,Remove guests from your list one at a time until only two names remain in your list. 
//Each time you pop a name from your list, 
//print a message to that person letting them know you’re sorry you can’t invite them to dinner.

while(guestList.length>2){
    let removedGuest = guestList.pop();
    console.log(`Sorry! ${removedGuest} i can not invite you to dinner.`);
}

//Print a message to each of the two people still on your list, letting them know they’re still invited.
console.log("Invitation to the last two guests");
guestList.forEach(lasttwo =>console.log(`Luckily  ${lasttwo},You are still invited for dinner`));

//Remove the last two names from your list,
//  so you have an empty list. 
//  Print your list to make sure you actually have an empty list at the end of your program.
guestList.pop();
guestList.pop();

console.log("Empty list",guestList);
