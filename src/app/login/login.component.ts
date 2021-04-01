import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReglogService } from '../services/reglog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required , Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
  })

  constructor(private userService:ReglogService) { }
  
  ngOnInit(): void {
    console.log(JSON.parse(localStorage.getItem("user-connected") || '[]'));
    
  }
  login(){
    this.submitted = true;
    if (this.loginForm.invalid){
      return;
    }
    this.userService.SigninUser(this.loginForm.value)
    
  }

}
