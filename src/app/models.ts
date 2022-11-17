export type BillingStages = 'SelectBill' | 'BillAmountEntry' | 'SelectPaymentMethod'| 'SelectMeter' | 'MeterAmountEntry';

export interface Tab {
	name: string;
	title: string;
	selected: boolean,
	route?: string;
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