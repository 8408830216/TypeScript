var arrayOfVaccine:string[]= ["J&J","Pfizer","Sputnik"];
console.log(`------------------Original Array---------------`);
console.log(arrayOfVaccine);
console.log(`------------------After adding "Covaxin" Array is ---------------"`);
arrayOfVaccine.push("Covaxin")
console.log(arrayOfVaccine);

console.log(`------------------Traversing the Array ---------------"`);
for (const ele of arrayOfVaccine) {
    console.log(ele);
    
}
console.log(`------------------Destructuring the Array ---------------"`);
console.log(`First vaccine:${arrayOfVaccine[0]}`);
console.log(`Second vaccine:${arrayOfVaccine[1]}`);
console.log(`Third vaccine:${arrayOfVaccine[2]}`);
console.log(`Fourth vaccine:${arrayOfVaccine[3]}`);
