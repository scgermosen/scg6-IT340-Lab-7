import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private api = "http://localhost:3000/api/user";

  constructor (
    private http: HttpClient
  ) { }

  get(): Observable<User[]> {
    return this.http.get<User[]>(this.api);
  }

  getById(id: string): Observable<User[]> {
    return this.http.get<User[]>(this.api + '/' + id );
  }

  post(user: User): Observable<User[]> {
    return this.http.post<User[]>(this.api, user);
  }

    put(id: string, user: User): Observable<User[]> {
    return this.http.put<User[]>(this.api + '/' + id, user);
  }

    delete(id: string): Observable<User[]> {
    return this.http.get<User[]>(this.api + '/' + id );
  }

}
