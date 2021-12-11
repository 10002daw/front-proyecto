import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {

  baseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = "http://localhost:8000/api/v1";
  }

  getAllByCommunity(id: number): Promise<any[]> {
    return this.http.get<any>(`${this.baseUrl}/communities/${id}/threads`).toPromise();
  }

  getById(id: number): Promise<any[]> {
    return this.http.get<any>(`${this.baseUrl}/threads/${id}`).toPromise();
  }

  create(id: number, title: string): Promise<any> {
    const bodyRequest = { title };
    return this.http.post<any>(`${this.baseUrl}/communities/${id}/threads`, bodyRequest).toPromise();
  }

  update(id: number, title: string): Promise<any> {
    const bodyRequest: any = { title };
    return this.http.put<any>(`${this.baseUrl}/threads/${id}`, bodyRequest).toPromise();
  }

  delete(id: number): Promise<any> {
    return this.http.delete<any>(`${this.baseUrl}/threads/${id}`).toPromise();
  }
}
