import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  implements OnInit{

  constructor( private fb:FormBuilder,private userService:UserService,private route:Router , private commonsrv:CommonService){}
  errMsg = ''
  maxDate!:Date
  lastDonate!:String

  signupForm = this.fb.group({
    fullname : [''],
    mobile: [''],
    email:[''],
    bloodGroup:[''],
    password:[''],
    confirmPassword:[''],
    dob:[''],
    houseName:[''],
    city:[''],
    lastd_date:[''],
    district:[''],
    state:[''],
    pin:[''],
    gender:['']
  })


ngOnInit(): void {
  this.calcuteMaxDate()

  // This prevents the user from selecting a future date or a date exceeding the current date in the "Last Donated Date" field.
  const currentDate = new Date()
  this.lastDonate = currentDate.toISOString().slice(0, 10) 
    
}



// show date to ensure dob is greaterthan 18

calcuteMaxDate(){
  const today = new Date()
  console.log(today);
  const year = today.getFullYear()-18
  const month = today.getMonth()
  const day = today.getDate()
  console.log(day);
   this.maxDate = new Date(year, month, day)
  
  console.log(year);
  
  


}



  onsubmit(){
      const values = this.signupForm.value
      console.log(values);
      this.userService.userSignup(values).subscribe({
        next:(data)=>{
          console.log(data);
          this.verifying()
          
        },
        error:(err)=>{
          this.errMsg = err.error.message
          console.log(this.errMsg);
          console.log(err);
        }
      })
      
  }



  verifying(){
    this.route.navigateByUrl('/verification')
    console.log('move to otp[ ');
  }

}
