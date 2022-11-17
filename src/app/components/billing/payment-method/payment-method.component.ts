import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PaymentMethod } from 'src/app/models';
import { BillingService } from './../../../services/billing.service';


@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss']
})
export class PaymentMethodComponent implements OnInit {
	paymentMethods: PaymentMethod[];

	constructor(private router: Router, private billingService: BillingService) 
	{
		this.paymentMethods = [
			{ name: 'mastercard', title: 'Master Card', image: '/assets/images/abc.jpg' },
			{ name: 'ozow', title: 'OZOW', image: '/assets/images/abc.jpg' },
		]
	}

	ngOnInit(): void {
	}

	onSelectPaymentMethod(method: PaymentMethod): void {
		this.billingService.nextStage('SelectMeter');
		this.router.navigateByUrl('/billing/prepaid');
	}
}
