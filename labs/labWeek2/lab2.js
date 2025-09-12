// Student: Breno Lopes Mafra
// Student ID: 101485572

// ----------------------------------------------------------------

// Exercise 1: Rewrite the following code block using ES6 syntax,
//  ie. const, let, arrow function, template literalsand for..of

const greeter = (myArray, counter) => {
  const greetText = 'Hello';

  for (const name of myArray) {
    console.log(`${greetText} ${name}`);
  }
};

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

// ----------------------------------------------------------------

// Exercise 2: Using destructuring assignment syntax and the spread operator, 
// write a function will capitalize the first letter of a string

const capitalize = (word) => {
  const [first, ...rest] = word;
  const firstLetter = first.toUpperCase();
  const remainingLetters = rest.join('');
  return firstLetter + remainingLetters;
};

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));

// ----------------------------------------------------------------

// Exercise 3: Using array.proto.map create function to use the capitalize 
// method in Exercise 2 to upper casethe first character of each Color in the following array..

const capital = (word) => {
  const [first, ...rest] = word;
  const firstLetter = first.toUpperCase();
  const remainingLetters = rest.join('');
  return firstLetter + remainingLetters;
};

const colors = ['red', 'green', 'blue'];

const capitalizedColors = colors.map(color => capital(color));

console.log(capitalizedColors);

// ----------------------------------------------------------------

// Exercise 4: Using array.proto.filter create a function that will 
// filter out all the values of the array that are less than twenty.

const values = [1, 60, 34, 30, 20, 5];

const filterLessThan20 = values.filter(value => value < 20);

console.log(filterLessThan20);

// ----------------------------------------------------------------

// Exercise 5: Using array.proto.reduce create calculate the sum and product of a given array.

var array = [1, 2, 3, 4];

var calculateSum = array.reduce((acc, curr) => acc + curr, 0);
var calculateProduct = array.reduce((acc, curr) => acc * curr, 1);

console.log(calculateSum);
console.log(calculateProduct);

// ----------------------------------------------------------------

// Exercise 6: Using ES6 syntax for class and subclass using extends to create a Sedan subclass 
// which derives from Car Class. The parameters for the Car class is the model and year. The 
// parameters for the subclass is the model, year and balance.
// Use the super key word in the Sedan subclass to set the model and name in base Car constructor.

class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }

  details() {
    return `Model: ${this.model}, Year: ${this.year}`;
  }
}

class Sedan extends Car {
  constructor(model, year, balance) {
    super(model, year);
    this.balance = balance;
  }

  info() {
    return `${this.details()}, Balance: $${this.balance}`;
  }
}

const car = new Car('Pontiac Firebird', 1976);
console.log(car.details());

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());


