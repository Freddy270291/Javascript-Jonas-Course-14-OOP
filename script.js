'use strict';
// OBJECT ORIENTED PROGRAMMING - code organization

// OOP is a programming paradigm (style of code, how we write and organize code) based on the concept of objects
// We use objects to model (describe) real-world (e.g. user or todo list item) or abstract features (e.g. HTML component or data structure)
// Objects may contain data (properties) and code (methods). By using objects, we pack data and the corresponding behavious into one block.

// In OOP, objects are self-contained pieces/blocks of code
// Objects are building blocks of applications, and interact with one another
// These interactions happen through a PUBLIC INTERFACE (API): methods that the code OUTSIDE of the project can access and use to communicate with the object

// CLASSES: In OOP, we need a way to generate new objects from our code.
// We use the classes, that are the blueprint used to create new objects based on the rules described in the class
// INSTANCES of a class = all the objects created from that class (the class is not an object)

// THE 4 FUNDAMENTAL PRINCIPALS OF OOP
// a. ABSTRACTION: Ignoring or hiding details that don't matter, allowing us to get an overview perspective of the thing we're implementing, instead of messing with details that don't really matter to our implementation.
// b. ENCAPSULATION: Keeping properties and methods PRIVATE inside the class, so they are NOT ACCESSIBLE from outside the class. Some methods can be exposed as a public interface (API).
// c. INHERITANCE: When we have 2 classes that are closely related, we can have one class inherit from the other. We will have the child class that extends the parent class. Making all properties and methods of a certain class AVAILAVLE TO A CHILD CLASS, forming a hierarchical relationship between classes. This allows us to reuse common logic and to model real-world relationships.
// d. POLYMORPHISM: a child class can OVERWRITE a method it inherited from a parent class

// OBJECT ORIENTED PROGRAMMING IN JAVASCRIPT:
// In Javascript we have PROTOTYPES, and all Objects are LINKED to a prototype object.
// The Prototype objects contains methods and properties that all the objects that are linked to that prototype can access and use. This behaviour is called PROTOTYPAL INHERITANCE.
// Objects inherit methods and properties from their prototype (link an instance inheriting from a class)
// BEHAVIOR (it means, methods) is DELEGATED to the linked prototype object (Objects delegate their behavior to the protoype)

/* 3 WAYS OF IMPLEMENTING PROTOTYPAL INHERITANCE IN JS */

// 01. CONSTRUCTOR FUNCTIONS
// Are a way of creating objects programmatically using functions,which will also set the new objects' prototype.
// This is how built-in objects like Arrays, Maps or Sets are implemented.

// 02. ES6 CLASSES
// It's the modern alternative toconstrutor function syntax. They are "syntactic sugar": it is a nicer syntax that make easier to do OOP in JS (do not behave like classesin "classical OOP")

// 03. Object.create()
// It's the easiest and most straightforward way of linking an object to a prototype object.

////////////////////// THE CONSTRUCTOR FUNCTION and the NEW OPERATOR
// We can use constructor functions to build an object using a function.
// It is actually a normal function, with the difference that we call the constructor function with the NEW OPERATOR

// Convention: The constructor function starts with a capital letter
// Only function declaration and function expression, not arrow functions because we need the THIS keyword!

