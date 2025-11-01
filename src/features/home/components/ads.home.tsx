import { Image } from '@unpic/react';

const ads = [
	{
		image: '/assets/ads/market-sale.png',
		alt: 'Ad 1',
	},
	{
		image: '/assets/ads/burger.png',
		alt: 'Ad 2',
	},
	{
		image: '/assets/ads/solution.png',
		alt: 'Ad 3',
	},
];

const Ads = () => {
	return (
		<div className="w-full grid grid-cols-3 gap-5 mt-16 container mx-auto">
			{ads.map((ad, index) => (
				<div
					className="col-span-1 bg-red-500 aspect-video"
					key={index.toString()}
				>
					<Image
						layout="fullWidth"
						src={ad.image}
						alt={ad.alt}
						className="w-full h-full object-cover object-center"
					/>
				</div>
			))}
		</div>
	);
};

export default Ads;
