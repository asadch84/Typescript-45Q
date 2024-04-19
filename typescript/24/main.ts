//Define Variable   
let apple="apple";
let uppercaseApple="APPLE";
let ten=10;
let twenty=20;
let fruits= ["apple", "banana","orange"];
//Test for equality and unequality
console.log("Is apple is equal to apple");
console.log(apple=="apple");

console.log("Is apple is not equal to apple");
console.log(apple!="apple");

//Test using Lowecase function
console.log("Is APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase()=="apple");

console.log("Is APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase()!="apple");

//Numerical Tests
console.log("\n Is ten is equal to twety?");
console.log(ten==twenty);

console.log("\n Is ten is not equal to twety?");
console.log(ten!=twenty);

console.log("\n Is ten is greater than zero?");
console.log(ten>0);

console.log("\n Is ten is less than zero?");
console.log(ten<0);

console.log("\n Is ten is greter than or equal to 5?");
console.log(ten>=5);

console.log("\n Is ten is less than or equal to 5?");
console.log(ten<=5);

console.log("\n Is ten is greter than or equal to 10?");
console.log(ten>=10);

console.log("\n Is ten is less than or equal to 10?");
console.log(ten<=10);

//Tests using "and" & "or" Operators
//using && (and)
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty !=10 && twenty>10);

console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty !=10 && twenty>30);

//using ||(or)
console.log("\n twenty is not equal to 10 or twenty is greater than 10");
console.log(twenty !=10 || twenty>10);

console.log("\n twenty is not equal to 10 or twenty is greater than 10");
console.log(twenty !=10 || twenty>30);

//Test whether an item is in a array
console.log("Is orage included my Fruits Array");
console.log(fruits.includes("orange"));

//Test whether an item is not in a array
console.log("Is orage included not  my Fruits Array");
console.log(!fruits.includes("orange"));