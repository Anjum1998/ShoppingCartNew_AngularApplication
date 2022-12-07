import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent {
pname=""
constructor(private api:ApiService){}
searchData:any=[]
readValue=()=>
{
  let data:any={"pname":this.pname}
  console.log(data)
  this.api.searchProduct(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if (response.length==0) {
        alert("invalid product name")
      } else {
       this.searchData=response
      }
    }
  )
}
}
