interface IEmployee1{
    emp_id:number;
    emp_name:string;
    emp_dept:string;
};
interface IEmployee2 {
    emp_position:string;
    emp_company:string;   
};
interface Employee extends IEmployee1,IEmployee2 {
    
    emp_salary:number;
    emp_location:string;
    emp_country:string;
};
var employee:Employee={
    emp_id:210057618,
    emp_name:"Prashant Patil",
    emp_dept:"IT",
    emp_position:"Angular Developer",
    emp_company:"Google",
    emp_salary:47000,
    emp_location:"Pune",
    emp_country:"India"
};
console.log(employee);