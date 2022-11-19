// Angular core modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Routing Module
import { AppRoutingModule } from './app-routing.module';

// Custom module
import { MaterialModule } from './material/material.module';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FeaturesComponent } from './components/features/features.component';
import { HowToUseComponent } from './components/how-to-use/how-to-use.component';
import { SecurityComponent } from './components/security/security.component';
import { BillingComponent } from './components/billing/billing.component';
import { AddBillComponent } from './components/billing/add-bill/add-bill.component';
import { AccountsComponent } from './components/billing/accounts/accounts.component';
import { PrepaidComponent } from './components/billing/prepaid/prepaid.component';
import { PaymentMethodComponent } from './components/billing/payment-method/payment-method.component';
import { AddMeterComponent } from './components/billing/add-meter/add-meter.component';
import { CheckoutComponent } from './components/billing/checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    LandingPageComponent,
    ContactUsComponent,
    FeaturesComponent,
    HowToUseComponent,
    SecurityComponent,
    BillingComponent,
    AddBillComponent,
    AccountsComponent,
    PrepaidComponent,
    PaymentMethodComponent,
    AddMeterComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
	ReactiveFormsModule,
	HttpClientModule,

	MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
