console.log("================Calculator Class using Static Method===============");
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.addition = function (numAdd1, numAdd2) {
        return numAdd1 + numAdd2;
    };
    Calculator.substract = function (numSub1, numSub2) {
        return numSub1 - numSub2;
    };
    Calculator.multiplication = function (numMul1, numMul2) {
        return numMul1 * numMul2;
    };
    Calculator.division = function (numDiv1, numDiv2) {
        return numDiv1 / numDiv2;
    };
    return Calculator;
}());
;
console.log("Addition of 10 and 50 is-: ".concat(Calculator.addition(10, 50)));
console.log("Substraction of 100 and 50 is-: ".concat(Calculator.substract(100, 50)));
console.log("Multiplication of 10 and 50 is-: ".concat(Calculator.multiplication(10, 50)));
console.log("Division of 100 and 5 is-: ".concat(Calculator.division(100, 5)));
