import { useCallback, useRef, useState } from 'react';
import { MapView } from '../components/map-view';
import { Sidebar } from '../components/sidebar';
import { ToggleSidebarButton } from '../components/toggle-sidebar-button';
import { useMap } from '../hooks/use-map';
import { useMarkerUpdate } from '../hooks/use-marker-update';
import type { UmkmPlace } from '../types';

export const UmkmTourContainer = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	const [selectedPlace, setSelectedPlace] = useState<UmkmPlace | null>(null);
	const [hoveredPlace, setHoveredPlace] = useState<UmkmPlace | null>(null);
	const mapRef = useRef<HTMLDivElement | null>(null);

	const handleMarkerClick = useCallback((place: UmkmPlace) => {
		setSelectedPlace(place);
		setIsSidebarOpen(false);
	}, []);

	const { leafletMapRef, markersRef, getCategoryColor } = useMap(
		mapRef,
		handleMarkerClick,
	);

	useMarkerUpdate(markersRef, selectedPlace, hoveredPlace, getCategoryColor);

	const handlePlaceCardClick = useCallback(
		(place: UmkmPlace) => {
			setSelectedPlace(place);

			if (leafletMapRef.current) {
				leafletMapRef.current.setView(
					[place.coordinates.lat, place.coordinates.lng],
					22,
					{
						animate: true,
						duration: 1,
					},
				);
			}
		},
		[leafletMapRef],
	);

	const handleCloseDetail = useCallback(() => {
		setSelectedPlace(null);
	}, []);

	const handlePlaceHover = useCallback((place: UmkmPlace | null) => {
		setHoveredPlace(place);
	}, []);

	return (
		<div className="relative w-full h-[calc(100vh-15rem)] flex flex-col lg:flex-row">
			<div className="relative flex-1 flex gap-4">
				<Sidebar
					isOpen={isSidebarOpen}
					selectedPlace={selectedPlace}
					hoveredPlace={hoveredPlace}
					onPlaceClick={handlePlaceCardClick}
					onPlaceHover={handlePlaceHover}
					getCategoryColor={getCategoryColor}
				/>

				<ToggleSidebarButton
					isOpen={isSidebarOpen}
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
				/>

				<MapView
					mapRef={mapRef}
					selectedPlace={selectedPlace}
					onCloseDetail={handleCloseDetail}
					getCategoryColor={getCategoryColor}
				/>
			</div>
		</div>
	);
};
