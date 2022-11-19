import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BillingComponent } from './components/billing/billing.component';
import { AccountsComponent } from './components/billing/accounts/accounts.component';
import { FeaturesComponent } from './components/features/features.component';
import { HowToUseComponent } from './components/how-to-use/how-to-use.component';
import { SecurityComponent } from './components/security/security.component';
import { PrepaidComponent } from './components/billing/prepaid/prepaid.component';
import { PaymentMethodComponent } from './components/billing/payment-method/payment-method.component';
import { CheckoutComponent } from './components/billing/checkout/checkout.component';


const routes: Routes = [
	{ 
		path: '', component: LandingPageComponent, 
		children: [
			{ path: '', redirectTo: 'features', pathMatch: 'prefix' },
			{ path: 'features', component: FeaturesComponent },
			{ path: 'how_to_use', component: HowToUseComponent },
			{ path: 'security', component: SecurityComponent },
			{ 
				path: 'billing', component: BillingComponent, 
				children: [
					{ path: '', redirectTo: 'accounts', pathMatch: 'prefix' },
					{ path: 'accounts', component: AccountsComponent },
					{ path: 'prepaid', component: PrepaidComponent },
					{ path: 'checkout', component: CheckoutComponent },
				]
			},
		]
	},
	{ path: 'payment_method', component: PaymentMethodComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'contact-us', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
