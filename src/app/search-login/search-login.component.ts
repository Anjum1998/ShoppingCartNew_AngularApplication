import { Component } from '@angular/core';

@Component({
  selector: 'app-search-login',
  templateUrl: './search-login.component.html',
  styleUrls: ['./search-login.component.css']
})
export class SearchLoginComponent {
pname=""

readValue=()=>
{
  let data:any={"pname":this.pname}
  console.log(data)
}
data:any=[]
}
