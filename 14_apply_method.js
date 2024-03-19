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