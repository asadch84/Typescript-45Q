function describeCity(city, country) {
    if (country === void 0) { country = "Unknown"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Calling the function for three different cities
describeCity("Karachi", "Pakistan");
describeCity("Tokyo", "Japan");
describeCity("New York");
