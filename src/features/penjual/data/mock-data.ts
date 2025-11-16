import type { ChartDataPoint, Invoice, SalesStats } from '../types';

export const salesStats: SalesStats[] = [
	{
		label: 'Kunjungan Profil Bisnis',
		value: '10,000',
		percentage: '8%',
		trend: 'up',
		periodText: 'dari Bulan lalu',
	},
	{
		label: 'Pembelian',
		value: '10,000',
		percentage: '6%',
		trend: 'up',
		periodText: 'dari Bulan lalu',
	},
	{
		label: 'Total Income',
		value: 'Rp 6.000.000',
		percentage: '6%',
		trend: 'up',
		periodText: 'dari Bulan lalu',
	},
	{
		label: 'Total Ulasan',
		value: '10,000',
		percentage: '9%',
		trend: 'up',
		periodText: 'dari Bulan lalu',
	},
];

export const chartDataWeek: ChartDataPoint[] = [
	{ day: 'Mon', value: 80, date: 'Monday' },
	{ day: 'Tue', value: 120, date: 'Tuesday' },
	{ day: 'Wed', value: 220, date: 'Wednesday' },
	{ day: 'Thu', value: 90, date: 'Thursday' },
	{ day: 'Fri', value: 180, date: 'Friday' },
	{ day: 'Sat', value: 60, date: 'Saturday' },
	{ day: 'Sun', value: 150, date: 'Sunday' },
];

export const mockInvoices: Invoice[] = [
	{
		id: '1',
		invoiceNumber: 'I293DSA39',
		product: 'RiceBowl Ayam Teriyaki',
		buyer: {
			name: 'Syahreza',
			avatar: '/api/placeholder/32/32',
		},
		purchaseDate: 'Jan 20, 2025',
		total: 'Rp 20,000',
		status: 'menunggu',
	},
	{
		id: '2',
		invoiceNumber: 'I293DSA39',
		product: 'RiceBowl Ayam Teriyaki',
		buyer: {
			name: 'Syahreza',
			avatar: '/api/placeholder/32/32',
		},
		purchaseDate: 'Jan 20, 2025',
		total: 'Rp 20,000',
		status: 'menunggu',
	},
	{
		id: '3',
		invoiceNumber: 'I293DSA39',
		product: 'RiceBowl Ayam Teriyaki',
		buyer: {
			name: 'Syahreza',
			avatar: '/api/placeholder/32/32',
		},
		purchaseDate: 'Jan 20, 2025',
		total: 'Rp 20,000',
		status: 'menunggu',
	},
	{
		id: '4',
		invoiceNumber: 'I293DSA39',
		product: 'RiceBowl Ayam Teriyaki',
		buyer: {
			name: 'Syahreza',
			avatar: '/api/placeholder/32/32',
		},
		purchaseDate: 'Jan 20, 2025',
		total: 'Rp 20,000',
		status: 'menunggu',
	},
	{
		id: '5',
		invoiceNumber: 'I293DSA39',
		product: 'RiceBowl Ayam Teriyaki',
		buyer: {
			name: 'Syahreza',
			avatar: '/api/placeholder/32/32',
		},
		purchaseDate: 'Jan 20, 2025',
		total: 'Rp 20,000',
		status: 'proses',
	},
	{
		id: '6',
		invoiceNumber: 'I293DSA39',
		product: 'RiceBowl Ayam Teriyaki',
		buyer: {
			name: 'Syahreza',
			avatar: '/api/placeholder/32/32',
		},
		purchaseDate: 'Jan 20, 2025',
		total: 'Rp 20,000',
		status: 'selesai',
	},
];
