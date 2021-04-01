import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private route: Router) { }
  users:any[]=[]
  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem("users") || '[]');
  }
  login(){
    this.submitted = true;
    if (this.loginForm.invalid){
      return;
    }
    let user = this.users.find(x => x.email == this.loginForm.value.email && x.password == this.loginForm.value.password)
    if (user == undefined){
      alert('Verifier votre information')
      this.loginForm.reset();
      this.submitted = false;
    }else{
      localStorage.setItem("user-connected",JSON.stringify(user));
      this.route.navigateByUrl('/dashbord')
    }
    
  }

}
