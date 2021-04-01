import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  submitted = false;
  addcontactForm:FormGroup = new FormGroup({
    fName: new FormControl('',[Validators.required]),
    lName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required , Validators.email]),
    tel: new FormControl('',[Validators.required , Validators.minLength(8)]),
  })

  constructor(
    private contactService: ContactService,
    private route: Router,
    private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }
  addContact(){
    this.submitted= true;
    if (this.addcontactForm.invalid){
      return;
    }
    this.contactService.addcontact(this.addcontactForm.value).subscribe((response:any)=>{
      this.route.navigate(['dashbord']);
      this.snackbar.open("contact added successfully", "close", {
        duration:2000,
      });
    },(error)=>{
      console.log(error);
    });
  }

}
