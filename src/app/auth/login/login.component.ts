import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../auth.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean;
  constructor(private fb: FormBuilder, private route: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {

  }
  initSignupForm() {
    this.loginForm.addControl('name', new FormControl('', Validators.required));
    this.loginForm.addControl('confirmPassword', new FormControl('', Validators.required));
  }
  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) { return; }
  }
  get controls() { return this.loginForm.controls; }

}
