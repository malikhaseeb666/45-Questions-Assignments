// Rest Parameter Syntax
function make_sandwich() {
    var list = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        list[_i] = arguments[_i];
    }
    console.log("==================================");
    console.log("Sandwich order");
    for (var _a = 0, list_1 = list; _a < list_1.length; _a++) {
        var item = list_1[_a];
        console.log("- ".concat(item));
    }
    console.log("Enjoy your sandwich!\n");
}
make_sandwich("Ham", "Cheese", "Lettuce");
make_sandwich("Turkey", "Swiss");
make_sandwich("Peant Butter", "Jelly");
