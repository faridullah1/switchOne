export type BillingStages = 'SelectBill' | 'BillAmountEntry' | 'SelectPaymentMethod'| 'SelectMeter' | 
							'MeterAmountEntry' | 'ConfirmPay' | 'CardDetails' | 'Result';

export interface Tab {
	name: string;
	title: string;
	route?: string;
	icon?: string;
	selected?: boolean;
}

export interface Card {
	title: string;
	description: string;
	actionText: string;
}

export interface PaymentMethod {
	name: string;
	title: string;
	image: string;
}

export interface Bill {
	accountHolder: string;
	bank: string;
	branchCode: string;
	accountNumber: string;
	accountType: string;
	yourReference: number;
	theirReference: number;
}