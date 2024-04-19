// Define a type for the car information
type CarInfo = {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allows for arbitrary keyword arguments
};

// Function that stores information about a car in an object
function store_car_info(manufacturer: string, model: string, additionalInfo: Record<string, any> = {}): CarInfo {
    // Create an object representing the car information
    const car: CarInfo = {
        manufacturer,
        model,
        ...additionalInfo, // Spread operator to include additional keyword arguments
    };

    return car; // Return the car object with all the information
}

// Call the function with the required information and additional keyword arguments
const car1 = store_car_info('Toyota', 'Camry', { color: 'blue', year: 2022 });
const car2 = store_car_info('Tesla', 'Model S', { color: 'white', autopilot: true });

// Print the returned objects to make sure all information is stored correctly
console.log(car1);
console.log(car2);
