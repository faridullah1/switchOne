import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Bill, BillingStages } from 'src/app/models';
import { AddBillComponent } from '../add-bill/add-bill.component';
import { BillingService } from 'src/app/services/billing.service';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { Helpers } from 'src/app/common/helpers';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
	bills: Bill[] = [];
	stage: BillingStages;
	selectedBill: Bill | null = null;

	amount = new FormControl(null);
	yourReference: string[] = ['Clothing Account'];
	theirReference: string[] = ['Test Account'];

  	constructor(private dialog: MatDialog,
				private localStorageService: LocalStorageService,
				private billingService: BillingService) 
	{
		this.stage = 'SelectBill';
	}

	ngOnInit(): void {
		this.getBills();
	}

	getBills(): void {
		this.bills = JSON.parse(this.localStorageService.getItems('bills')) || [];
	}

	onAddBill(): void {
		const dialog = this.dialog.open(AddBillComponent, {
			width: '30%',
			panelClass: 'add-dlg'
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
		this.billingService.nextStage('AmountEntry');
		this.stage = 'AmountEntry';
	}

	onAddToCart(): void {
		if (this.selectedBill) {
			const cartItem = { 
				productType: 'bills',
				productReference: this.selectedBill.accountHolder,
				amount: this.amount.value
			};

			this.localStorageService.setItem('cart', cartItem);
		}
		
		this.stage = 'SelectBill';
		this.selectedBill = null;
		this.amount.reset();
	}

	numericOnly(ev: KeyboardEvent): boolean {
		return Helpers.numericOnly(ev);
	}
}
