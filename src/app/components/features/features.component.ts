import { Card } from 'src/app/models';
import { Component } from '@angular/core';


@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
	cards: Card[];

	constructor() {
		this.cards = [
			{ title: 'Pay Bills & Account', description: 'pay for your bills and account, including TV license and DSTV, By simple using the refrence Number found on your bills, Invoice or account statement', actionText: 'Bills and Accounts'},
			{ title: 'Pre Paid Electicity, Water or Gas', description: 'Buy pre paid Electricity or gas by simple adding your meter number and choosing the amount you would like to purchase', actionText: 'Prepaid'},
			{ title: 'Pay Trafic Fine', description: 'Search and pay for trafic fine Using your ID number or trafic fine refrence number', actionText: 'Fines'}
		];
	}
}
