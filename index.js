// Store Details
const storeName = "Respawn HQ";
const storeType = "Repair Store";

// Product Names and Prices
let products = ["Phone Case", "Laptop Case", "PC Solid State Drive/Hard Drive", "Phone Charger", "Laptop Charger"];
let productPrices = [20.00, 30.00, 90.00, 25.00, 40.00];

// Services and Prices
const services = ["Screen Replacement", "Battery Replacement", "Back Glass Replacement", "Keyboard Replacement", "Custom PC Build"];
const servicePrices = [120.00, 50.00, 100.00, 80.00, 200.00];

// Store Hours
const storeHours = "Monday - Friday: 9 AM - 6 PM"


// Welcome Message
console.log(`Welcome to ${storeName}! We are the best ${storeType} in town.`);
console.log("Here are the products we currently offer:");
console.log("Products:", products);
console.log("Prices:", productPrices);

// Adding a new product
products.push("PC Solid State Drive");
productPrices.push(90.00);
console.log("We've added a new product! Products:", products);
console.log("Updated Prices:", productPrices);

// Removing a product due to stock issues
products.pop();
productPrices.pop();
console.log("Unfortunately, our SSD is out of stock. Products:", products);
console.log("Updated Prices:", productPrices);

// Display featured products
const featuredProducts = products.slice(0, 2);
console.log("This week, our featured products are:", featuredProducts);

// Adding new arrivals
const newProducts = ["Tablet Case", "Smart Watch", "Wireless Earbuds"];
const newProductPrices = [25.00, 250.00, 80.00];
products = products.concat(newProducts);
productPrices = productPrices.concat(newProductPrices);
console.log("We have new arrivals! Products:", products);
console.log("Updated Prices:", productPrices);

// Services Offered
console.log("Here are the services we offer:");
console.log("Services:", services);
console.log("Service Prices:", servicePrices);

// Closing Message and Store Hours
console.log(`Thank you for shopping at ${storeName}! We hope to see you again soon.`);
console.log(`Our store hours are as follows: ${storeHours}`);
