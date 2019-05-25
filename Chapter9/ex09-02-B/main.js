class Car {
    constructor() {        
    }
}

class InsurancePolicy {
}

function makeInsurable(o) {
    o.addInsurancePolicy = function(p) { this.InsurancePolicy = p; }
    o.getInsurancePolicy = function() { return this.InsurancePolicy; }
    o.isInsured = function() { return !!this.InsurancePolicy; }
}

makeInsurable(Car.prototype);

const car1 = new Car();
console.log(car1.isInsured());
car1.addInsurancePolicy(new InsurancePolicy());
console.log(car1.isInsured());

const car2 = new Car();
console.log(car2.isInsured());
car1.addInsurancePolicy(new InsurancePolicy());
console.log(car2.isInsured());