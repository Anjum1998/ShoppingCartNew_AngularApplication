import { Component } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

  name=""
  address=""
  phone=""
  email=""
  password=""
  confirm=""
  
  readValue=()=>
  {
    let data:any={ "name":this.name,"address":this.address,"phone":this.phone,"email":this.email,"password":this.password
  ,"confirm":this.confirm}
  console.log(data)
  if (this.password==this.confirm) {
    alert("successfully added")
    this.address=""
    this.confirm=""
    this.email=""
    this.name=""
    this.password=""
    this.phone=""
  } else {
    alert("password does not match")
  }
  }

}
