var emp = 
{name: "Dnyanesh",
score: 250
}
for(var e in emp){
    console.log(e);
    console.log(emp[e]);
}

var course:any=["Angular","ReactJs",".Net"];
course.push("Java");
course.push(100);
for (let i = 0; i < course.length; i++) {
    console.log( course[i]);
      
}
var x=course[0];
var y=course[1];
console.log(x);
console.log(y);

var std = {
    firstName: "Jack",
    lastName: "Sparrow"
}
var {firstName: userFirstname, lastName: userLastName} = std;  //we can also rename the keys name
console.log(userFirstname);
console.log(userLastName);


var s:number[]=[20,30,50,66,77]
s.splice(2,3,88,99);
console.log(s);
s.pop();
console.log(s);
s.push(21);
console.log(s);



function display(id:number, name:string, role?:string){
    console.log("Id", id);
    console.log("Name", name);
    console.log("Role", role);
}
display(1, "Dnyanesh", "Admin");
display(1, "Dnyanesh");  //"role argument" is optional parameter it will give undefine