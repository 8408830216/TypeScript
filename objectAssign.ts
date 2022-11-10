let employees={
    id:"142",
    name:"Prashant",
    company:"Google",
    city:"Pune"
}
console.log("------------------Object traversing---------------");

for(var e in employees){
    console.log(employees[e]);
   
}

console.log("------------------Object Destructuring---------------");
console.log("Id:-",employees.id);
console.log("Name:-",employees.name);
console.log("Company:-",employees.company);
console.log("City:-",employees.city);