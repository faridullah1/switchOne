import { FormControl } from '@angular/forms';
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
	selectedBill: Bill | null = null;

	amount = new FormControl(null);

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
		const dialog = this.dialog.open(AddBillComponent, {
			width: '30%'
		});

		dialog.afterClosed().subscribe(resp => {
			if (resp) {
				this.getBills();
			}
		});
	}

	onSelectBill(bill: Bill): void {
		this.selectedBill = bill;
	}

	onContinue(): void {
		this.billingService.nextStage('BillAmountEntry');
		this.stage = 'BillAmountEntry';
	}

	onAddToCart(): void {
		if (this.selectedBill) {
			const cartItem = { 
				productType: 'bills',
				productReference: this.selectedBill.accountHolder,
				amount: this.amount.value
			};
	
			const cart = JSON.parse(this.localStorageService.getItems('cart')) || [];
			cart.push(cartItem);
			this.localStorageService.setItem('cart', cart);
		}
		
		this.stage = 'SelectBill';
		this.selectedBill = null;
		this.amount.reset();
	}
}
