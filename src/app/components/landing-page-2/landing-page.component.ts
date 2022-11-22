import { NavigationEnd, Router } from '@angular/router';
import { Component } from '@angular/core';
import { Tab } from 'src/app/models';
import { filter } from 'rxjs';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponentOld {
	tabs: Tab[] = [];
	path: string = '';
	
	constructor(private router: Router) 
	{
		this.tabs = [
			{ name: 'features', title: 'Features', route: 'features' },
			{ name: 'how_to_use', title: 'How to use', route: 'how_to_use' },
			{ name: 'security', title: 'Security', route: 'security' },
			{ name: 'billing', title: 'Pay and buy', route: 'billing' },
		];

		router.events.pipe(filter(event => event instanceof NavigationEnd))
			.subscribe((event: any) => {
				this.path = event.url.split('/')[1];
			});
	}
}
