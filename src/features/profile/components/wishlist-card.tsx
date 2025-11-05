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
			className={`overflow-hidden hover:shadow-lg transition-shadow duration-300 p-0 group ${
				product.category === avail ? 'border border-orange-400' : 'border'
			}`}
		>
			<Link to="/product/$productId" params={{ productId: product.id }}>
				<div
					className={`relative h-36 overflow-hidden ${
						product.category === avail ? '' : 'grayscale'
					}`}
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
			<CardContent className="px-3 py-3 space-y-1.5">
				<p className="text-xs text-gray-600">{product.category}</p>
				<h3 className="font-semibold text-sm line-clamp-2 leading-tight">
					{product.name}
				</h3>
				{product.location && (
					<div className="flex items-center gap-1 text-xs text-gray-600">
						<MapPin className="w-3 h-3 flex-shrink-0" />
						<span className="truncate">{product.seller}</span>
					</div>
				)}
				<div className="flex items-center gap-1">
					{[...Array(5)].map((_, i) => (
						<Star
							key={i.toString()}
							className={`w-3.5 h-3.5 ${
								i < Math.floor(product.rating)
									? 'fill-orange-400 text-orange-400'
									: 'text-gray-300'
							}`}
						/>
					))}
					<span className="text-xs text-gray-600 ml-0.5">
						{product.rating} / {product.totalReviews}
					</span>
				</div>
				<p
					className={`font-bold text-base pt-1 ${
						product.category === avail ? 'text-primary' : 'text-gray-400'
					}`}
				>
					{product.price}
				</p>
			</CardContent>
			<CardFooter className="px-3 pb-3 pt-0 mt-auto">
				{product.category === avail ? (
					<Button
						className="w-full bg-gray-600 hover:bg-gray-700 text-white rounded-md text-sm font-medium py-2"
						onClick={() => onFavorite?.(product.id)}
					>
						Batal Favorit
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

export default function WishlistProduct({
	isFilterVisible = true,
}: ProductGridProps) {
	const handleFavorite = (productId: string) => {
		console.log('Favorited product:', productId);
		alert(`Added product ${productId} to favorites!`);
	};

	const gridCols = isFilterVisible ? 'lg:grid-cols-4' : 'lg:grid-cols-4';

	return (
		<div className="container mx-auto pt-6">
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
