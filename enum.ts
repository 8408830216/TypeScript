enum Gender {
    male,
    female
};

console.log(Gender.female);    //it will print index
console.log(Gender.male);     

console.log(Gender[0]);  //it will print value
console.log(Gender[1]);

enum WeekEnds {
    Saturday = 6,Sunday = 7
};
console.log(WeekEnds[6]);
console.log(WeekEnds[7]);