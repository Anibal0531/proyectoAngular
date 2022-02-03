import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public API_SERVE = '/api/users';

  constructor(private HttpClient: HttpClient) {}
  public getAllUser(): Observable<any> {
    return this.HttpClient.get(this.API_SERVE);
  }

  public saveUser(user: any): Observable<any> {
    return this.HttpClient.post(this.API_SERVE, user);
  }

  public delecteUser(user: any) {
    this.HttpClient.delete(this.API_SERVE, user);
  }
}
