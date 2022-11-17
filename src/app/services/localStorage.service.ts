import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class LocalStorageService {

	constructor() { }
	
	getItems(item: string): any {
		const data = localStorage.getItem(item);
		return data;
	}

	setItem(key: string, item: any): void {
		const data = JSON.parse(this.getItems(key)) || [];
		data.push(item);
		localStorage.setItem(key, JSON.stringify(data));
	}
}