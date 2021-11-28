import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  url = 'https://reqres.in/api/users';
  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get(this.url);
  }

  postData(data:any){
    return this.http.post(this.url,data);
  }

  deleteData(id:any){
    return this.http.delete(`${this.url}/${id}`);
  }
}
