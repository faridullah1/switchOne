import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.scss']
})
export class AddBillComponent {
	addBillForm: FormGroup;

	constructor(private localStorageService: LocalStorageService, 
				private router: Router)
	{
		this.addBillForm = new FormGroup({
			referenceNumber: new FormControl('', Validators.required),
			alias: new FormControl('', Validators.required),
		});
	}

	onSubmit(): void {
		console.log(this.addBillForm.value);

		// Currently I am storing data in local storage, please replace it with server API
		this.localStorageService.saveBill(this.addBillForm.value);
		this.router.navigateByUrl('/billing/accounts');
	}
}
