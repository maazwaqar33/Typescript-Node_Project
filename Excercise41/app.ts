
//The function should always receive a manufacturer and a model name. 
//It should then accept an arbitrary number of keyword arguments. 
//Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
//Print the Object that’s returned to make sure all the information was stored correctly.

// Write a function that stores information about a car in a Object. 
function storeCarinfo(manufacturer: string, model: string, ...properties: [string, any] []) : any {
   // Create an object to store the car information
   const car : any = {
      manufacturer,
      model,
   };

    // Assign optional properties to the object
    for (const [key, value] of properties) {
      car[key] = value;
    }

    return car;
   
}
// Call the function with required and optional information
const carDetails : string = storeCarinfo("Toyota", "Camry", ["paint", "red"], ["year", 2022], ["feature", "sunroof"], ["speed", "280 kph"]);

console.log(carDetails)