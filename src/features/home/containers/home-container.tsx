import { AnimatePresence, motion } from 'framer-motion';
import Footer from '@/shared/components/Footer';
import Header from '@/shared/components/Header';
import { ScrollArea } from '@/shared/components/ui/shadcn/scroll-area';
import { useFilter } from '@/shared/context/filter-context';
import Ads from '../components/ads.home';
import BannerHome from '../components/banner.home';
import PopularProduct from '../components/popular-product';
import PromoProduct from '../components/promo-product';
import RateCategory from '../components/rate-category.home';
import ServiceCategory from '../components/service-category.home';
import UMKMCategories from '../components/umkm-categories.home';

const HomeContainer = () => {
	const { isFilterVisible } = useFilter();

	return (
		<div className="w-full relative">
			<Header />
			<main className="px-12 py-4 flex gap-4 relative w-full">
				{/* filter  */}
				<AnimatePresence mode="wait">
					{isFilterVisible && (
						<motion.div
							initial={{ width: 0, opacity: 0 }}
							animate={{ width: 'auto', opacity: 1 }}
							exit={{ width: 0, opacity: 0 }}
							transition={{
								duration: 0.2,
								ease: 'easeInOut',
								type: 'tween',
							}}
							className="sticky top-40 h-[80vh] overflow-hidden"
						>
							<ScrollArea className="h-[80vh] pb-4 min-w-2xs w-max">
								<div className="space-y-6">
									<ServiceCategory />
									<RateCategory />
								</div>
							</ScrollArea>
						</motion.div>
					)}
				</AnimatePresence>

				{/* main content */}
				<motion.div
					layout
					transition={{ duration: 0.3, ease: 'easeInOut' }}
					className="pb-4 flex-1"
				>
					<BannerHome />
					<PopularProduct isFilterVisible={isFilterVisible} />
					<PromoProduct />
					<Ads />
				</motion.div>
			</main>
			<UMKMCategories />
			<Footer />
		</div>
	);
};

export default HomeContainer;
