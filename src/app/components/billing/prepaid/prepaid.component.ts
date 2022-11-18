import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { AddMeterComponent } from '../add-meter/add-meter.component';
import { BillingStages } from './../../../models';
import { BillingService } from './../../../services/billing.service';


@Component({
  selector: 'app-prepaid',
  templateUrl: './prepaid.component.html',
  styleUrls: ['./prepaid.component.scss']
})
export class PrepaidComponent implements OnInit {
	meters: any[] = [];
	stage: BillingStages = 'SelectMeter';

  	constructor(private localStorageService: LocalStorageService, 
				private billingService: BillingService,
				private dialog: MatDialog) 
	{
		this.billingService.stage.subscribe((value: string) => {
			console.log('New Stage =', value);
			this.stage = value as BillingStages;
		});
	}

	ngOnInit(): void {
		this.getMeters();
	}

	getMeters(): void {
		const data = JSON.parse(this.localStorageService.getItems('meters'));
		
		if (data) {
			this.meters = data;
		}
	}

	onAddMeter(): void {
		this.dialog.open(AddMeterComponent, {
			width: '20%'
		});
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
		this.stage = 'CardDetails';
		this.billingService.nextStage('CardDetails');
	}
}
