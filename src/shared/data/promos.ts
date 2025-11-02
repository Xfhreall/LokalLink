export type Promo = {
	id: string;
	title: string;
	description: string;
	discount: string;
	image: string;
	validUntil?: string;
};

export const promos: Promo[] = [
	{
		id: '1',
		title: 'Diskon 50% Ricebowl',
		description: 'Dapatkan diskon 50% untuk semua varian ricebowl',
		discount: '50%',
		image:
			'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
		validUntil: '31 Desember 2025',
	},
	{
		id: '2',
		title: 'Beli 2 Gratis 1',
		description: 'Beli 2 kue tradisional, gratis 1 kue pilihan',
		discount: 'Beli 2 Gratis 1',
		image:
			'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
		validUntil: '15 Desember 2025',
	},
	{
		id: '3',
		title: 'Paket Hemat Keluarga',
		description: 'Paket lengkap untuk 4 orang hanya Rp 100.000',
		discount: 'Hemat 30%',
		image:
			'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
		validUntil: '31 Desember 2025',
	},
];
