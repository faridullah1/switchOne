import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  imports: [
	MatDividerModule,
	MatStepperModule,
	MatFormFieldModule,
	MatInputModule,
	MatCheckboxModule,
	MatButtonModule
  ],
  exports: [
	MatDividerModule,
	MatStepperModule,
	MatFormFieldModule,
	MatInputModule,
	MatCheckboxModule,
	MatButtonModule
  ]
})
export class MaterialModule { }
