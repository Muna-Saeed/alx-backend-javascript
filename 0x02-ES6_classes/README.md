# 0x02. ES6 classes

### Task 0: ClassRoom

This task involves implementing a class named `ClassRoom` with a constructor that accepts one parameter `maxStudentsSize`. When an instance of `ClassRoom` is created using `new ClassRoom(10)`, the value `10` is assigned to the `_maxStudentsSize` attribute.

### Task 1: Initialize Rooms

In this task, we import the `ClassRoom` class from `0-classroom.js` and implement a function named `initializeRooms`. This function returns an array of 3 `ClassRoom` objects with the sizes 19, 20, and 34.

### Task 2: HolbertonCourse

This task involves implementing a class named `HolbertonCourse` with constructor attributes `name`, `length`, and `students`. We also implement getters and setters for each attribute.

### Task 3: Currency

We implement a class named `Currency` with constructor attributes `code` and `name`, and implement getters and setters for each attribute. Additionally, we implement a method named `displayFullCurrency` that returns the attributes in the format `name (code)`.

### Task 4: Pricing

In this task, we import the `Currency` class from `3-currency.js` and implement a class named `Pricing` with constructor attributes `amount` and `currency`. We implement getters and setters for each attribute, a method named `displayFullPrice` to return the attributes in a specific format, and a static method named `convertPrice`.

### Task 5: Building

Implement a class named `Building` with constructor attribute `sqft` and a getter for the attribute. This class is considered as an abstract class, and any class that extends from it should implement a method named `evacuationWarningMessage`.

### Task 6: SkyHighBuilding

Extend the `Building` class with a class named `SkyHighBuilding` and add constructor attributes `sqft` and `floors`. Implement getters for each attribute and override the method `evacuationWarningMessage`.

### Task 7: Airport

Implement a class named `Airport` with constructor attributes `name` and `code`. The default string description of the class should return the airport code.

### Task 8: HolbertonClass

Implement a class named `HolbertonClass` with constructor attributes `size` and `location`. When the class is cast into a Number, it should return the size, and when cast into a String, it should return the location.

### Task 9: Hoisting

Fix the code provided by defining the `HolbertonClass` and `StudentHolberton` classes properly. Ensure that the `StudentHolberton` class includes the required getter and setter methods, and fix the issue with the `fullStudentDescription` method.

### Task 10: Car

Implement a class named `Car` with constructor attributes `brand`, `motor`, and `color`. Add a method named `cloneCar` that returns a new object of the class.

These tasks involve implementing various classes and their functionalities as per the provided specifications. Each task requires understanding the requirements and implementing the necessary classes and methods accordingly.y

