import { Component } from '@angular/core';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent {
pname=""

readValue=()=>
{
  let data:any={"pname":this.pname}
  console.log(data)
}
}
