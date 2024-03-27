function Car(type, fuelType) {
    this.type = type;
    this.fuelType = fuelType;
}

function setBrand(brand) {
    Car.apply(this, ["convertible", "petrol"]); //Syntax with array literal
    this.brand = brand;
    console.log(`Car details = `, this);
}

function definePrice(price) {
    Car.apply(this, new Array("convertible", "diesel")); //Syntax with array object construction
    this.price = price;
    console.log(`Car details = `, this);
}

const newBrand = new setBrand('Brand1');
const newCarPrice = new definePrice(100000);

/*

The call() and apply() methods in JavaScript are used to call a function with a specified this value and arguments. The this value is the object that the function is called on. The arguments are the values that are passed to the function.
The call() method takes two arguments:
the this value and a list of arguments.
The apply() method takes three arguments:
The this value and An array of arguments.

*/