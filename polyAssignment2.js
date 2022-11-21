var Organizer = /** @class */ (function () {
    function Organizer(id, name) {
        this.id = id;
        this.name = name;
    }
    return Organizer;
}());
;
var objOrganizer = new Organizer(1234, "Prashant Patil");
console.log("Id:-".concat(objOrganizer.id, "  Name :- ").concat(objOrganizer.name));
var Events = /** @class */ (function () {
    function Events(id, name, description, startTime) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.startTime = startTime;
    }
    ;
    return Events;
}());
;
var objEvent = new Events(2244, "Shon Patil", "Sports day celebration", "04:00PM");
console.log("Id:-".concat(objEvent.id, "  Name:-").concat(objEvent.name, "  Description:-").concat(objEvent.description, "  startTime:-").concat(objEvent.startTime));
var Venue = /** @class */ (function () {
    function Venue(id, name, description, address) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
    }
    return Venue;
}());
;
var objVenue = new Venue(87544, "Prashant Mali", "Sports day celebration", "Balewadi Stadium Pune");
console.log("Id:-".concat(objVenue.id, "  Name:-").concat(objVenue.name, "  Description:-").concat(objVenue.description, "  Address:-").concat(objVenue.address));
