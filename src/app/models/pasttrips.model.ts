import { Property } from './property.model';

export class pasttrips extends Property {
    public startdate: string;
    public enddate: string;
    public name: string;
    
    constructor() {
        super();
        this.startdate="";
        this.enddate="";
        this.name=";"
    }
}