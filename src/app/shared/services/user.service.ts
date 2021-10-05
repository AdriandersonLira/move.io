import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { UserGithub } from '../model/UserGithub';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL_USERS = 'http://localhost:3000/users'

  constructor(private httpClient: HttpClient) {
  }

  fetch(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.URL_USERS}/${id}`);
  }

  fetchAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.URL_USERS);
  }

  insert(user: UserGithub): Observable<User> {
    const username = {
      id: user.id,
      login: user.login,
      name: user.name,
      location: user.location,
      avatar_url: user.avatar_url,
      updated_at: user.updated_at,
      created_at: user.created_at,
    }
    return this.httpClient.post<User>(this.URL_USERS, username);
  }

  // delete(user: User): Observable<object> {
  //   return this.httpClient.delete(`${this.URL_USERS}/${user.id}`);
  // }

  // replace(user: User): Observable<User> {
  //   return this.httpClient.put<User>(`${this.URL_USERS}/${user.id}`, user);
  // }
}
