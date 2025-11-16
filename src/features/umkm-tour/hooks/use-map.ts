import type * as L from 'leaflet';
import { useCallback, useEffect, useRef } from 'react';
import { categoryColors } from '../data/categories';
import { umkmPlaces } from '../data/umkm-places';
import type { UmkmPlace } from '../types';

export const useMap = (
	mapRef: React.RefObject<HTMLDivElement | null>,
	handleMarkerClick: (place: UmkmPlace) => void,
) => {
	const leafletMapRef = useRef<L.Map | null>(null);
	const markersRef = useRef<Map<number, L.Marker>>(new Map());

	const getCategoryColor = useCallback((category: string) => {
		return (
			categoryColors[category as keyof typeof categoryColors] ||
			categoryColors.lainnya
		);
	}, []);

	useEffect(() => {
		if (!mapRef.current || leafletMapRef.current) return;

		let map: L.Map | null = null;
		const initMap = async () => {
			const L = (await import('leaflet')).default;
			await import('leaflet/dist/leaflet.css');
			// biome-ignore lint/suspicious/noExplicitAny: Leaflet requires any type for icon prototype
			delete (L.Icon.Default.prototype as any)._getIconUrl;
			L.Icon.Default.mergeOptions({
				iconRetinaUrl:
					'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
				iconUrl:
					'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
				shadowUrl:
					'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
			});

			if (!mapRef.current) return;
			map = L.map(mapRef.current).setView([-7.9435, 112.6102], 21);
			map.on('click', (e) => console.log(e.latlng));
			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				maxZoom: 30,
				attribution: '© OpenStreetMap contributors',
			}).addTo(map);

			const mapBounds: L.LatLngBoundsExpression = [
				[-7.9443, 112.60995],
				[-7.94262, 112.61045],
			];

			L.imageOverlay('/assets/maps.svg', mapBounds, {
				opacity: 1,
				interactive: false,
			}).addTo(map);

			leafletMapRef.current = map;
			if (map) {
				umkmPlaces.forEach((place) => {
					const colors = getCategoryColor(place.category);
					const customIcon = L.divIcon({
						className: 'custom-marker',
						html: `
							<div class="flex items-center justify-center rounded-full">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="${colors.fill}" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
									<circle cx="12" cy="10" r="3"></circle>
								</svg>
							</div>
						`,
						iconSize: [40, 40],
						iconAnchor: [20, 40],
					});

					const marker = L.marker(
						[place.coordinates.lat, place.coordinates.lng],
						{
							icon: customIcon,
						},
					);

					marker.on('click', () => {
						handleMarkerClick(place);
					});

					if (map) marker.addTo(map);
					markersRef.current.set(place.id, marker);
				});
			}
		};

		initMap();
		return () => {
			if (leafletMapRef.current) {
				leafletMapRef.current.remove();
				leafletMapRef.current = null;
			}
			markersRef.current.clear();
		};
	}, [getCategoryColor, handleMarkerClick, mapRef]);

	return { leafletMapRef, markersRef, getCategoryColor };
};
