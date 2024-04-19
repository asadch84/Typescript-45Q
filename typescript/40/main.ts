
interface Car {
    manufacturer: string;
    model: string
    color?: string;
    year?: number
}

function storeCarInfo(manufacturer: string, model: string, ...args: (string | number)[]): Car {
    const car: Car = {
        manufacturer: manufacturer,
        model: model
    }

    for (const arg of args) {
        if (typeof arg === 'string') {
            car.color = arg;
        } else if (typeof arg === 'number') {
            car.year = arg;
        }
    }

    console.log(`${manufacturer}, ${model}${car.color ? ', ' + car.color : ''}${car.year ? ', ' + car.year : ''}`);

   
    return car;
}

// Test cases
storeCarInfo("Toyota", "Camry");
storeCarInfo("Honda", "Civic", "Black");
storeCarInfo("Ford", "Mustang", 2022);
storeCarInfo("Tesla", "Model S", "Electric");
storeCarInfo("Chevrolet", "Silverado", "Truck", 2023);
storeCarInfo("Chevrolet", "Silverado", 2000, "Truck");