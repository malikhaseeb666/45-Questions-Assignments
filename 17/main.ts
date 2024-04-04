// creating a guest list array
let guestList = ["Hamza", "Ali", "Ayesha", "Saira"];

// making veriable for those guest who cont come
let dontCome = guestList[0];

// print the name of guest who cont come
console.log(dontCome, "Nhi aa sakta");

// add or remove values from guest list array
guestList.splice(0, 1, "Ahmad");

// message print for bigger table 
console.log("Goods News ! We have found a bigger table for dinner");

// adding a new value at starting index of array
guestList.unshift("Ahsan",);

// adding a new value at ending index of array
guestList.push("Zain",);

// get a middle index of our guest list array
let middleIndex: number = Math.floor(guestList.length / 2);

// adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Usama",);

// print message of updated list 
console.log("updated list of our guests");

// sending a invitation message to our guests one by one with thier names
guestList.forEach(oneguest => console.log(`Salaam ${oneguest}, would you like to dinner with me`));

// inform that only two guests can be invited for dinner 
console.log("Unfortuntoly ! the new dinner table wont arrive on time, so ,i can invite only two guests to dinner with me");

// use the while loope to remove guests from the array untill only two names remain
while(guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`sorry, ${removedGuest}i cant invite you to dinner`);
}
// send the invitations last 2 guest
console.log("Invitations to the last 2 Guests");

guestList.forEach(lasttwo => console.log(`Lucky ${lasttwo}, you are still invited to dinner`));

guestList.pop();
guestList.pop();

console.log("empty list :", guestList);