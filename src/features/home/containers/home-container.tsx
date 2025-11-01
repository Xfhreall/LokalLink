import Footer from '@/shared/components/Footer';
import Header from '@/shared/components/Header';
import { ScrollArea } from '@/shared/components/ui/shadcn/scroll-area';
import Ads from '../components/ads.home';
import BannerHome from '../components/banner.home';
import PopularProduct from '../components/popular-product';
import PromoProduct from '../components/promo-product';
import RateCategory from '../components/rate-category.home';
import ServiceCategory from '../components/service-category.home';
import UMKMCategories from '../components/umkm-categories.home';

const HomeContainer = () => {
	return (
		<div className="w-full relative">
			<Header />
			<main className="px-12 py-4 flex gap-4 relative w-full">
				<div className="sticky top-40 h-[80vh]">
					<ScrollArea className="h-[80vh] pb-4 min-w-2xs w-max">
						<div className="space-y-6">
							<ServiceCategory />
							<RateCategory />
						</div>
					</ScrollArea>
				</div>
				<div className="pb-4">
					<BannerHome />
					<PopularProduct />
					<PromoProduct />
					<Ads />
				</div>
			</main>
			<UMKMCategories />
			<Footer />
		</div>
	);
};

export default HomeContainer;
