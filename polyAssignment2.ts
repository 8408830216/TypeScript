class Managements {
    public id: number;
    public name: string;
    public description: string;
    public startTime: any;
    public address: string;

    public display(): void {
         // console.log(`Organizer details id-${this.id}  name-${this.name}`); 
    }
};
class Organizer extends Managements {
    public id: number;
    public name: string;
    constructor(id: number, name: string) {
         super()
         this.id = id;
         this.name = name;
    }

    public display(): void {
         super.display()
         console.log(`Id:-${this.id} Name:-${this.name}`);

    }
};
class Events extends Managements {
    description: string;
    startTime: any;
    constructor(id: number, name: string, description: string, startTime: any) {
         super()
         this.id = id;
         this.name = name;
         this.description = description;
         this.startTime = startTime;
    };
    public display(): void {
         super.display()
         console.log(`Id:-${this.id}  Name:-${this.name}  Description:-${this.description}  StartTime:-${this.startTime}`);

    }
};
class Venue extends Managements {

    description: string;
    address: string;
    constructor(id: number, name: string, description: string, address: string) {
         super()
         this.id = id;
         this.name = name;
         this.description = description;
         this.address = address;
    };
    public display(): void {
         super.display()
         console.log(`Id:-${this.id}  Name:-${this.name}  Description:-${this.description}  Address:-${this.address}`);

    }
};
let newObj: Managements[] = new Array(new Organizer(2233, "Prashant"), new Events(2410, "Rohit Organizers", "Sports day Celebration", "10:00PM"), new Venue(8745, "Virat Organizers", "Sports day Celebration", "Balewadi Stadium Pune"));
for (const orgz of newObj) {
    orgz.display();

}