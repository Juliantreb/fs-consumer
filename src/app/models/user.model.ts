export class User {
    public firstname: string;
    public lastname: string;
    public livesin: string;
    public joinedin: string;
    public email: string;
   
    private age: number;
    public password: string;

    constructor() {
        this.firstname="";
        this.lastname="";
        this.livesin="";
        this.joinedin="";
        this.email="";
        this.password=""
       

    }

    public setFirstname(firstname: string) {
        this.firstname= firstname;
    }
    public getLivesIn(){
        return this.livesin
    }
    public getJoinedIn(){
        return this.joinedin
    }
    public setEmail(email: string) {
        this.email=email;
    }
    public setPassword(password:string) {
        this.password= password;
    }
   
    public setDateofBirth(dob: Date) {
        // Calculate the age
        this.age=55
    }
    public getAge() {
        return this.age;
    }
    // public setFullname(name:string) {

    // }
}
