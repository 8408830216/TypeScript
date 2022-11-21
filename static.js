var Check = /** @class */ (function () {
    function Check() {
    }
    Check.prototype.display = function () {
        // Check.bankName="Bank Of Baroda"; //we will upadate the bankName also
        console.log(Check.bankName); //to access the static bankname we implement this display
    };
    ;
    Check.bankName = "Bank Of Maharashtra";
    return Check;
}());
;
var objName = new Check();
//objName.bankName; it is not possible to access static property outside the class so we need to add method 
//into the class
objName.display();
