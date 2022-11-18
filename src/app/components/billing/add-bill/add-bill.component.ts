import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.scss']
})
export class AddBillComponent {
	theForm: FormGroup;
	accountTypes = ['current', 'saving'];

	constructor(private localStorageService: LocalStorageService,
				private fb: FormBuilder, 
				private dialogRef: MatDialogRef<AddBillComponent>)
	{
		this.theForm = fb.group({
			accountHolder: ['', Validators.required],
			bank: ['', Validators.required],
			branchCode: ['', Validators.required],
			accountNumber: ['', Validators.required],
			accountType: ['saving', Validators.required],
			yourReference: ['', Validators.required],
			theirReference: ['', Validators.required]
		});
	}

	onSubmit(): void {
		// Currently I am storing data in local storage, please replace it with server API
		this.localStorageService.setItem('bills', this.theForm.value);
		this.dialogRef.close(true);
	}
}
