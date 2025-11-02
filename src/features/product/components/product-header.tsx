import { Link } from '@tanstack/react-router';
import { MapPin, Star, Store } from 'lucide-react';
import { getStoreId } from '@/shared/lib/store';

interface ProductHeaderProps {
	name: string;
	seller: string;
	location: string;
	rating: number;
	totalReviews: number;
	category: string;
}

export function ProductHeader({
	name,
	seller,
	location,
	rating,
}: ProductHeaderProps) {
	const storeId = getStoreId(seller);

	return (
		<div className="space-y-3">
			<h1 className="text-2xl font-bold leading-tight">{name}</h1>

			{/* Seller */}
			<Link
				to="/toko/$storeId"
				params={{ storeId }}
				className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors w-fit"
			>
				<Store className="w-4 h-4" />
				<span className="text-sm font-medium hover:underline">{seller}</span>
			</Link>

			{/* Location */}
			<div className="flex items-center gap-2 text-gray-600">
				<MapPin className="w-4 h-4 text-green-600" />
				<span className="text-sm">{location}</span>
			</div>

			{/* Rating */}
			<div className="flex items-center gap-3">
				<div className="flex items-center gap-1">
					{[...Array(5)].map((_, i) => (
						<Star
							key={i.toString()}
							className={`w-3 h-3 ${
								i < Math.floor(rating)
									? 'fill-yellow-400 text-yellow-400'
									: 'text-gray-300'
							}`}
						/>
					))}
				</div>
				<p className="text-gray-500 text-xs">{rating}/5</p>
				<span className="text-xs text-gray-500">80+ terjual</span>
			</div>
		</div>
	);
}
