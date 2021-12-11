import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = "http://localhost:8000/api/v1/auth";
  }

  login(email: string, password: string): Promise<any> {
    const bodyRequest = { email, password };
    return this.http.post<any>(`${this.baseUrl}/login`, bodyRequest).toPromise();
  }

  register(email: string, name: string, password: string, password_confirmation: string): Promise<any> {
    const bodyRequest = { email, name, password, password_confirmation };
    return this.http.post<any>(`${this.baseUrl}/register`, bodyRequest).toPromise();
  }

  refresh(): Promise<any> {
    return this.http.post<any>(`${this.baseUrl}/refresh`, '').toPromise();
  }

  me(): Promise<any> {
    return this.http.post<any>(`${this.baseUrl}/me`, '').toPromise();
  }

  logout(): Promise<any> {
    return this.http.post<any>(`${this.baseUrl}/logout`, '').toPromise();
  }
}
