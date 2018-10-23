import {Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './git-http/user';


    

@Injectable()
export class GithubAPIService {
  userUrl:string="https://api.github.com/users/";
  constructor(private http: HttpClient) {  }
 
  getUser (name:string): Observable<User> {
    return this.http.get<User>(this.userUrl+name).pipe(
        tap(users => console.log(`fetched users`))
      );
  }
}