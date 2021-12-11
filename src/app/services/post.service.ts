import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = "http://localhost:8000/api/v1";
  }

  getAllByThreads(id: number): Promise<any[]> {
    return this.http.get<any>(`${this.baseUrl}/threads/${id}/posts`).toPromise();
  }

  getById(id: number): Promise<any[]> {
    return this.http.get<any>(`${this.baseUrl}/posts/${id}`).toPromise();
  }

  create(id: number, text: string, image?: string): Promise<any> {
    const bodyRequest: any = { text };
    if (typeof image !== 'undefined') {
      bodyRequest.image = image;
    }
    return this.http.post<any>(`${this.baseUrl}/threads/${id}/posts`, bodyRequest).toPromise();
  }

  update(id: number, text: string, image?: string): Promise<any> {
    const bodyRequest: any = { text };
    if (typeof image !== 'undefined') {
      bodyRequest.image = image;
    }
    return this.http.put<any>(`${this.baseUrl}/posts/${id}`, bodyRequest).toPromise();
  }

  delete(id: number): Promise<any> {
    return this.http.delete<any>(`${this.baseUrl}/posts/${id}`).toPromise();
  }
}
