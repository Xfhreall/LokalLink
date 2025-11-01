import { Link } from '@tanstack/react-router';
import { Image } from '@unpic/react';
import { BellDot, MapPin, Star } from 'lucide-react';
import { Button } from '@/shared/components/ui/shadcn/button';
import {
	Card,
	CardContent,
	CardFooter,
} from '@/shared/components/ui/shadcn/card';

// Type definitions
interface Product {
	id: string;
	name: string;
	category: string;
	seller: string;
	rating: number;
	totalReviews: number;
	price: string;
	image: string;
	location: string;
}

// Dummy data
const products: Product[] = [
	{
		id: '1',
		name: 'Ricebowl Iga Sambal Lombok Ijo',
		category: 'Belum Tersedia',
		seller: 'Kampung Kuliner',
		rating: 4.8,
		totalReviews: 5,
		price: 'Rp 25.000',
		image:
			'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
		location: 'Kampung Kuliner',
	},
	{
		id: '2',
		name: 'Kue Putu dan Klepon',
		category: 'Tersedia',
		seller: 'Ratu Kue',
		rating: 4.8,
		totalReviews: 5,
		price: 'Rp 5.000',
		image:
			'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
		location: 'Kampung Kuliner',
	},
	{
		id: '3',
		name: 'Pempek Palembang',
		category: 'Tersedia',
		seller: 'Pempek Palembang Laksanati',
		rating: 4.8,
		totalReviews: 5,
		price: 'Rp 15.000',
		image:
			'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
		location: 'Pempek Palembang Laksanati',
	},
	{
		id: '4',
		name: 'Jus Buah Naga',
		category: 'Tersedia',
		seller: 'Anjas Jus',
		rating: 4.8,
		totalReviews: 5,
		price: 'Rp 35.000',
		image:
			'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=300&fit=crop',
		location: 'Anjas Jus',
	},
	{
		id: '5',
		name: 'Sambal Cumi',
		category: 'Tersedia',
		seller: 'Sambal Gami Gajuyana',
		rating: 4.0,
		totalReviews: 5,
		price: 'Rp 5.000',
		image:
			'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=400&h=300&fit=crop',
		location: 'Kampung Kuliner',
	},
	{
		id: '6',
		name: 'Tepung Segitiga Biru',
		category: 'Tersedia',
		seller: 'Medinah Tempo',
		rating: 4.8,
		totalReviews: 5,
		price: 'Rp 35.000',
		image:
			'https://images.unsplash.com/photo-1608797178974-15b35a64ede9?w=400&h=300&fit=crop',
		location: 'Kampung Kuliner',
	},
	{
		id: '7',
		name: 'Sate Ayam',
		category: 'Tersedia',
		seller: 'Warung Lumayan 69',
		rating: 4.8,
		totalReviews: 5,
		price: 'Rp 105.000',
		image:
			'https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=400&h=300&fit=crop',
		location: 'Kampung Kuliner',
	},
	{
		id: '8',
		name: 'Tombakar Original',
		category: 'Tersedia',
		seller: 'Toko Tombakar Bangio',
		rating: 4.8,
		totalReviews: 5,
		price: 'Rp 35.000',
		image:
			'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&h=300&fit=crop',
		location: 'Kampung Kuliner',
	},
];

// ProductCard Component
interface ProductCardProps {
	product: Product;
	onFavorite?: (productId: string) => void;
}

const avail = 'Tersedia';

const ProductCard: React.FC<ProductCardProps> = ({ product, onFavorite }) => {
	return (
		<Card
			className={`overflow-hidden hover:shadow-lg transition-shadow  duration-300 p-0 gap-2 group ${product.category === avail ? 'border-tertiary-500' : ''}`}
		>
			<Link to="/product/$productId" params={{ productId: product.id }}>
				<div
					className={`relative h-40 overflow-hidden ${product.category === avail ? '' : 'grayscale'}`}
				>
					<Image
						layout="constrained"
						width={400}
						height={300}
						src={product.image}
						alt={product.name}
						className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
					/>
				</div>
			</Link>

			<CardContent className="px-4 space-y-2">
				<p className="text-sm">{product.category}</p>
				<h3 className="font-semibold text-sm line-clamp-2">{product.name}</h3>

				{product.location && (
					<div className="flex items-center gap-1 text-xs text-gray-600">
						<MapPin className="w-3 h-3" />
						<span className="truncate">{product.location}</span>
					</div>
				)}

				<div className="flex items-center gap-1">
					{[...Array(5)].map((_, i) => (
						<Star
							key={i.toString()}
							className={`w-3 h-3 ${
								i < Math.floor(product.rating)
									? 'fill-yellow-400 text-yellow-400'
									: 'text-gray-300'
							}`}
						/>
					))}
					<span className="text-xs text-gray-600 ml-1">
						{product.rating} / {product.totalReviews}
					</span>
				</div>
			</CardContent>

			<CardFooter className="p-4 pt-0 flex mt-2 justify-between items-center">
				<p
					className={`font-bold text-sm ${product.category === avail ? 'text-primary' : 'text-gray-400'}`}
				>
					{product.price}
				</p>

				{product.category === avail ? (
					<Button
						className="text-white rounded-full text-xs px-5"
						onClick={() => onFavorite?.(product.id)}
					>
						Favorit
					</Button>
				) : (
					<Button
						size={'icon'}
						className="rounded-full text-primary hover:text-white transition-colors duration-300 bg-primary-100 hover:bg-primary-400"
					>
						<BellDot />
					</Button>
				)}
			</CardFooter>
		</Card>
	);
};

// Main Demo Component
interface ProductGridProps {
	isFilterVisible?: boolean;
}

export default function ProductGrid({
	isFilterVisible = true,
}: ProductGridProps) {
	const handleFavorite = (productId: string) => {
		console.log('Favorited product:', productId);
		alert(`Added product ${productId} to favorites!`);
	};

	const gridCols = isFilterVisible ? 'lg:grid-cols-5' : 'lg:grid-cols-6';

	return (
		<div className="container mx-auto p-6">
			<h1 className="text-2xl font-bold mb-6">Katalog Produk</h1>

			<div
				className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${gridCols} gap-4 transition-all duration-300`}
			>
				{products.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						onFavorite={handleFavorite}
					/>
				))}
			</div>
		</div>
	);
}

// Export products for use in detail page
export { products };
