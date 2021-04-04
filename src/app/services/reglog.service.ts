import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReglogService {
  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());

  isLoggedIn() : Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  constructor(private route: Router,private snackbar: MatSnackBar) { }
  // SignUp new User (used in register component)
  SignupUser(userData: any){
    let users = JSON.parse(localStorage.getItem("users") || '[]')
    users.push(userData);
    localStorage.setItem("users",JSON.stringify(users));
  }

  // SignIn user (used in login component)
  SigninUser(userData: any){
    let users = JSON.parse(localStorage.getItem("users") || '[]');
    let user = users.find((x: { email: any; password: any; }) => x.email == userData.email && x.password == userData.password)
    if (user == undefined){
      this.snackbar.open("Verify your information", "close",{
        duration: 3000,
      });
    }else{
      localStorage.setItem("user-connected",JSON.stringify(user));
      localStorage.setItem('token','JWT');
      this.isLoginSubject.next(true);
      this.route.navigateByUrl('/dashbord')
      this.snackbar.open("Sign In with success", "close",{
        duration: 2000,
      });
    }
  }

  // SignOut user connected (used in navbar compenet)
  SignoutUser(){
    localStorage.removeItem("user-connected");
    localStorage.removeItem('token');
    this.isLoginSubject.next(false);
    this.route.navigate(['/login'])
  }
  hasToken(): boolean {
    return !!localStorage.getItem('token');
  }
}
