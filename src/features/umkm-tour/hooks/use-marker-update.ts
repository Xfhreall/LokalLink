import type * as L from 'leaflet';
import { useEffect } from 'react';
import { umkmPlaces } from '../data/umkm-places';
import type { UmkmPlace } from '../types';

export const useMarkerUpdate = (
	markersRef: React.RefObject<Map<number, L.Marker>>,
	selectedPlace: UmkmPlace | null,
	hoveredPlace: UmkmPlace | null,
	getCategoryColor: (category: string) => {
		bg: string;
		fill: string;
		pulse: string;
		text: string;
		label: string;
	},
) => {
	useEffect(() => {
		const updateMarkers = async () => {
			const L = (await import('leaflet')).default;

			markersRef.current?.forEach((marker, id) => {
				const place = umkmPlaces.find((p) => p.id === id);
				if (!place) return;

				const colors = getCategoryColor(place.category);
				const isSelected = selectedPlace?.id === id;
				const isHovered = hoveredPlace?.id === id;

				const customIcon = L.divIcon({
					className: 'custom-marker',
					html: `
						<div class="relative flex items-center justify-center">
							${
								isSelected || isHovered
									? `
								<div class="absolute inset-0 flex items-center justify-center">
									<div class="absolute w-10 h-10 rounded-full animate-ping" style="background-color: ${colors.pulse};"></div>
								</div>
							`
									: ''
							}
							<div class="relative flex items-center justify-center transition-transform ${
								isSelected || isHovered ? 'scale-125' : ''
							}">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="${colors.fill}" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
									<circle cx="12" cy="10" r="3"></circle>
								</svg>
							</div>
						</div>
					`,
					iconSize: [40, 40],
					iconAnchor: [20, 40],
				});

				marker.setIcon(customIcon);
			});
		};

		updateMarkers();
	}, [selectedPlace, hoveredPlace, getCategoryColor, markersRef]);
};
