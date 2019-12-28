import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const headers = new HttpHeaders();
headers.set('Content-Type', 'application/json; charset=utf-8');

const baseURL = 'http://localhost:3000/users';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private http2: HttpClient) { }

  getUsers() {
    return this.http.get(baseURL);
  }

  addUser(user: any) {
    let body = JSON.stringify(user);
    return this.http.post(baseURL, body, { headers: headers });
  }

  updateUser(user: any) {
    let body = JSON.stringify(user);
    return this.http.put(baseURL + `/users/` + user.id, body, httpOptions);
  }

  deleteUser(user: any) {
    return this.http.delete(baseURL + '/users/' + user.id);
  }
}
