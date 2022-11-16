import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class LocalStorageService {

	constructor() { }
	
	getAllBills(): any {
		const bills = localStorage.getItem('bills');
		return bills;
	}

	saveBill(bill: any): void {
		const bills = JSON.parse(this.getAllBills()) || [];
		bills.push(bill);
		localStorage.setItem('bills', JSON.stringify(bills));
	}
}