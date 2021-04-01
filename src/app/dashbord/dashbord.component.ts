import { Component, OnInit } from '@angular/core';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  constructor(private contactService: ContactService) { }
  Contacts:any
  ngOnInit(): void {
    this.contactService.getAllcontact().subscribe((response)=>{
      this.Contacts = response
    },(error)=>{
      console.log(error);
      
    })
  }
  deleteContact(id:number){
    this.contactService.deletecontactById(id).subscribe((response)=>{
      this.ngOnInit()
    },(error)=>{
      console.log(error);
      
    })
  }
}
