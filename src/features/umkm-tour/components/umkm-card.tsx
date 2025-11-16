import { Star } from 'lucide-react';
import { Card, CardContent } from '@/shared/components/ui/shadcn/card';
import type { UmkmPlace } from '../types';

interface UmkmCardProps {
	place: UmkmPlace;
	isSelected: boolean;
	isHovered: boolean;
	onClick: () => void;
	onMouseEnter: () => void;
	onMouseLeave: () => void;
	getCategoryColor: (category: string) => {
		bg: string;
		fill: string;
		pulse: string;
		text: string;
		label: string;
	};
}

export const UmkmCard = ({
	place,
	isSelected,
	isHovered,
	onClick,
	onMouseEnter,
	onMouseLeave,
	getCategoryColor,
}: UmkmCardProps) => {
	const colors = getCategoryColor(place.category);

	return (
		<Card
			className={`border transition-all cursor-pointer ${
				isSelected
					? `border-${colors.text} bg-${colors.text}/5 shadow-md`
					: isHovered
						? `border-${colors.text}/50`
						: 'border-gray-200 hover:border-gray-400'
			}`}
			onClick={onClick}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<CardContent className="p-3">
				<div className="space-y-2">
					<div className="flex items-start justify-between gap-2">
						<h3 className="font-semibold text-sm text-gray-900 line-clamp-2 flex-1">
							{place.name}
						</h3>
						<span
							className={`px-2 py-0.5 rounded-full text-xs font-medium ${colors.bg} text-white shrink-0`}
						>
							{colors.label}
						</span>
					</div>

					<div className="flex items-start gap-2 text-xs text-gray-600">
						<span className="line-clamp-2">{place.address}</span>
					</div>

					{place.rating > 0 && (
						<div className="flex items-center gap-1">
							{[...Array(5)].map((_, i) => (
								<Star
									key={`star-${place.id}-${i}`}
									className={`w-3 h-3 ${
										i < Math.floor(place.rating)
											? 'fill-yellow-400 text-yellow-400'
											: 'text-gray-300'
									}`}
								/>
							))}
							<span className="text-xs text-gray-600 ml-1">
								{place.rating.toFixed(1)} / 5
							</span>
						</div>
					)}
				</div>
			</CardContent>
		</Card>
	);
};
