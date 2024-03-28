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
    mobile: ['']
  })






  onsubmit(){
      const values = this.signupForm.value
      console.log(values);
      
  }

}
