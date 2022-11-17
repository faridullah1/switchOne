import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { BillingStages } from './../../../models';
import { BillingService } from './../../../services/billing.service';


@Component({
  selector: 'app-prepaid',
  templateUrl: './prepaid.component.html',
  styleUrls: ['./prepaid.component.scss']
})
export class PrepaidComponent implements OnInit {
	title: string = 'Pay Bill';
	data: any[] = [];
	stage: BillingStages = 'SelectBill';

  	constructor(private localStorageService: LocalStorageService, 
				private billingService: BillingService) 
	{
		this.billingService.stage.subscribe((value: string) => {
			console.log('New Stage =', value);

			this.stage = value as BillingStages;
			if (this.stage === 'SelectMeter') {
				this.title = 'Buy Prepaid Tokens'; 
			}
		});
	}

	ngOnInit(): void {
		if (this.stage === 'SelectBill') {
			this.getData('bills');
		}
		else if (this.stage === 'SelectMeter') {
			this.getData('meters');
		}
	}

	getData(key: string): void {
		const data = JSON.parse(this.localStorageService.getItems(key));
		
		if (data) {
			this.data = data;
		}

		console.log('Data =', this.data);
	}

	onSelectBill(bill: any): void {
		this.stage = 'BillAmountEntry';
		this.billingService.nextStage('BillAmountEntry');
	}

	onSelectMeter(meter: any): void {
		this.stage = 'MeterAmountEntry';
		this.billingService.nextStage('MeterAmountEntry');
	}

	onConfirm(): void {
		this.stage = 'ConfirmPay';
		this.billingService.nextStage('ConfirmPay');
	}

	onPayment(): void {
		this.title = 'Card Details';
		this.stage = 'CardDetails';
		this.billingService.nextStage('CardDetails');
	}
}
