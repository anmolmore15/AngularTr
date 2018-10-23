import {CRM} from "./Person"


class Customer extends CRM.Person {

    private _customerId:string;
    private _customerType:string;
    private _contactNumber:string;

    constructor(fName:string,lName:string,email:string,
                location:string,birthDate:Date,gender:string,id:string,
                cstType:string,phone:string){
        super(fName,lName,email,location,birthDate,gender);
        this._customerId=id;
        this._customerType=cstType;
        this._contactNumber=phone;
    }

}