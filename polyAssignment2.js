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
var Managements = /** @class */ (function () {
    function Managements() {
    }
    Managements.prototype.display = function () {
        // console.log(`Organizer details id-${this.id}  name-${this.name}`); 
    };
    return Managements;
}());
;
var Organizer = /** @class */ (function (_super) {
    __extends(Organizer, _super);
    function Organizer(id, name) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        return _this;
    }
    Organizer.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("Id:-".concat(this.id, " Name:-").concat(this.name));
    };
    return Organizer;
}(Managements));
;
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(id, name, description, startTime) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.description = description;
        _this.startTime = startTime;
        return _this;
    }
    ;
    Events.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("Id:-".concat(this.id, "  Name:-").concat(this.name, "  Description:-").concat(this.description, "  StartTime:-").concat(this.startTime));
    };
    return Events;
}(Managements));
;
var Venue = /** @class */ (function (_super) {
    __extends(Venue, _super);
    function Venue(id, name, description, address) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.description = description;
        _this.address = address;
        return _this;
    }
    ;
    Venue.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("Id:-".concat(this.id, "  Name:-").concat(this.name, "  Description:-").concat(this.description, "  Address:-").concat(this.address));
    };
    return Venue;
}(Managements));
;
var newObj = new Array(new Organizer(2233, "Prashant"), new Events(2410, "Rohit Organizers", "Sports day Celebration", "10:00PM"), new Venue(8745, "Virat Organizers", "Sports day Celebration", "Balewadi Stadium Pune"));
for (var _i = 0, newObj_1 = newObj; _i < newObj_1.length; _i++) {
    var orgz = newObj_1[_i];
    orgz.display();
}
