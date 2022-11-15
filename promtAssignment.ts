var number1 = prompt("Please enter your Maths marks ");
var number2 = prompt("Please enter your Physics marks");
var number3 = prompt("Please enter your Chemistry marks ");

console.log(`Maths marks :- ${number1}`);
console.log(`Physics marks :- ${number2}`);
console.log(`Chemistry marks :- ${number3}`);

var a = +number1;
var b = +number2;
var c = +number3;

var sum = a + b + c;
console.log("==============================================================");

console.log(`Addition of total marks is :- ${sum}`);

console.log("==============================================================");
var arg = sum / 3;
console.log(`Average of marks is :- ${arg}`);
console.log("================================================================");

if (arg < 70) {
    console.log(`Your grade is :- C`);

};

if (arg > 70 && arg < 90) {
    console.log(`Your grade is :- B`);

};

if (arg > 90) {
    console.log(`Your grade is :- A`);

}
