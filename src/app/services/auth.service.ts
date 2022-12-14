import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
	private baseUrl = '/auth';

	constructor(private http: HttpClient) { }

	register(payload: any): Observable<any> {
		return this.http.post(this.baseUrl + '/register', payload);
	}

	login(payload: any): Observable<any> {
		return this.http.post(this.baseUrl + '/logins', payload);
	}
}
