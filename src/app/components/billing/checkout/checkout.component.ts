import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BillingStages } from 'src/app/models';
import { BillingService } from 'src/app/services/billing.service';
import { LocalStorageService } from 'src/app/services/localStorage.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
	cart: any[] = [];
	stage: BillingStages = 'Summary';
	cardDetailForm: FormGroup;

	constructor(private localStorageService: LocalStorageService,
				private billingService: BillingService,
				private fb: FormBuilder) 
	{
		this.cardDetailForm = fb.group({
			cardNumber: [''],
			cvcNumber: [''],
			cardHolder: [''],
			expiryDate: [''],
		});
	}

	ngOnInit(): void {
		this.getCart();
	}

	getCart(): void {
		this.cart = JSON.parse(this.localStorageService.getItems('cart')) || [];
	}

	getTotal(): number {
		let total = 0;

		for (let item of this.cart) {
			total += parseInt(item.amount, 10);
		}

		return total;
	}

	onDeleteCartItem(item: any): void {
		this.localStorageService.removeItem('cart');

		const index = this.cart.indexOf(item);
		this.cart.splice(index, 1);

		if (this.cart.length === 1) {
			this.localStorageService.setItem('cart', this.cart[0]);
		}
		else {
			for (let item of this.cart) {
				this.localStorageService.setItem('cart', item);
			}
		}
	}

	onProceedToPayment(): void {
		this.stage = 'Payment';
		this.billingService.nextStage('Payment');
	}

	onContinue(): void { }
}
