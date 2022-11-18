import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Bill, BillingStages } from 'src/app/models';
import { AddBillComponent } from '../add-bill/add-bill.component';
import { BillingService } from 'src/app/services/billing.service';
import { LocalStorageService } from 'src/app/services/localStorage.service';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
	bills: Bill[] = [];
	stage: BillingStages = 'SelectBill';
	selectedBill!: Bill;

  	constructor(private dialog: MatDialog,
				private localStorageService: LocalStorageService,
				private billingService: BillingService) 
	{ }

	ngOnInit(): void {
		this.getBills();
	}

	getBills(): void {
		const data = JSON.parse(this.localStorageService.getItems('bills'));
		
		if (data) {
			this.bills = data;
		}
	}

	onAddBill(): void {
		this.dialog.open(AddBillComponent, {
			width: '20%'
		});
	}

	onSelectBill(bill: Bill): void {
		this.selectedBill = bill;
	}

	onContinue(): void {
		this.billingService.nextStage('BillAmountEntry');
	}

	onAddToCart(): void {

	}
}
