//hink of at least five places in the world you’d like to visit.
let placesToVisit: string []=["Spain", "Italy", "Germany","Portugal"," England"];

//Store and Print your array in its original order.
console.log("orignal order",placesToVisit);

//Print your array in alphabetical order without modifying the actual list.
console.log("Alphabtical order",[...placesToVisit.sort()]);

//Show that your array is still in its original order by printing it.
console.log("still in original order:",placesToVisit);

//Print your array in reverse alphabetical order wthout modifying the Actual array
console.log("Reverse order:",[...placesToVisit].reverse());

//how that your array is still in its original order by printing it again.
console.log("still in Original order:",placesToVisit);

//we have changed the original array order now
console.log("Original Array Reversed:",placesToVisit.reverse());

//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Back to original order:",placesToVisit.reverse());

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed
console.log("sorted in Alphabatical order:",placesToVisit.reverse());

//Sort to change your array so it’s stored in reverse alphabetical order. 
//Print the list to show that its order has changed.
console.log("Original Array Reversed:",placesToVisit.reverse());
