import { ProductCard } from '@/shared/components/ui/custom/product-card';
import { products } from '@/shared/data/products';

interface RelatedProductsProps {
	currentProductStore: string;
	currentProductId?: string;
	limit?: number;
}

export function RelatedProducts({
	currentProductStore,
	currentProductId,
	limit = 10,
}: RelatedProductsProps) {
	const relatedProducts = products
		.filter(
			(p) => p.seller === currentProductStore && p.id !== currentProductId,
		)
		.slice(0, limit);

	return (
		<div className="mt-12">
			<h2 className="text-2xl font-bold mb-6">Produk di Toko Serupa</h2>
			{relatedProducts.length === 0 && (
				<section className="min-h-72 grid place-content-center ">
					<p className="text-gray-500 col-span-full text-center">
						Tidak ada produk terkait yang tersedia.
					</p>
				</section>
			)}
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
				{relatedProducts.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
}
