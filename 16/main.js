// creating a guest list array
var guestList = ["Hamza", "Ali", "Ayesha", "Saira"];
// making veriable for those guest who cont come
var dontCome = guestList[0];
// print the name of guest who cont come
console.log(dontCome, "Nhi aa sakta");
// add or remove values from guest list array
guestList.splice(0, 1, "Ahmad");
// message print for bigger table 
console.log("Goods News ! We have found a bigger table for dinner");
// adding a new value at starting index of array
guestList.unshift("Ahsan");
// adding a new value at ending index of array
guestList.push("Zain");
// get a middle index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
// adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Usama");
// print message of updated list 
console.log("updated list of our guests");
// sending a invitation message to our guests one by one with thier names
guestList.forEach(function (oneguest) { return console.log("Salaam ".concat(oneguest, ", would you like to dinner with me")); });
