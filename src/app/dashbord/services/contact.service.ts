import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }
  // Add new product (used in add-contact component)
  addcontact(userData: any){
    // return this.http.post("http://localhost:3000/Users",userData)
  }

  //Get all products (used in dashbord compnent)
  getAllcontact(){
    // return this.http.get("http://localhost:3000/Users")
  }

  //Get Product by index (used in update-contact component)
  getcontactById(id:number){
    // return this.http.get("http://localhost:3000/Users/"+id)
  }

  //Update product by index (used in update-contact compoenent)
  updatecontactDataById(updatuserData:any,id:number){
    // return this.http.put("http://localhost:3000/Users/"+id,updatuserData)
  }

  // Delete Product by index (used in dashbord component)
  deletecontactById(id:number){
    // return this.http.delete("http://localhost:3000/Users/"+id)
  }
}
