import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseurl = 'http://localhost:3000/api';


  constructor(private http: HttpClient) { }
  getMessage() {
    return this.http.get(
      'http://localhost:3000/api/message');
  }


  getItems(): Observable<any> {
    return this.http.get('${this.baseurl}/items');
  }


  addItems(data: any): Observable<any> {
    return this.http.post('${this.baseurl}/items', data);
  }
}
