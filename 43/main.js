//
var Magicians = ["Tickola", "MR Beans", "Gippy"];
var GreatMagicians = [];
function make_great(list) {
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var item = list_1[_i];
        GreatMagicians.push("The Great Man " + item);
    }
    return GreatMagicians;
}
function ShowMagicians(list) {
    console.log("----------------------------------");
    for (var _i = 0, list_2 = list; _i < list_2.length; _i++) {
        var item = list_2[_i];
        console.log(item);
    }
}
var GreatMag = make_great(Magicians);
// calling a function
ShowMagicians(Magicians);
ShowMagicians(Magicians);
