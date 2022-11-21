class Check{
    static bankName:string="Bank Of Maharashtra";
    customerName:string;
    accNo:number;
    display(){
        // Check.bankName="Bank Of Baroda"; //we will upadate the bankName also
        console.log(Check.bankName);     //to access the static bankname we implement this display
        
    };
};
var objName=new Check();
//objName.bankName; it is not possible to access static property outside the class so we need to add method 
//into the class
objName.display();

   