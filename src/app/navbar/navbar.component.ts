import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReglogService } from '../services/reglog.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn : Observable<boolean>;

  constructor(private userService:ReglogService) {
    this.isLoggedIn = userService.isLoggedIn();
   }

  ngOnInit(): void {
  }
  Signout(){
    this.userService.SignoutUser();
  }

}

