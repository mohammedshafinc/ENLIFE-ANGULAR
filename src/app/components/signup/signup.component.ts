import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor( private fb:FormBuilder){}

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






  onsubmit(){
      const values = this.signupForm.value
      console.log(values);
      
  }

}
