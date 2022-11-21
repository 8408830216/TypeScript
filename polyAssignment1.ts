console.log("=============================1st Practice======================================");
class Person1 {
    work(){
        console.log("Person name is Prashant Patil");  
    }
};
class Student1 extends Person1{
    work(){
        console.log("He is a student");   
    }
}
class Employee extends Person1{
    work(){
        console.log("He is an Employee");    
    }
}
class Trainer extends Person1{
    work(){
        console.log("He is a Trainer");   
    }
}
let m=new Person1();
let p=new Student1();
let q=new Employee();
let r=new Trainer();
m.work();
p.work();
q.work();
r.work();

console.log("=============================2nd Practice======================================");

class Person{
    work:string;
     Print() {
        console.log("Person name is Shon Patil");
    }
};
class Student extends Person{
constructor(work:string){
    super();
    this.work=work;
}
public Print(): void {
    super.Print()
    console.log(`${this.work} `);
}
}
class Son extends Person{
    constructor(work:string){
        super();
        this.work=work;
    }
    public Print(): void {
        console.log(`${this.work} `);
    }
}
class Family extends Person{
    constructor(work:string){
        super();
        this.work=work;
    }
    public Print(): void {
        console.log(`${this.work} `);
    }
}
let worker:Person[]=new Array(new Student("He is an Engineering Student"),new Son("He is a son of his parents"),new Family("He is a Family Member"))
for (let personIs of worker){
    personIs.Print();
}

