class Passenger {
    fName:string;
    lName:string;
    frequentFlyNum:number;
    constructor(fName:string,lName:string,frequentFlyNum:number){
        this.fName=fName;
        this.lName=lName;
        this.frequentFlyNum=frequentFlyNum;
    }
    display() {
        console.log(this.fName + " " + this.lName + " "+ this.frequentFlyNum);}
};

var passenger =new Passenger("Jack","Sparrow",123);

passenger.display();

var passenger2 =new Passenger("Harry","Potter",456);
passenger2.display();

for (let items in passenger) {
    console.log(items);   //it will return the properties and method names
    console.log(passenger[items]);  //it will return the values and whole method
    
    
}
