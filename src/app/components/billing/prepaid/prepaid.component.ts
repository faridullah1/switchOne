import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localStorage.service';


@Component({
  selector: 'app-prepaid',
  templateUrl: './prepaid.component.html',
  styleUrls: ['./prepaid.component.scss']
})
export class PrepaidComponent implements OnInit {
	bills: any[] = [];
	stage: 'BillList' | 'AmountEntry' | 'paymentMethod' = 'BillList';

  	constructor(private localStorageService: LocalStorageService) { }

	ngOnInit(): void {
		this.getAllBills();
	}

	getAllBills(): void {
		const bills = JSON.parse(this.localStorageService.getAllBills());
		
		if (bills) {
			this.bills = bills;
		}

		console.log('Bills =', this.bills);
	}

	onSelectBill(bill: any): void {
		this.stage = 'AmountEntry';
	}
}
