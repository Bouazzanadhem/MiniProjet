import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(
    private contactService: ContactService ,
    private route: ActivatedRoute ,
    private router: Router) { }
  contactId:any
  ngOnInit(): void {
    this.contactId = this.route.snapshot.params['id']
    this.contactService.getcontactById(this.contactId).subscribe((response)=>{
      this.updatecontactForm.patchValue(response)
    },(error)=>{
      console.log(error);
      
    })
    this.updatecontactForm = new FormGroup({
      fName: new FormControl('',[Validators.required]),
      lName: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required , Validators.email]),
      tel: new FormControl('',[Validators.required , Validators.minLength(8)]),
      id: new FormControl('')
    })
  }
  updateContact(){
    this.submitted = true;
    if(this.updatecontactForm.invalid){
      return;
    }
    this.contactService.updatecontactDataById(this.updatecontactForm.value,this.contactId).subscribe((response)=>{
      this.router.navigate(['/dashbord'])
    },(error)=>{
      console.log(error);
      
    });
  }

}
