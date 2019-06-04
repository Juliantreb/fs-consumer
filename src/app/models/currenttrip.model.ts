import { Property } from './property.model';

export class CurrentTrip extends Property {
    public startdate: string;
    public enddate: string;
    
    constructor() {
        super();
        this.startdate="";
        this.enddate="";
    }
}