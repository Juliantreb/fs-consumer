import { property } from './property.model';

export class pasttrips extends property {
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