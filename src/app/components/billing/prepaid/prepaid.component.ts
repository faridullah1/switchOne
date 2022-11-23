import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Helpers } from 'src/app/common/helpers';
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
	selectedMeter: any | null = null;
	stage: BillingStages;

	amount = new FormControl(null);

  	constructor(private localStorageService: LocalStorageService, 
				private billingService: BillingService,
				private dialog: MatDialog) 
	{
		this.billingService.stage.subscribe((value: string) => {
			this.stage = value as BillingStages;
		});

		this.stage = 'SelectMeter';
	}

	ngOnInit(): void {
		this.getMeters();
	}

	getMeters(): void {
		this.meters = JSON.parse(this.localStorageService.getItems('meters')) || [];
	}

	onAddMeter(): void {
		const dialog = this.dialog.open(AddMeterComponent, {
			width: '20%',
			panelClass: 'add-meter-dlg'
		});

		dialog.afterClosed().subscribe(resp => {
			if (resp) {
				this.getMeters();
			}
		});
	}

	onSelectMeter(meter: any): void {
		this.selectedMeter = meter;
	}

	onContinue(): void {
		this.billingService.nextStage('AmountEntry');
		this.stage = 'AmountEntry';
	}

	onAddToCart(): void {
		if (this.selectedMeter) {
			const cartItem = { 
				productType: 'Unknown',
				productReference: this.selectedMeter.meterSerial,
				amount: this.amount.value
			};

			this.localStorageService.setItem('cart', cartItem);
		}
		
		this.stage = 'SelectMeter';
		this.selectedMeter = null;
		this.amount.reset();
	}

	numericOnly(ev: KeyboardEvent): boolean {
		return Helpers.numericOnly(ev);
	}
}
