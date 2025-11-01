import { Image } from '@unpic/react';

const BannerHome = () => {
	return (
		<div className="w-full h-[327px] relative rounded-4xl container mx-auto overflow-hidden">
			<Image
				src="/assets/banner.png"
				alt="Banner Home"
				layout="fullWidth"
				className="w-full h-full object-cover"
			/>
		</div>
	);
};

export default BannerHome;
