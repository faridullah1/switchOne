import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
	theForm: FormGroup;
	
	constructor(private fb: FormBuilder, 
				private authService: AuthService) 
	{
		this.theForm = fb.group({
			firstName: ['', [Validators.required]],
			lastName: ['', [Validators.required]],
			cellNumber: ['', [Validators.required]],
			idNumber: ['', [Validators.required]],
			email: ['', [Validators.required]],
			
			terms: [false, [Validators.required]],

			userName: ['', [Validators.required]],
			password: ['', [Validators.required]],
			confirmPassword: ['', [Validators.required]]
		});
	}

	ngOnInit(): void {
	}

	onSubmit(stepper: MatStepper): void {
		const payload = this.theForm.value;

		this.authService.register(payload).subscribe({
			next: () => { stepper.next(); },
			error: (error: any) => console.error(error)
		});
	}
}
