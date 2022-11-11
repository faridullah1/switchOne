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
	
	constructor() {
		this.tabs = [
			{ title: 'Features', selected: true },
			{ title: 'How to use', selected: false },
			{ title: 'Security', selected: false },
			{ title: 'Pay and buy', selected: false },
		];

		this.cards = [
			{ title: 'Pay Bills & Account', description: 'Some description', actionText: 'Bills and Accounts'},
			{ title: 'Pay Bills & Account', description: 'Some description', actionText: 'Bills and Accounts'},
			{ title: 'Pay Bills & Account', description: 'Some description', actionText: 'Bills and Accounts'}
		]
	}

	ngOnInit(): void {
	}

	onTabChange(tab: Tab): void {
		for (let t of this.tabs) {
			t.selected = false;
		}

		tab.selected = true;
	}
}
