import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url = "http://localhost/admin/";

  constructor(private http: HttpClient) { }

  // addprice(data: any){
  //   return this.http.post(this.url + 'addprice',JSON.stringify(data));
  // }
  // displayitem(){
  //   return this.http.get(this.url + 'displayprice.php');
  // }
}
