let countriesToVisit: string[] = ["China", "Denmark", "Brazil", "Argentina"];
console.log("orignal order:", countriesToVisit);

console.log("Alphabetical Order:", [...countriesToVisit].sort());

console.log("still in orignal order:", countriesToVisit);

console.log("Reverse Order:", [...countriesToVisit].reverse());

console.log("still in orignal order:", countriesToVisit);

console.log("orignal array reversed:", countriesToVisit.reverse());

console.log("back to orignal order:", countriesToVisit.reverse());

console.log("sorted in alphabetical order:", countriesToVisit.sort());

console.log("orignal array reversed again:", countriesToVisit.reverse());


