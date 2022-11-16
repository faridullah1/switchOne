import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localStorage.service';


@Component({
  selector: 'app-prepaid',
  templateUrl: './prepaid.component.html',
  styleUrls: ['./prepaid.component.scss']
})
export class PrepaidComponent {
	bills: any[] = [];
	
  	constructor(private localStorageService: LocalStorageService) {
		const bills = JSON.parse(localStorageService.getAllBills());
		
		if (bills) {
			this.bills = bills;
		}

		console.log('Bills =', this.bills);
	}
}
