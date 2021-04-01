import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  register(){
    this.submitted = true;
    if (this.registerForm.invalid){
      return;
    }
    let users = JSON.parse(localStorage.getItem("users") || '[]')
    users.push(this.registerForm.value);
    localStorage.setItem("users",JSON.stringify(users));
    this.route.navigate(['/login'])
  }
  passwordValidator(group: AbstractControl):  {[key:string]:boolean} | null{
    const  password  =  group.get('password');
    const confirmPassword  = group.get('confirmpassword');
    // console.log(password?.value , confirmPassword?.value);
    if (password?.pristine || confirmPassword?.pristine){
      return null ;
    }
    return password && confirmPassword && password.value !== confirmPassword.value ?
    {'misMatch': true } :
    null ;
  }
}
