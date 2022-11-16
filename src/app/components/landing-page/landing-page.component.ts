import { Component, OnInit } from '@angular/core';
import { Card, Tab } from 'src/app/models';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
	tabs: Tab[] = [];
	cards: Card[] = [];
	selectedTab: Tab;
	
	constructor() {
		this.tabs = [
			{ name: 'features', title: 'Features', selected: true },
			{ name: 'how_to_use', title: 'How to use', selected: false },
			{ name: 'security', title: 'Security', selected: false },
			{ name: 'billing', title: 'Pay and buy', selected: false },
		];

		this.cards = [
			{ title: 'Pay Bills & Account', description: 'pay for your bills and account, including TV license and DSTV, By simple using the refrence Number found on your bills, Invoice or account statement', actionText: 'Bills and Accounts'},
			{ title: 'Pre Paid Electicity, Water or Gas', description: 'Buy pre paid Electricity or gas by simple adding your meter number and choosing the amount you would like to purchase', actionText: 'Prepaid'},
			{ title: 'Pay Trafic Fine', description: 'Search and pay for trafic fine Using your ID number or trafic fine refrence number', actionText: 'Fines'}
		];

		this.selectedTab = this.tabs[0];
	}

	ngOnInit(): void {
	}

	onTabChange(tab: Tab): void {
		for (let t of this.tabs) {
			t.selected = false;
		}

		tab.selected = true;
		this.selectedTab = tab;
	}
}
