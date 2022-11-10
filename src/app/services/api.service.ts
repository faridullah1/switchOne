import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
	private baseUrl = '/api';

  	constructor(private http: HttpClient) { }

	post(slug: string, payload: any): Observable<any> {
		return this.http.post(this.baseUrl + slug, payload);
	}

	get(slug: string): Observable<any> {
		return this.http.get(this.baseUrl + slug);
	}
}
