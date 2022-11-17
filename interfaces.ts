interface IProduct{    //In interface we have only declaration.  
    id:number;
    productName:string;
    description?:string;   //optional parameter ?
    price:number;  
    display():void;     
};

//we have to strictly provide the implementation for methods and property that is declare in interface

var objProduct1:IProduct={
    id:123,
    productName:"IPhone",
    description:"it'a awesome",
    price:60000,        // we initialize here the IProduct Interface
    display():void {
        console.log(this.id + " " + this.productName);  
    }
}

var objProduct2:IProduct={
    id:456,
    productName:"One Plus",
    price:40000,        
    display():void {
        console.log(this.id + " " + this.productName);
    }
}
