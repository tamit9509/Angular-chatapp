import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass', '../auth.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  submitted: boolean;
  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    })
  }

  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
    if (this.signupForm.invalid) { return; }
    const data = new RegisterUser(this.signupForm);
  }
  get controls() { return this.signupForm.controls; }

}
