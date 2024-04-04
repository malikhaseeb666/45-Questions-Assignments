function CarInfo(Manufacturer, Model) {
    var optional = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        optional[_i - 2] = arguments[_i];
    }
    var Car = {
        "Manufacturer": Manufacturer,
        "Model": Model
    };
    for (var item in optional) {
        Car[optional[item][0]] = optional[item][1];
    }
    return Car;
}
console.log(CarInfo("Suzuki", "Mehran", ["color", "White"], ["Engine", "VXR"], ["Year", 2023]));
console.log(CarInfo("Toyota", "Corolla", ["color", "REd"], ["Engine", "VV-I"], ["Year", 2024]));
