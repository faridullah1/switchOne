import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';


@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.scss']
})
export class AddBillComponent {
	addBillForm: FormGroup;

	constructor() {
		this.addBillForm = new FormGroup({
			referenceNumber: new FormControl('', Validators.required),
			alias: new FormControl('', Validators.required),
		});
	}

	onSubmit(): void {
		console.log(this.addBillForm.value);
	}
}
