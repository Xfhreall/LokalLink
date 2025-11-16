export interface UmkmPlace {
	id: number;
	name: string;
	address: string;
	rating: number;
	coordinates: { lat: number; lng: number };
	category: string;
}

export interface CategoryColor {
	bg: string;
	fill: string;
	pulse: string;
	text: string;
	label: string;
}

export type CategoryColors = Record<string, CategoryColor>;
