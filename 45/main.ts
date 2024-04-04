function CarInfo(Manufacturer:string,Model:string, ...optional:[string,any][]):object{
    let Car:object={
        "Manufacturer":Manufacturer,
        "Model":Model
    };
    for(let item in optional){
        Car[optional[item][0]]=optional[item][1];
    }
    return Car;
}

console.log(CarInfo("Suzuki", "Mehran",["color","White"],["Engine", "VXR"],["Year",2023]));
console.log(CarInfo("Toyota", "Corolla",["color", "REd"],["Engine", "VV-I"],["Year",2024]));