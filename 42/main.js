// make a function
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The great ".concat(name); });
}
// array magicians name 
var magician_names = ["harry", "ali", "usman"];
var great_magicians = make_great(magician_names);
show_magicians(great_magicians);
