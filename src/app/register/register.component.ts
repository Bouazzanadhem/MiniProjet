import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ReglogService } from '../services/reglog.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  registerForm: FormGroup = new FormGroup({
    fName: new FormControl('',[Validators.required]),
    lName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required , Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    confirmpassword: new FormControl('',[Validators.required, Validators.minLength(6)]),
  },{
    validators: [this.passwordValidator]
  });

  constructor(
    private route: Router,
    private userService:ReglogService,
    private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }
  register(){
    this.submitted = true;
    if (this.registerForm.invalid){
      return;
    }
    this.userService.SignupUser(this.registerForm.value)
    this.route.navigate(['/login'])
    this.snackbar.open("Sign Up with success", "close", {
      duration: 2000,

    });
  }
  passwordValidator(group: AbstractControl):  {[key:string]:boolean} | null{
    const  password  =  group.get('password');
    const confirmPassword  = group.get('confirmpassword');
    if (password?.pristine || confirmPassword?.pristine){
      return null ;
    }
    return password && confirmPassword && password.value !== confirmPassword.value ?
    {'misMatch': true } :
    null ;
  }
}
