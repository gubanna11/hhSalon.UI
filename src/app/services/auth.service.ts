import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'Auth';

  constructor(private http: HttpClient) { }

  public signUp(userObj: any){
    return this.http.post<any>(`${environment.apiUrl}/${this.url}/register`, userObj);
  }

  public login(loginObj: any){
    return this.http.post<any>(`${environment.apiUrl}/${this.url}/authenticate`, loginObj);
  }
}
