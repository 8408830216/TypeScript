var Passenger = /** @class */ (function () {
    function Passenger(fName, lName, frequentFlyNum) {
        this.fName = fName;
        this.lName = lName;
        this.frequentFlyNum = frequentFlyNum;
    }
    Passenger.prototype.display = function () {
        console.log(this.fName + " " + this.lName + " " + this.frequentFlyNum);
    };
    return Passenger;
}());
;
var passenger = new Passenger("Jack", "Sparrow", 123);
passenger.display();
var passenger2 = new Passenger("Harry", "Potter", 456);
passenger2.display();
for (var items in passenger) {
    console.log(items); //it will return the properties and method names
    console.log(passenger[items]); //it will return the values and whole method
}
