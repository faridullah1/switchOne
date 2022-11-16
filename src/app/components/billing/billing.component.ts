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
			{ name: 'bills_accounts', title: 'Bills & Accounts', selected: false, route: 'accounts' },
			{ name: 'prepaid', title: 'Prepaid', selected: false, route: 'prepaid' },
			{ name: 'fines', title: 'Fines', selected: false, route: 'fines' },
			{ name: 'history', title: 'History', selected: true, route: 'history' },
		];
	}
}
