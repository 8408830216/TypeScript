var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
;
console.log(Gender.female); //it will print index
console.log(Gender.male);
console.log(Gender[0]); //it will print value
console.log(Gender[1]);
var WeekEnds;
(function (WeekEnds) {
    WeekEnds[WeekEnds["Saturday"] = 6] = "Saturday";
    WeekEnds[WeekEnds["Sunday"] = 7] = "Sunday";
})(WeekEnds || (WeekEnds = {}));
;
console.log(WeekEnds[6]);
console.log(WeekEnds[7]);
