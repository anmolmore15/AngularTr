export module CRM {

export class Person{
    private _firstName:string;
    private _lastName:string;
    private _email:string;
    private _location:string;
    private _birthDate:Date;
    private _gender:string;

    constructor(fName:string,lName:string,email:string,location:string,birthDate:Date,gender:string){
        this._firstName=fName;
        this._lastName=lName;
        this._email=email;
        this._location=location;
        this._gender=gender;
        this._birthDate=birthDate;
   }
    getFullName():string{
        return this._firstName+" "+this._lastName;
    }
}
}
