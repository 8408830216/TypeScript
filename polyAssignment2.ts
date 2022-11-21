class Organizer {
    public id:number;
    public name:string;
    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
    }
};
let objOrganizer=new Organizer(1234,"Prashant Patil")
console.log(`Id:-${objOrganizer.id}  Name :- ${objOrganizer.name}`);


class Events {
    public id:number;
    public name:string;
    public description:string;
    public startTime:any;
    constructor(id:number,name:string,description:string,startTime:any){
        this.id=id;
        this.name=name;
        this.description=description;
        this.startTime=startTime
    }
};

let objEvent=new Events(2244,"Shon Patil","Sports day celebration","04:00PM")
console.log(`Id:-${objEvent.id}  Name:-${objEvent.name}  Description:-${objEvent.description}  startTime:-${objEvent.startTime}`);

class Venue {
    public id:number;
    public name:string;
    public description:string;
    public address:string;
    constructor(id:number,name:string,description:string,address:string){
        this.id=id;
        this.name=name;
        this.description=description;
        this.address=address
    }
};
let objVenue=new Venue(87544,"Prashant Mali","Sports day celebration","Balewadi Stadium Pune")
console.log(`Id:-${objVenue.id}  Name:-${objVenue.name}  Description:-${objVenue.description}  Address:-${objVenue.address}`);