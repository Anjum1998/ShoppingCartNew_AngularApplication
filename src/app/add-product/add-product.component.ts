import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
pname=""
image=""
category=""
description=""
price=""

readValue=()=>
{
  let data:any={"pname":this.pname,"image":this.image,"category":this.category,"description":this.description,"price":this.price}
  console.log(data)
  
}
}
