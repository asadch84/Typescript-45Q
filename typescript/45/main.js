var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Function that stores information about a car in an object
function store_car_info(manufacturer, model, additionalInfo) {
    if (additionalInfo === void 0) { additionalInfo = {}; }
    // Create an object representing the car information
    var car = __assign({ manufacturer: manufacturer, model: model }, additionalInfo);
    return car; // Return the car object with all the information
}
// Call the function with the required information and additional keyword arguments
var car1 = store_car_info('Toyota', 'Camry', { color: 'blue', year: 2022 });
var car2 = store_car_info('Tesla', 'Model S', { color: 'white', autopilot: true });
// Print the returned objects to make sure all information is stored correctly
console.log(car1);
console.log(car2);
