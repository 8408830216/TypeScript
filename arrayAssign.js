var arrayOfVaccine = ["J&J", "Pfizer", "Sputnik"];
console.log("------------------Original Array---------------");
console.log(arrayOfVaccine);
console.log("------------------After adding \"Covaxin\" Array is ---------------\"");
arrayOfVaccine.push("Covaxin");
console.log(arrayOfVaccine);
console.log("------------------Traversing the Array ---------------\"");
for (var _i = 0, arrayOfVaccine_1 = arrayOfVaccine; _i < arrayOfVaccine_1.length; _i++) {
    var ele = arrayOfVaccine_1[_i];
    console.log(ele);
}
console.log("------------------Destructuring the Array ---------------\"");
console.log("First vaccine:".concat(arrayOfVaccine[0]));
console.log("Second vaccine:".concat(arrayOfVaccine[1]));
console.log("Third vaccine:".concat(arrayOfVaccine[2]));
console.log("Fourth vaccine:".concat(arrayOfVaccine[3]));
