export class Runner {
    public photo: string;
    public firstname: string;
    public name: string;
    public distance: string;
    public dossard : string;
    public age: any;
    public sexe: string;

    


    constructor(firstname: string,  name: string, distance: string, age: any, sexe: string)  { //, distance: string
        this.firstname = firstname;
        this.name = name;
        this.distance = distance;
        this.age = age;
        this.sexe = sexe;
    }
}

