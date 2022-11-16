import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localStorage.service';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent {
	bills: any[] = [];
	
  	constructor(private localStorageService: LocalStorageService) {
		const bills = JSON.parse(localStorageService.getAllBills());
		
		if (bills) {
			this.bills = bills;
		}

		console.log('Bills =', this.bills);
	}
}
