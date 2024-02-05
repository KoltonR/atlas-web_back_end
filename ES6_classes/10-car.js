/* 10. Vroom
* Implement a class named Car:
* Constructor attributes:
*   @brand (String)
*   @motor (String)
*   @color (String)
* Each attribute must be stored in an “underscore” attribute version
*  (ex: name is stored in _name)
*   Add a method named cloneCar.
* This method should return a new object of the class.
*   Hint: Symbols in ES6
*/

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    // Create a new object with the same prototype as this object
    const newCar = Object.create(Object.getPrototypeOf(this));
    // Copy the attributes to the new object
    newCar._brand = this._brand;
    newCar._motor = this._motor;
    newCar._color = this._color;
    return newCar;
  }
}

export default Car;
