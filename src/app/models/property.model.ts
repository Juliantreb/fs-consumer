export class Property {
    public price: number;
    public imgName: string;
    public location: string;
    public id: string;
    public startdate: string;
    public enddate : string;

    constructor() {
        this.price=0;
        this.id= "";
        this.imgName="";
        this.location="";
        this.startdate= "";
        this.enddate=""
    }
}