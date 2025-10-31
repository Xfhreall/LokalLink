import Header from '@/shared/components/Header';
import BannerHome from '../components/banner.home';
import PopularProduct from '../components/popular-product';
import PromoProduct from '../components/promo-product';
import RateCategory from '../components/rate-category.home';
import ServiceCategory from '../components/service-category.home';

const HomeContainer = () => {
	return (
		<div className="w-full relative">
			<Header />
			<main className="px-12 py-4 flex gap-4 relative w-full">
				<div className="space-y-8 sticky top-40 self-start">
					<ServiceCategory />
					<RateCategory />
				</div>
				<div className="h-[400vh]">
					<BannerHome />
					<PopularProduct />
					<PromoProduct />
				</div>
			</main>
		</div>
	);
};

export default HomeContainer;
