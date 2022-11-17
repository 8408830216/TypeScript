;
//we have to strictly provide the implementation for methods and property that is declare in interface
var objProduct1 = {
    id: 123,
    productName: "IPhone",
    description: "it'a awesome",
    price: 60000,
    display: function () {
        console.log(this.id + " " + this.productName);
    }
};
var objProduct2 = {
    id: 456,
    productName: "One Plus",
    price: 40000,
    display: function () {
        console.log(this.id + " " + this.productName);
    }
};
