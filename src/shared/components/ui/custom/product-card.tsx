import { Link } from '@tanstack/react-router';
import { Image } from '@unpic/react';
import { BellDot, MapPin, Star } from 'lucide-react';
import { Button } from '@/shared/components/ui/shadcn/button';
import {
	Card,
	CardContent,
	CardFooter,
} from '@/shared/components/ui/shadcn/card';
import type { Product } from '@/shared/data/dtos/product.dto';
import { products } from '@/shared/data/products';

type ProductCardProps = {
	product: Product;
	onFavorite?: (productId: string) => void;
};

const avail = 'Tersedia';

export const ProductCard: React.FC<ProductCardProps> = ({
	product,
	onFavorite,
}) => {
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
						<span className="truncate">{product.seller}</span>
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

type ProductGridProps = {
	isFilterVisible?: boolean;
};

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
