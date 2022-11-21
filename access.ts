class Student {
    private _userName: string;  //we hide the username purposefully
    get name() : string {
        // format
        return this._userName;
    }
    set name(name: string) {      //we use the set and get method to call the private properties outside the class
            this._userName = name;
    }
    display() {
        console.log(this._userName);}
    }
    var objstudent = new Student();
    objstudent.name = "Codemind";
    console.log(objstudent.name);