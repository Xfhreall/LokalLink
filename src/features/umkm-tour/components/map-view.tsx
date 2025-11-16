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
		<div className="flex-1 w-full h-full border border-primary relative overflow-hidden rounded-lg">
			<div ref={mapRef} className="w-full h-full z-0" />

			<img
				src="/assets/maps.svg"
				alt="Map"
				loading="lazy"
				className="absolute z-20 h-screen w-2xl pointer-events-none"
			/>

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
