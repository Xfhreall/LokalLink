// Product Form Types and Schemas

export interface ProductImage {
	id: string;
	file: File;
	preview: string;
}

export interface VariantOption {
	id: string;
	name: string;
	price: string;
	stock: number;
	image?: string;
}

export interface ProductVariant {
	id: string;
	name: string;
	options: VariantOption[];
}

export interface ProductFormData {
	productName: string;
	category: string;
	description: string;
	price: string;
	stock: number;
	hasVariants: boolean;
	images: ProductImage[];
	variants: ProductVariant[];
}

export const PRODUCT_CATEGORIES = [
	{ value: 'makanan', label: 'Makanan' },
	{ value: 'minuman', label: 'Minuman' },
	{ value: 'jasa', label: 'Jasa' },
	{ value: 'oleh-oleh', label: 'Oleh-oleh' },
	{ value: 'lainnya', label: 'Lainnya' },
] as const;

export const DEFAULT_VARIANTS: ProductVariant[] = [
	{
		id: '1',
		name: 'Warna',
		options: [{ id: '1', name: '', price: '', stock: 2 }],
	},
	{
		id: '2',
		name: 'Rasa',
		options: [{ id: '1', name: '', price: '', stock: 2 }],
	},
	{
		id: '3',
		name: 'Ukuran',
		options: [{ id: '1', name: '', price: '', stock: 2 }],
	},
];

export const INITIAL_FORM_STATE: ProductFormData = {
	productName: '',
	category: '',
	description: '',
	price: '',
	stock: 2,
	hasVariants: false,
	images: [],
	variants: DEFAULT_VARIANTS,
};

// Utility function to generate unique IDs
export const generateId = (): string => {
	return Math.random().toString(36).substr(2, 9);
};

// Form validation utilities (to be expanded later)
export const validateProductForm = (data: ProductFormData): boolean => {
	// Basic validation - can be expanded with more sophisticated logic
	if (!data.productName.trim()) return false;
	if (!data.category) return false;
	if (!data.hasVariants && !data.price) return false;
	return true;
};
