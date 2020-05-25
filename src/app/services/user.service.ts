import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../shared/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  signedIn:boolean=false;
  url='http://localhost:3000/users'

  constructor(private http:HttpClient) { }

  getUser(name:string,password:string):Observable<any>{
    let params = new HttpParams()
    .set('name', name)
    .set('password',password);
    
    console.log("Query Params passed are :",params)
    return this.http.get(this.url+'/getUser', { params: params })
  }
}

