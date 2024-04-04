var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countriesToVisit = ["China", "Denmark", "Brazil", "Argentina"];
console.log("orignal order:", countriesToVisit);
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
console.log("still in orignal order:", countriesToVisit);
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
console.log("still in orignal order:", countriesToVisit);
console.log("orignal array reversed:", countriesToVisit.reverse());
console.log("back to orignal order:", countriesToVisit.reverse());
console.log("sorted in alphabetical order:", countriesToVisit.sort());
console.log("orignal array reversed again:", countriesToVisit.reverse());
