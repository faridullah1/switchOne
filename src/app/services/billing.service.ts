import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BillingStages } from '../models';


@Injectable({providedIn: 'root'})
export class BillingService {
	stage = new BehaviorSubject<BillingStages>('SelectBill');

	constructor() { }
	
	nextStage(stage: BillingStages): void {
		this.stage.next(stage)
	}
}