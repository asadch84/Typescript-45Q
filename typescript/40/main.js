function storeCarInfo(manufacturer, model) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        if (typeof arg === 'string') {
            car.color = arg;
        }
        else if (typeof arg === 'number') {
            car.year = arg;
        }
    }
    console.log("".concat(manufacturer, ", ").concat(model).concat(car.color ? ', ' + car.color : '').concat(car.year ? ', ' + car.year : ''));
    return car;
}
// Test cases
storeCarInfo("Toyota", "Camry");
storeCarInfo("Honda", "Civic", "Black");
storeCarInfo("Ford", "Mustang", 2022);
storeCarInfo("Tesla", "Model S", "Electric");
storeCarInfo("Chevrolet", "Silverado", "Truck", 2023);
storeCarInfo("Chevrolet", "Silverado", 2000, "Truck");
