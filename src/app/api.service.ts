import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  fetchProduct=()=>
  {
    return this.http.get("http://localhost:8080/view")
  }
  addProduct=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/add",dataToSend)
  }
  searchProduct=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/search",dataToSend)
  }
  addUser=(dataToSend:any)=>
    {
      return this.http.post("http://localhost:8080/register",dataToSend)
    }
  addLogin=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/login",dataToSend)
  }
  getProfileDetails=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/viewprofile",dataToSend)
  }
}
