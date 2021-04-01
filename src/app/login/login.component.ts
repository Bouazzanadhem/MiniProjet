import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private route: Router, private userService:ReglogService) { }
  
  ngOnInit(): void {
    
  }
  login(){
    this.submitted = true;
    if (this.loginForm.invalid){
      return;
    }
    this.userService.SigninUser(this.loginForm.value)
    
  }

}
