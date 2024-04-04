let guestList = ["Saira", "Ayesha", "Hamza", "Ali"];

let dontCome = guestList[0];

console.log(dontCome, "Nai aa sakta");

guestList.splice(0, 1, "Areeba");

guestList.forEach(guest => console.log(`Salaam ${guest}, would you like to dinner with me?`));