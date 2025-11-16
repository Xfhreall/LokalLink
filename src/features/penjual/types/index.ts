export interface SalesStats {
	label: string;
	value: string;
	percentage: string;
	trend: 'up' | 'down';
	periodText: string;
}

export interface ChartDataPoint {
	day: string;
	value: number;
	date: string;
}

export interface Invoice {
	id: string;
	invoiceNumber: string;
	product: string;
	buyer: {
		name: string;
		avatar: string;
	};
	purchaseDate: string;
	total: string;
	status: 'menunggu' | 'proses' | 'selesai';
}

export type InvoiceStatus = 'menunggu' | 'proses' | 'selesai' | 'all';
export type DateRange = '7days' | '30days' | '90days';
