import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
email=""
password=""
constructor(private router:Router){}
readValue=()=>
{
  let data:any={"email":this.email,"password":this.password}
  console.log(data)
  if (this.email=="abc" && this.password=="123") {
    this.router.navigate(['/searchlog'])
  } else {
    alert("wrong details")
  }
}
}
