import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  imports: [
	MatDividerModule,
	MatStepperModule,
	MatFormFieldModule,
	MatInputModule,
	MatCheckboxModule,
	MatButtonModule,
	MatIconModule
  ],
  exports: [
	MatDividerModule,
	MatStepperModule,
	MatFormFieldModule,
	MatInputModule,
	MatCheckboxModule,
	MatButtonModule,
	MatIconModule
  ]
})
export class MaterialModule { }
