var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("=============================1st Practice======================================");
var Person1 = /** @class */ (function () {
    function Person1() {
    }
    Person1.prototype.work = function () {
        console.log("Person name is Prashant Patil");
    };
    return Person1;
}());
;
var Student1 = /** @class */ (function (_super) {
    __extends(Student1, _super);
    function Student1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student1.prototype.work = function () {
        console.log("He is a student");
    };
    return Student1;
}(Person1));
;
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.work = function () {
        console.log("He is an Employee");
    };
    return Employee;
}(Person1));
;
var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    function Trainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Trainer.prototype.work = function () {
        console.log("He is a Trainer");
    };
    return Trainer;
}(Person1));
;
var m = new Person1();
var p = new Student1();
var q = new Employee();
var r = new Trainer();
m.work();
p.work();
q.work();
r.work();
console.log("=============================2nd Practice======================================");
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.Print = function () {
        console.log("Person name is Shon Patil");
    };
    return Person;
}());
;
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(work) {
        var _this = _super.call(this) || this;
        _this.work = work;
        return _this;
    }
    Student.prototype.Print = function () {
        _super.prototype.Print.call(this);
        console.log("".concat(this.work, " "));
    };
    return Student;
}(Person));
var Son = /** @class */ (function (_super) {
    __extends(Son, _super);
    function Son(work) {
        var _this = _super.call(this) || this;
        _this.work = work;
        return _this;
    }
    Son.prototype.Print = function () {
        console.log("".concat(this.work, " "));
    };
    return Son;
}(Person));
var Family = /** @class */ (function (_super) {
    __extends(Family, _super);
    function Family(work) {
        var _this = _super.call(this) || this;
        _this.work = work;
        return _this;
    }
    Family.prototype.Print = function () {
        console.log("".concat(this.work, " "));
    };
    return Family;
}(Person));
var worker = new Array(new Student("He is an Engineering Student"), new Son("He is a son of his parents"), new Family("He is a Family Member"));
for (var _i = 0, worker_1 = worker; _i < worker_1.length; _i++) {
    var personIs = worker_1[_i];
    personIs.Print();
}
