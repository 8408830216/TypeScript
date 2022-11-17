var Passenger = /** @class */ (function () {
    function Passenger(fName, lName, frequentFlyNum) {
        this.fName = fName;
        this.lName = lName;
        this.frequentFlyNum = frequentFlyNum;
    }
    return Passenger;
}());
;
var passenger = new Passenger("Jack", "Sparrow", 123);
console.log(passenger.fName + " " + passenger.lName + " " + passenger.frequentFlyNum);
