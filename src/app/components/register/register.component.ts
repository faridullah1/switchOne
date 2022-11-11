import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
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
	
	constructor(private fb: FormBuilder, 
				private authService: AuthService) 
	{
		this.basicInfoForm = fb.group({
			firstName: ['', [Validators.required]],
			lastName: ['', [Validators.required]],
			cellNumber: ['', [Validators.required]],
			idNumber: ['', [Validators.required]],
			email: ['', [Validators.required, Validators.email]],
		});

		this.credentialsForm = fb.group({
			userName: ['', [Validators.required]],
			password: ['', [Validators.required]],
			confirmPassword: ['', [Validators.required]]
		});
	}

	numericOnly(ev: any): boolean
    {
		const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab'];
		if (allowedKeys.includes(ev.key)) return true;

        const letters = /^[0-9]+$/;
        if (ev.key && ev.key.match(letters))
        {
            return (ev.key.match(letters).length > 0);
        }

        return false;
    }

	onSubmit(stepper: MatStepper): void {
		const payload = {
			basic_info: this.basicInfoForm.value,
			credentials: this.credentialsForm.value,
			terms_acceptance: this.terms.value
		}

		this.authService.register(payload).subscribe({
			next: () => { stepper.next(); },
			error: (error: any) => console.error(error)
		});
	}
}
