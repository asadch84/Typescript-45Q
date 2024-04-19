let guestList = ["arif","peter","atif","professor","chopra","munu","papu"];

// let dontCome = guestList[0];

// console.log(dontCome, "is not coming");

guestList.splice(0,1,"aamir"); 

guestList.forEach(guest =>console.log(`salam, ${guest}, would you like to dinner with me?`));