/*
const Person = function (firstName, birthYear) {
  // console.log(this); // result: Person{} ==> Whatever we add to this empty object will be returned at the end from the function
  // Instance properties:
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Methods: NEVER CREATE A METHOD INSIDE OF A CONSTRUCTOR!! (DRY)
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const federico = new Person('Federico Giovannini', 1991);

// Behind the scenes (when we call a new operator)
// 1. New empty object {} is created;
// 2. The function is called and the THIS keyword will be set to this newly created object ==> this = {}
// 3. This newly created object is linked to a prototype ==> it created the __proto__ property on the object to the prototype property of the constructor
// 4. The object created in the beginning is automatically returned from the constructor function ==> function return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(federico, matilda, jack);

// Check if instance:  instanceof
console.log(federico instanceof Person); //==> True of false

// PROTOTYPES
// First, each function in JS has automatically a property called prototypes, that includes constructor functions.

// Add a method (all the objects created with the function new Person can use this method:
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// All the objects created through the constructor function "Person" will have access (inherit) to all the prototype properties that are defined on it
federico.calcAge();
// We can use this method on the instance even if it is not contained inside of it!

// To check the prototype of the object:  .__proto__
console.log(federico.__proto__);

// We can set a property of the prototype common to all the instances:
Person.prototype.species = 'Homo Sapiens';
// This is NOT an own property of the object, but it is ofthe __proto__
// TO check if the object has its own property:

console.log(federico.hasOwnProperty('firstName')); // True
console.log(federico.hasOwnProperty('species')); // False - it's inherited

/* PROTOTYPAL INHERITANCE AND THE PROTOTYPE CHAIN */
// If a property or a method is not found in a certain object, JS will look into its prototype (Prototypal inheritance / Delegation)
// Prototype chain: the ability of looking up method and properties in the prototype
// Person.prototype has a prototype, that is Object.prototype (it comes from {}, that is like writing new Object() in a shorter way)
/*

Array.prototype.unique = function () {
  return [...new Set(this)];
}; // All Arrays will inherit this method!

const arr = [1, 2, 2, 2, 3, 4, 4, 4, 4, 5, 5, 1, 1, 2, 3, 4, 5, 6, 4, 3, 3, 4];
console.log(arr.unique());

// Generally is not a good idea for bigger projects:
// The next versions of JS may add the same methods but work in a different way
// Not good in working in a team
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀


const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.brake();

mercedes.brake();
mercedes.accelerate();
*/

/* ES6 CLASSES */
// They allow us to do the same thing as prototype but with a nicer syntax
// Classes in JS are just "syntatic sugar", they implement prototype inheritance but with a nicer syntax

// Class expression: (classes are special cases of function)
// class Person = class {}
/*
// Class declaration:
class Person {
  // There should always be a contructor (we pass the arguments for the properties that we want the object to have):
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // methods, inside the class but outside the constructor (they will be on the prototype of the object, not on the object itself):
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }
  // Set a property that already exists:
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    // siccome si crea un metodo (fullName) che è uguale ad uno dei parametri, si una per convenzione un _ prima: _fullName
    else alert(`${this.name} is not a full name`);
  }

  // usando _fullName abbiamo creato un nuovo metodo, bisogna usare un getter:
  get fullName() {
    return this._fullName;
  }

  // STATIC METHOD (not available on the instances, only calling the class.. in this case, Person.hey()):
  statis hey() {
    console.log('Hey there!')
  }
}

const jessica = new Person('Jessica Jones', 1999);
jessica.calcAge();
console.log(jessica.age);

// We can also a method also outside the class with the prototype:
Person.prototype.greet = function () {
  console.log(`Hello ${this.firstName}`);
};
jessica.greet();

// Classes are NOT hoisted (we can't use them before we declare them in the code)
// Classes are first-class citizens: we can past them into function and return them from functions
// The body of the class are always executed in strict mode

////////// SETTERS AND GETTERS PROPERTIES
// They are functions that get and set a value (they still look like regular properties)

const account = {
  owner: 'jones',
  movements: [200, 300, -150, 420],

  // GETTER:
  get latest() {
    return this.movements.slice(-1).pop();
  },

  // SETTER (they need EXACTLY one parameter)
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // we don't call a method, we just use it like a property!
account.latest = 50; // We SET the last value
console.log(account.movements);
*/

/*
///////// OBJECT.CREATE
// There are no prototype inheritance properties and no constructor functions and new operators
// instead, we can use object.create to manually set a prototype of an object to any other object that we want

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto); // this returns a new object that is linked to the prototype that we past inside
// this is an empty object that has the __proto__ properties of the prototype
steven.name = 'Steven';
steven.birthYear = 2000;
steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
*/
