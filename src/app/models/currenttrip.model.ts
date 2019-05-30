import { property } from './property.model';

export class currenttrip extends property {
    public startdate: string;
    public enddate: string;
    
    constructor() {
        super();
        this.startdate="";
        this.enddate="";
    }
}