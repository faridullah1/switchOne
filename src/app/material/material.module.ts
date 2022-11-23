import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  imports: [
	MatDividerModule,
	MatStepperModule,
	MatFormFieldModule,
	MatInputModule,
	MatCheckboxModule,
	MatButtonModule,
	MatIconModule,
	MatDialogModule,
	MatSelectModule,
	MatRadioModule,
	MatDatepickerModule,
	MatNativeDateModule 
  ],
  exports: [
	MatDividerModule,
	MatStepperModule,
	MatFormFieldModule,
	MatInputModule,
	MatCheckboxModule,
	MatButtonModule,
	MatIconModule,
	MatDialogModule,
	MatSelectModule,
	MatRadioModule,
	MatDatepickerModule,
	MatNativeDateModule 
  ],
  providers: [  
    MatDatepickerModule,  
  ],
})
export class MaterialModule { }
