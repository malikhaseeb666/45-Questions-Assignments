var apple = "apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banana", "orange"];
// Test for equality and inequality with strings
console.log("is apple is equal to apple?");
console.log(apple == "apple");
console.log("is apple is not equal to apple?");
console.log(apple != "apple");
// Test the lowercase functions
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "Apple");
console.log("\nIs APPLE is not equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() != "apple");
// Numerical test 
console.log("\n is ten is equal to twenty");
console.log(ten == twenty);
console.log("\n Is ten is not equal to twenty");
console.log(ten != twenty);
console.log("\nIs ten is greater than zero");
console.log(ten > 0);
console.log("\nIs twenty is less than 10");
console.log(twenty < 10);
// greater than or equal 
console.log("\nIs ten is greater than or equal to 5");
console.log(ten >= 5);
console.log("\nIs twenty is less than or equal to 10");
console.log(twenty <= 10);
// use the and,or 
console.log("\nIs twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\nIs twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);
// using || (or)
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 != 20);
// Test item in include array
console.log("\n Is orange include in my fruits array");
console.log(fruits.includes("orange"));
console.log("\n Is orange not include in my fruits array");
console.log(!fruits.includes("orange"));
