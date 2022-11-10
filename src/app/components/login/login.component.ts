import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	theForm: FormGroup;
	
	constructor(private fb: FormBuilder, 
				private router: Router,
				private authService: AuthService) 
	{
		this.theForm = fb.group({
			phoneNumber: ['', [Validators.required]],
			password: ['', [Validators.required]],
		});
	}

	onLogin(): void {
		const payload = this.theForm.value;

		this.authService.login(payload).subscribe({
			next: () => this.router.navigateByUrl('/'),
			error: (error) => console.error(error)
		});
	}
}
