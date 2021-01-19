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
