import { Image } from '@unpic/react';
import { MapPin, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Badge } from '@/shared/components/ui/shadcn/badge';
import { Button } from '@/shared/components/ui/shadcn/button';
import { Card } from '@/shared/components/ui/shadcn/card';

// Type definitions
interface Deal {
	id: string;
	name: string;
	store: string;
	rating: number;
	totalReviews: number;
	price: string;
	priceNote?: string;
	image: string;
	endTime: number; // timestamp in milliseconds
}

// Dummy data
const deals: Deal[] = [
	{
		id: '1',
		name: 'Kripik Kaca Asli Dinoyo',
		store: 'SeaFood store',
		rating: 4.8,
		totalReviews: 5,
		price: 'Rp 35.000',
		priceNote: '5rb+ terjual',
		image:
			'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
		endTime: Date.now() + 1 * 60 * 60 * 1000 + 12 * 60 * 1000 + 56 * 1000, // 2 hours 12 minutes 56 seconds from now
	},
	{
		id: '2',
		name: 'Kripik Kaca Asli Dinoyo',
		store: 'SeaFood store',
		rating: 4.8,
		totalReviews: 5,
		price: 'Rp 35.000',
		priceNote: '5rb+ terjual',
		image:
			'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
		endTime: Date.now() + 2 * 60 * 60 * 1000 + 12 * 60 * 1000 + 56 * 1000,
	},
	{
		id: '3',
		name: 'Kripik Kaca Asli Dinoyo',
		store: 'SeaFood store',
		rating: 4.8,
		totalReviews: 5,
		price: 'Rp 35.000',
		priceNote: '5rb+ terjual',
		image:
			'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=300&fit=crop',
		endTime: Date.now() + 4 * 60 * 60 * 1000 + 12 * 60 * 1000 + 56 * 1000,
	},
	{
		id: '4',
		name: 'Kripik Kaca Asli Dinoyo',
		store: 'SeaFood store',
		rating: 4.8,
		totalReviews: 5,
		price: 'Rp 35.000',
		priceNote: '5rb+ terjual',
		image:
			'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=400&h=300&fit=crop',
		endTime: Date.now() + 3 * 30 * 60 * 1000 + 12 * 60 * 1000 + 56 * 1000,
	},
];

// DealCard Component
interface DealCardProps {
	deal: Deal;
	onFavorite?: (dealId: string) => void;
}

const DealCard: React.FC<DealCardProps> = ({ deal, onFavorite }) => {
	const [timeLeft, setTimeLeft] = useState({
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		const calculateTimeLeft = () => {
			const difference = deal.endTime - Date.now();

			if (difference > 0) {
				const hours = Math.floor(difference / (1000 * 60 * 60));
				const minutes = Math.floor(
					(difference % (1000 * 60 * 60)) / (1000 * 60),
				);
				const seconds = Math.floor((difference % (1000 * 60)) / 1000);

				setTimeLeft({ hours, minutes, seconds });
			} else {
				setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
			}
		};

		calculateTimeLeft();
		const timer = setInterval(calculateTimeLeft, 1000);

		return () => clearInterval(timer);
	}, [deal.endTime]);

	const formatTime = (time: number) => time.toString().padStart(2, '0');

	return (
		<Card className="hover:shadow-lg transition-shadow duration-300 p-0 group rounded-3xl aspect-square relative">
			<div className="relative h-full overflow-hidden rounded-3xl">
				<Image
					layout="constrained"
					width={400}
					height={300}
					src={deal.image}
					alt={deal.name}
					className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
				/>
			</div>
			{/* deskripsi */}
			<article className="absolute -bottom-[50%] translate-y-[-50%] left-[50%] -right-[50%] translate-x-[-50%] w-[90%] shadow-lg transition-transform duration-300 rounded-3xl">
				{/* Countdown Timer Badges */}
				<div className="absolute -top-[30%] items-center left-[50%] -translate-x-[50%] flex gap-1">
					<Badge className="bg-white  font-bold px-2.5 py-1.5 rounded-sm shadow-md text-sm">
						<span className="text-amber-700">{formatTime(timeLeft.hours)}</span>
					</Badge>
					<span className="text-white font-bold">:</span>
					<Badge className="bg-white font-bold px-2.5 py-1.5 rounded-sm shadow-md text-sm">
						<span className="text-amber-700">
							{formatTime(timeLeft.minutes)}
						</span>
					</Badge>
					<span className="text-white font-bold">:</span>
					<Badge className="bg-white  font-bold px-2.5 py-1.5 rounded-sm shadow-md text-sm">
						<span className="text-amber-700">
							{formatTime(timeLeft.seconds)}
						</span>
					</Badge>
				</div>
				<div className="px-4 py-3 space-y-1.5 bg-white rounded-3xl">
					{deal.priceNote && (
						<p className="text-xs text-gray-500">{deal.priceNote}</p>
					)}
					<h3 className="font-semibold text-sm line-clamp-1">{deal.name}</h3>

					<div className="flex items-center gap-1 text-xs text-gray-600">
						<MapPin className="w-3 h-3" />
						<span className="truncate">{deal.store}</span>
					</div>

					<div className="flex items-center gap-1 mb-4">
						{[...Array(5)].map((_, i) => (
							<Star
								key={i.toString()}
								className={`w-3 h-3 ${
									i < Math.floor(deal.rating)
										? 'fill-yellow-400 text-yellow-400'
										: 'text-gray-300'
								}`}
							/>
						))}
						<span className="text-xs text-gray-600 ml-1">
							{deal.rating} / {deal.totalReviews}
						</span>
					</div>
					<footer className="flex justify-between items-center">
						<p className="font-bold text-base text-gray-900">{deal.price}</p>

						<Button
							className="text-white rounded-full px-6 bg-green-500 hover:bg-green-600 font-medium shadow-sm"
							size="sm"
							onClick={() => onFavorite?.(deal.id)}
						>
							Favorit
						</Button>
					</footer>
				</div>

				{/* <div className="px-4 pb-4 pt-2 flex justify-between items-center bg-orange-50 rounded-b-3xl"></div> */}
			</article>
		</Card>
	);
};

// Main Demo Component
export default function DealsOfTheDay() {
	const handleFavorite = (dealId: string) => {
		console.log('Favorited deal:', dealId);
		alert(`Added deal ${dealId} to favorites!`);
	};

	return (
		<div className="container mx-auto p-6 bg-white">
			<h1 className="text-2xl font-bold mb-6 text-gray-900">
				Deals Of The Day
			</h1>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{deals.map((deal) => (
					<DealCard key={deal.id} deal={deal} onFavorite={handleFavorite} />
				))}
			</div>
		</div>
	);
}
