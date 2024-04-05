import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector:'app-otp',
    templateUrl:'./otp.component.html',
    styleUrls:['./otp.component.css']
})
export class OtpComponent{
    constructor(
        private fb:FormBuilder
    ){}


    otpForm = this.fb.group({
        otp1:['', Validators.required],
        otp2:['', Validators.required],
        otp3:['', Validators.required],
        otp4:['', Validators.required],
    })

    otpSubmit(){
        const otp = this.otpForm.value
        const otp1 = this.otpForm.get('otp1')?.value
        const otp2 = this.otpForm.get('otp2')?.value
        const otp3 = this.otpForm.get('otp3')?.value
        const otp4 = this.otpForm.get('otp4')?.value

        const combineOtp = otp1! + otp2! + otp3! + otp4

        console.log(combineOtp);
        
        
        
    }

    autoInputChange(event: any) {
        const input = event.target;
        const nextInput = event.target.nextElementSibling;
        if (input.value.length === 1 && nextInput) {
          nextInput.focus();
          // console.log('input changed auto foucs');
        }
      }
    
}