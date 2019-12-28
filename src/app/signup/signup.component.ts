import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get formControls() { return this.loginForm.controls; }

  login() {
    console.log(this.loginForm.controls);
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);
    console.log("Logged in successfully");
  }


}
