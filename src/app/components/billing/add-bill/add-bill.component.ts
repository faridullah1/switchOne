import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.scss']
})
export class AddBillComponent {
	addBillForm: FormGroup;

	constructor(private localStorageService: LocalStorageService, 
				private dialogRef: MatDialogRef<AddBillComponent>)
	{
		this.addBillForm = new FormGroup({
			referenceNumber: new FormControl('', Validators.required),
			alias: new FormControl('', Validators.required),
		});
	}

	onSubmit(): void {
		// Currently I am storing data in local storage, please replace it with server API
		this.localStorageService.setItem('bills', this.addBillForm.value);
		this.dialogRef.close();
	}
}
