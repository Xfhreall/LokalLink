export interface Product {
	id: string;
	no: number;
	name: string;
	price: string;
	stock: number;
	revenue: string;
	sold: number;
	rating: number;
	reviews: number;
}

export type ProductStatus = 'all' | 'active' | 'inactive';
