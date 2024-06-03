"use strict";
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    set dimensions(dimensions) {
        if (dimensions.width > 0 && dimensions.height > 0) {
            this._width = dimensions.width;
            this._height = dimensions.height;
        }
        else {
            throw new Error('Width and height must be positive numbers.');
        }
    }
    get area() {
        return this._width * this._height;
    }
}
const rectangle = new Rectangle(10, 20);
console.log(rectangle.area); // Output: 200
rectangle.dimensions = { width: 15, height: 25 }; // Calling the setter function
console.log(rectangle.area); // Output: 375
rectangle.dimensions = { width: -5, height: 30 }; // Error: Width and height must be positive numbers.
