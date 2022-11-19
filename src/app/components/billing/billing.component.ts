import { Component } from '@angular/core';
import { Tab } from 'src/app/models';


@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent {
	tabs: Tab[];
	bills: any[] = [];

	constructor() {
		this.tabs = [
			{ name: 'bills_accounts', title: 'Bills & Accounts', icon: 'receipt_long', route: 'accounts' },
			{ name: 'prepaid', title: 'Prepaid', icon: 'emoji_objects', route: 'prepaid' },
			{ name: 'pay', title: 'Pay', icon: 'shopping_cart', route: 'checkout' },
			// { name: 'history', title: 'History', icon: 'history', route: 'history' },
		];
	}
}
