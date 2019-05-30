import { property } from './property.model';

export class pasttrip extends property {
    public startdate: string;
    public enddate: string;
    
    constructor() {
        super();
        this.startdate="";
        this.enddate="";
    }
}