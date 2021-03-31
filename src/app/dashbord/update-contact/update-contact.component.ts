import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {
  submitted= false;
  updatecontactForm: FormGroup = new FormGroup({
    fName: new FormControl('',[Validators.required]),
    lName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required , Validators.email]),
    tel: new FormControl('',[Validators.required , Validators.minLength(8)]),
  })
  constructor(private contactService: ContactService) { }
  contactId:any
  ngOnInit(): void {

  }
  updateContact(){
    this.submitted = true;
    if(this.updatecontactForm.invalid){
      return;
    }
  }

}
