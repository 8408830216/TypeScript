class Passenger {
    fName:string;
    lName:string;
    frequentFlyNum:number;
    constructor(fName:string,lName:string,frequentFlyNum:number){
        this.fName=fName;
        this.lName=lName;
        this.frequentFlyNum=frequentFlyNum;
    }
};

var passenger =new Passenger("Jack","Sparrow",123);

console.log(passenger.fName + " "+ passenger.lName+" " +passenger.frequentFlyNum);
