import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = "http://localhost:8000/api/v1/users";
  }

  getAll(): Observable<any[]> {
    return this.http.get<any>(`${this.baseUrl}`);
  }

  getById(id: number): Promise<any[]> {
    return this.http.get<any>(`${this.baseUrl}/${id}`).toPromise();
  }

  create(email: string, name: string, password: string): Promise<any> {
    const bodyRequest = { email, name, password };
    return this.http.post<any>(`${this.baseUrl}`, bodyRequest).toPromise();
  }

  update(id: number, email: string, name: string, password?: string): Promise<any> {
    const bodyRequest: any = { email, name };
    if (typeof password !== 'undefined') {
      bodyRequest.password = password;
    }
    return this.http.put<any>(`${this.baseUrl}/${id}`, bodyRequest).toPromise();
  }

  delete(id: number): Promise<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`).toPromise();
  }

  getCommunitiesByUser(id: number): Promise<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}/communities`).toPromise();
  }
}
