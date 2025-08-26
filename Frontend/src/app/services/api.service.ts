import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private base = environment.apiUrl
  constructor(private http: HttpClient) { }
  getUser() {return this.http.get<any[]>(`${this.base}/api/users`)}
}
