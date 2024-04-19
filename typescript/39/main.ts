function cityCountry(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Calling the function with three city-country pairs
const city1 = cityCountry("Lahore", "Pakistan");
const city2 = cityCountry("Paris", "France");
const city3 = cityCountry("New York", "USA");

console.log(city1);
console.log(city2);
console.log(city3);
