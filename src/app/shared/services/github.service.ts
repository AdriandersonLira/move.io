import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserGithub } from '../model/UserGithub';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  URL_GIT = 'https://api.github.com/users'

  constructor(private httpClient: HttpClient) {
  }

  fetch(login: string): Observable<UserGithub> {
    console.log(`${this.URL_GIT}/${login}`);
    return this.httpClient.get<UserGithub>(`${this.URL_GIT}/${login}`);
  }
}
