import { useParams } from '@tanstack/react-router';
import { products, stores } from '@/shared/data/products';
import { StoreHeader } from '../components/store-header';
import { StoreInfo } from '../components/store-info';
import { StoreProducts } from '../components/store-products';

const StoreDetail = () => {
	const { storeId } = useParams({ from: '/toko/$storeId' });

	// Find store by ID or by name (for backward compatibility)
	const store = stores.find(
		(s) => s.id === storeId || s.name === decodeURIComponent(storeId),
	);

	// Get all products from this store
	const storeProducts = store
		? products.filter((p) => p.seller === store.name)
		: [];

	if (!store) {
		return (
			<div className="w-full min-h-screen">
				<main className="px-12 py-8">
					<div className="text-center">
						<h1 className="text-2xl font-bold mb-4">Toko tidak ditemukan</h1>
						<p className="text-gray-600">
							Maaf, toko yang Anda cari tidak tersedia.
						</p>
					</div>
				</main>
			</div>
		);
	}

	return (
		<div className="w-full min-h-screen">
			<main className="py-8 container mx-auto">
				<div className="space-y-6">
					<StoreHeader store={store} />
					<StoreProducts products={storeProducts} />
					<StoreInfo store={store} />
				</div>
			</main>
		</div>
	);
};

export default StoreDetail;
