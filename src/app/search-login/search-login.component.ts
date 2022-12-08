import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-login',
  templateUrl: './search-login.component.html',
  styleUrls: ['./search-login.component.css']
})
export class SearchLoginComponent {
  constructor(private api:ApiService){
    api.fetchProduct().subscribe(
      (response:any)=>
      {
        this.searchData=response
      }
    )
  }
pname=""
searchData:any=[]
readValue=()=>
{
  let data:any={"pname":this.pname}
  console.log(data)
  this.api.searchProduct(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if(response.length==0)
      {
        alert("invalid product name")
      }
      else{
        this.data=[];
        this.searchData=response
      }
    }
  )
}
data:any=[]
}
