import { MapPin, Star, X } from 'lucide-react';
import { Button } from '@/shared/components/ui/shadcn/button';
import { Card, CardContent } from '@/shared/components/ui/shadcn/card';
import type { UmkmPlace } from '../types';

interface PlaceDetailPopupProps {
	place: UmkmPlace;
	onClose: () => void;
	getCategoryColor: (category: string) => {
		bg: string;
		fill: string;
		pulse: string;
		text: string;
		label: string;
	};
}

export const PlaceDetailPopup = ({
	place,
	onClose,
	getCategoryColor,
}: PlaceDetailPopupProps) => {
	const handleDirections = () => {
		window.open(
			`https://www.google.com/maps/dir/?api=1&destination=${place.coordinates.lat},${place.coordinates.lng}`,
			'_blank',
		);
	};

	return (
		<div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:right-4 md:translate-x-0 z-30 w-full max-w-sm px-4 pointer-events-auto">
			<Card className="border p-0 border-gray-200 shadow-2xl">
				<CardContent className="p-4">
					<div className="flex justify-between items-start mb-3">
						<div className="flex-1 pr-8">
							<h3 className="font-bold text-base text-gray-900 mb-2">
								{place.name}
							</h3>
							<span
								className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(place.category).bg} text-white`}
							>
								{getCategoryColor(place.category).label}
							</span>
						</div>
						<button
							type="button"
							onClick={onClose}
							className="p-1 hover:bg-gray-100 rounded-full transition-colors"
							aria-label="Close"
						>
							<X className="w-4 h-4 text-gray-500" />
						</button>
					</div>

					<div className="space-y-3">
						<div className="flex items-start gap-2 text-xs text-gray-600">
							<MapPin className="w-4 h-4 shrink-0 mt-0.5" />
							<span>{place.address}</span>
						</div>

						{place.rating > 0 && (
							<div className="flex items-center gap-1">
								{[...Array(5)].map((_, i) => (
									<Star
										key={`popup-star-${place.id}-${i}`}
										className={`w-4 h-4 ${
											i < Math.floor(place.rating)
												? 'fill-yellow-400 text-yellow-400'
												: 'text-gray-300'
										}`}
									/>
								))}
								<span className="text-sm text-gray-600 ml-1">
									{place.rating.toFixed(1)} / 5
								</span>
							</div>
						)}
					</div>

					<div className="flex gap-2 mt-4">
						<Button size="sm" className="flex-1" onClick={handleDirections}>
							Arahkan
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};
