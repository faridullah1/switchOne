import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Helpers } from 'src/app/common/helpers';
import { ConfirmedValidator } from 'src/app/common/validators';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
	basicInfoForm: FormGroup;
	credentialsForm: FormGroup;
	terms = new FormControl(null, [Validators.required]);
	errorMessage: string = '';
	
	constructor(private fb: FormBuilder, 
				private authService: AuthService) 
	{
		this.basicInfoForm = fb.group({
			firstName: ['', [Validators.required]],
			lastName: ['', [Validators.required]],
			cellNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
			idNumber: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
			email: ['', [Validators.required, Validators.email]],
		});

		this.credentialsForm = fb.group({
			userName: ['', [Validators.required]],
			password: ['', [Validators.required]],
			confirmPassword: ['', [Validators.required, ConfirmedValidator]]
		}, {validators: [ConfirmedValidator('password', 'confirmPassword')]})
	}

	alphabetOnly(ev: KeyboardEvent): boolean {
		return Helpers.alphabetOnly(ev);
	}

	numericOnly(ev: any): boolean
    {
		return Helpers.numericOnly(ev);
    }

	onSubmit(stepper: MatStepper): void {
		const payload = {
			basic_info: this.basicInfoForm.value,
			credentials: this.credentialsForm.value,
			terms_acceptance: this.terms.value
		}

		this.authService.register(payload).subscribe({
			next: () => { stepper.next(); },
			error: (error: any) => this.errorMessage = error.message
		});
	}
}
