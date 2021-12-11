import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {

  baseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = "http://localhost:8000/api/v1/communities";
  }

  getAll(): Promise<any[]> {
    return this.http.get<any>(`${this.baseUrl}`).toPromise();
  }

  getById(id: number): Promise<any[]> {
    return this.http.get<any>(`${this.baseUrl}/${id}`).toPromise();
  }

  create(name: string, description: string, priv: boolean, password: string, owner: number): Promise<any> {
    const bodyRequest = { name, description, priv, password, owner };
    return this.http.post<any>(`${this.baseUrl}`, bodyRequest).toPromise();
  }

  update(id: number, name: string, description: string, priv: boolean, password: string, owner?: number): Promise<any> {
    const bodyRequest: any = { name, description, priv, password};
    if (typeof owner !== 'undefined') {
      bodyRequest.owner = owner;
    }
    return this.http.put<any>(`${this.baseUrl}/${id}`, bodyRequest).toPromise();
  }

  delete(id: number): Promise<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`).toPromise();
  }

  addUser(id: number, user: number) {
    return this.http.post<any>(`${this.baseUrl}/${id}/users/${user}`, '').toPromise();
  }

  removeUser(id: number, user: number) {
    return this.http.delete<any>(`${this.baseUrl}/${id}/users/${user}`).toPromise();
  }

  updateUser(id: number, user: number, admin: boolean) {
    const bodyRequest = { admin };
    return this.http.put<any>(`${this.baseUrl}/${id}/users/${user}`, bodyRequest).toPromise();
  }
}
