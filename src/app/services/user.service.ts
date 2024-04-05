import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class UserService{
    constructor(private http:HttpClient){ } 
    signupApi ='http://localhost:8086/user/signup'
    otpVerifyApi = 'http://localhost:8086/user/authentication'


    userSignup(data:any):Observable<any>{
        console.log(data);
        
        return this.http.post(this.signupApi,data)
    }

    


   

}