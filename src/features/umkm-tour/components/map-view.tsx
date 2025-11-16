import type { UmkmPlace } from '../types';
import { PlaceDetailPopup } from './place-detail-popup';

interface MapViewProps {
	mapRef: React.RefObject<HTMLDivElement | null>;
	selectedPlace: UmkmPlace | null;
	onCloseDetail: () => void;
	getCategoryColor: (category: string) => {
		bg: string;
		fill: string;
		pulse: string;
		text: string;
		label: string;
	};
}

export const MapView = ({
	mapRef,
	selectedPlace,
	onCloseDetail,
	getCategoryColor,
}: MapViewProps) => {
	return (
		<div className="relative flex-1 w-full h-full overflow-hidden rounded-lg border border-border bg-background">
			<div ref={mapRef} className="w-full h-full z-0" />

			{!mapRef.current && (
				<div className="absolute inset-0 z-30 flex items-center justify-center bg-background/80 backdrop-blur-sm">
					<div className="flex flex-col items-center gap-3">
						<div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
						<p className="text-sm font-medium">Loading map...</p>
					</div>
				</div>
			)}

			{selectedPlace && (
				<PlaceDetailPopup
					place={selectedPlace}
					onClose={onCloseDetail}
					getCategoryColor={getCategoryColor}
				/>
			)}
		</div>
	);
};
