import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { BillingService } from "src/app/services/billing.service";
import { LocalStorageService } from "src/app/services/localStorage.service";


@Component({
	selector: 'app-add-meter',
	templateUrl: './add-meter.component.html',
	styleUrls: ['./add-meter.component.scss']
  })
  export class AddMeterComponent {
	addMeterForm: FormGroup;

	constructor(private localStorageService: LocalStorageService,
				private billingService: BillingService,
				private router: Router)
	{
		this.addMeterForm = new FormGroup({
			meterSerial: new FormControl('', Validators.required),
			alias: new FormControl('', Validators.required),
		});
	}

	onSubmit(): void {
		console.log(this.addMeterForm.value);

		// Currently I am storing data in local storage, please replace it with server API
		this.localStorageService.setItem('meters', this.addMeterForm.value);
		this.billingService.nextStage('SelectMeter');
		this.router.navigateByUrl('/billing/prepaid');
	}
}
