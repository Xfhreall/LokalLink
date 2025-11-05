import { Image } from '@unpic/react';
import { MapPin, Share2, Star } from 'lucide-react';
import { Button } from '@/shared/components/ui/shadcn/button';
import type { Store } from '@/shared/data/dtos/product.dto';

interface StoreHeaderProps {
	store: Store;
}

export function StoreHeader({ store }: StoreHeaderProps) {
	const handleContact = () => {
		const phoneNumber = store.phone || '6281234567890';
		const message = `Halo ${store.name}, saya tertarik dengan produk-produk Anda.`;
		const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
		window.open(whatsappUrl, '_blank');
	};

	return (
		<div className="space-y-4">
			{/* Store Image Banner */}
			<div className="w-full h-[350px] rounded-lg overflow-hidden bg-linear-to-r from-green-600 to-green-500 relative">
				<Image
					layout="fullWidth"
					src={store.image}
					alt={store.name}
					className="w-full h-full object-cover"
				/>
			</div>

			{/* Store Profile Section */}
			<main className="flex items-center justify-between">
				<div className="flex items-start gap-4">
					{/* Store Avatar */}
					<div className="size-24 rounded-full overflow-hidden bg-white border-4 border-white shadow-lg relative z-10 shrink-0">
						<Image
							layout="fullWidth"
							src={store.image}
							alt={store.name}
							className="w-full h-full object-cover"
						/>
					</div>
					<article>
						{/* Store Info */}
						<div className="flex-1">
							<h1 className="text-lg font-bold text-gray-900">{store.name}</h1>
							<div className="flex items-center gap-1 text-sm text-gray-600">
								<MapPin className="w-3 h-3" />
								<span className="line-clamp-1">
									{store.address.split(',')[0]}
								</span>
							</div>
						</div>
						<div className="mt-2 gap-2 flex items-center">
							<Button
								onClick={handleContact}
								className="rounded-full px-12"
								size={'sm'}
							>
								Hubungi Sekarang
							</Button>
							<Button
								variant={'outline'}
								className="border-black rounded-lg"
								size={'sm'}
							>
								<Share2 />
							</Button>
						</div>
					</article>
				</div>
				{/* Rating and Hours */}
				<div className="flex items-center gap-4">
					<div className="flex flex-col items-center">
						<div className="flex items-center gap-1 justify-end">
							<Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
							<span className="font-bold text-gray-900">{store.rating}</span>
						</div>
						<div className="text-xs text-gray-600 mt-0.5">
							Rating & {store.totalReviews} ulasan
						</div>
					</div>
					<div className="flex flex-col items-start gap-1">
						<div className="text-sm font-semibold text-gray-900">
							Buka {store.openingHours}
						</div>
						<div className="text-xs text-gray-600">Jam Operasi Hari ini</div>
					</div>
				</div>
			</main>
		</div>
	);
}
