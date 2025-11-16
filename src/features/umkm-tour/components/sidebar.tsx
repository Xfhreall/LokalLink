import { Card, CardContent } from '@/shared/components/ui/shadcn/card';
import { categoryColors } from '../data/categories';
import { umkmPlaces } from '../data/umkm-places';
import type { UmkmPlace } from '../types';
import { UmkmCard } from './umkm-card';

interface SidebarProps {
	isOpen: boolean;
	selectedPlace: UmkmPlace | null;
	hoveredPlace: UmkmPlace | null;
	onPlaceClick: (place: UmkmPlace) => void;
	onPlaceHover: (place: UmkmPlace | null) => void;
	getCategoryColor: (category: string) => {
		bg: string;
		fill: string;
		pulse: string;
		text: string;
		label: string;
	};
}

export const Sidebar = ({
	isOpen,
	selectedPlace,
	hoveredPlace,
	onPlaceClick,
	onPlaceHover,
	getCategoryColor,
}: SidebarProps) => {
	return (
		<div
			className={`${
				isOpen ? 'translate-x-0' : '-translate-x-full'
			} absolute left-0 top-0 h-full w-full max-w-sm shadow-lg transition-transform duration-300 ease-in-out z-10 lg:relative lg:translate-x-0`}
		>
			<Card className="h-full p-2 border border-primary rounded-xl shadow-none">
				<CardContent className="p-4 space-y-4 h-full overflow-y-auto">
					<div className="flex items-center justify-between">
						<h2 className="text-lg font-bold text-gray-900">
							Place to go UMKM
						</h2>
					</div>

					<div className="grid grid-cols-2 gap-2 pb-3 border-b">
						{Object.entries(categoryColors).map(([key, color]) => (
							<div key={key} className="flex items-center gap-2">
								<div className={`w-3 h-3 rounded-full ${color.bg}`} />
								<span className="text-xs text-gray-600">{color.label}</span>
							</div>
						))}
					</div>

					<div className="space-y-3">
						{umkmPlaces.map((place) => (
							<UmkmCard
								key={place.id}
								place={place}
								isSelected={selectedPlace?.id === place.id}
								isHovered={hoveredPlace?.id === place.id}
								onClick={() => onPlaceClick(place)}
								onMouseEnter={() => onPlaceHover(place)}
								onMouseLeave={() => onPlaceHover(null)}
								getCategoryColor={getCategoryColor}
							/>
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	);
};
