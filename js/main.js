//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [{
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt"
    }]
}

function displayFavoriteFoods(person) {
    for (let food in person) {
        if (Array.isArray(person[food])) {
            console.log(`${food}:`);
            person[food].forEach((dish) => {
                if (typeof dish === "object") {
                    for (let item in dish) {
                        console.log(`- ${dish[item]} from ${item}`);
                    }
                } else {
                    console.log(`- ${dish}`);
                }
            });
        } else if (typeof person[food] === "object") {
            console.log(`${food}:`);
            for (let shake in person[food][0]) {
                console.log(`- ${person[food][0][shake]} from ${shake}`);
            }
        } else {
            console.log(`${food}: ${person[food]}`);
        }
    }
}

// Call the function with the person3 object as argument
displayFavoriteFoods(person3);


console.log("\n \n \n")

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// Create our Person Prototype
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    printInfo = () => {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
    
    addAge = () => {
      this.age++;
    }
  }
  
  // Creating two instances of Person
  const person1 = new Person("David", 30);
  const person2 = new Person("Jimmy", 25);
  
  // Printing their info before incrementing age
  person1.printInfo();
  person2.printInfo();
  
  // Incrementing age of person1 by 3 years
  person1.addAge();
  person1.addAge();
  person1.addAge();
  
  // Printing their info after incrementing age
  person1.printInfo();
  person2.printInfo();
  
  


console.log("\n \n \n")




// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function checkStringLength(str) {
    return new Promise((resolve, reject) => {
        if (str.length > 10) {
            resolve("Big word");
        } else {
            reject("Small Number");
        }
    });
}

// Example usage:
checkStringLength("Hello World!")
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

checkStringLength("Hi there")
    .then((result) => console.log(result))
    .catch((error) => console.log(error));


// new way

async function checkStringLength1(str) {
    if (str.length > 10) {
        return "Big word new way";
    } else {
        throw "Small Number new way";
    }
}

// Example usage:
(async () => {
    try {
        const result1 = await checkStringLength1("Hello World!");
        console.log(result1); // "Big word"

        const result2 = await checkStringLength1("Hi there");
        console.log(result2);
    } catch (error) {
        console.log(error); // "Small Number"
    }
})();



console.log("\n \n \n")



// Codewars problem
// https://www.codewars.com/kata/52a382ee44408cea2500074c/solutions/python

function determinant(matrix) {
    const n = matrix.length;
    if (n === 1) {
        return matrix[0][0];
    }
    if (n === 2) {
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    }
    let det = 0;
    for (let i = 0; i < n; i++) {
        const minor = matrix.slice(1).map(row => row.filter((_, j) => j !== i));
        det += ((-1) ** i) * matrix[0][i] * determinant(minor);
    }
    return det;
}

// Test 1 - 1x1 matrix
const matrix1 = [[5]];
console.log(determinant(matrix1)); // Output: 5

// Test 2 - 2x2 matrix
const matrix2 = [[2, 3], [4, 5]];
console.log(determinant(matrix2)); // Output: -2

// Test 3 - 3x3 matrix
const matrix3 = [[6, 1, 1], [4, -2, 5], [2, 8, 7]];
console.log(determinant(matrix3)); // Output: -306

// Test 4 - 4x4 matrix
const matrix4 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
console.log(determinant(matrix4)); // Output: 0



console.log("\n \n \n")

// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript


function toCamelCase(str) {
    let words = str.split(/[_-]/);
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join("");
}
console.log(toCamelCase("the-stealth-warrior")); // theStealthWarrior
console.log(toCamelCase("The_Stealth_Warrior")); // TheStealthWarrior
console.log(toCamelCase("The_Stealth-Warrior")); // TheStealthWarrior


console.log("\n \n \n")