import { Component } from '@angular/core';
import { Tab } from 'src/app/models';


@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent {
	tabs: Tab[];
	selectedTab: Tab;

	constructor() {
		this.tabs = [
			{ name: 'bills_accounts', title: 'Bills & Accounts', selected: false },
			{ name: 'prepaid', title: 'Prepaid', selected: false },
			{ name: 'fines', title: 'Fines', selected: false },
			{ name: 'history', title: 'History', selected: true },
		];

		this.selectedTab = this.tabs[0];
	}

	onTabChange(tab: Tab): void {
		for (let t of this.tabs) {
			t.selected = false;
		}

		tab.selected = true;
		this.selectedTab = tab;
	}
}
