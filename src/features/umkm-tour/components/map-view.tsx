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
