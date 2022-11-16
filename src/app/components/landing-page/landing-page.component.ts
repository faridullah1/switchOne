import { Component } from '@angular/core';
import { Tab } from 'src/app/models';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
	tabs: Tab[] = [];
	selectedTab: Tab;
	
	constructor() {
		this.tabs = [
			{ name: 'features', title: 'Features', selected: true },
			{ name: 'how_to_use', title: 'How to use', selected: false },
			{ name: 'security', title: 'Security', selected: false },
			{ name: 'billing', title: 'Pay and buy', selected: false },
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
