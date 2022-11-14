import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	showMobileMenu = false;

	constructor() { }

	toggleMenu(ev: MouseEvent): void {
		ev.stopPropagation();
		
		this.showMobileMenu = !this.showMobileMenu;
	}
}
