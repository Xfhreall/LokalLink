import { useParams } from '@tanstack/react-router';
import {
	productInfos,
	products,
	ratingDistributions,
	reviews,
} from '@/shared/data/products';
import {
	generateOrderMessage,
	generateWhatsAppLink,
} from '@/shared/lib/whatsapp';
import { ProductHeader } from '../components/product-header';
import { ProductImage } from '../components/product-image';
import { ProductPriceActions } from '../components/product-price-actions';
import { ProductTabs } from '../components/product-tabs';
import { RelatedProducts } from '../components/related-products';
import { useProductQuantity } from '../hooks/useProductQuantity';

const ProductDetail = () => {
	const { productId } = useParams({ from: '/product/$productId' });
	const product = products.find((p) => p.id === productId);
	const { quantity, increment, decrement } = useProductQuantity();

	const productReviews = reviews.filter((r) => r.productId === productId);
	const ratingDistribution = ratingDistributions.find(
		(rd) => rd.productId === productId,
	);
	const productInfo = productInfos.find((pi) => pi.productId === productId);

	if (!product) {
		return (
			<div className="w-full min-h-screen">
				<main className="px-4 md:px-12 py-8">
					<div className="text-center">
						<h1 className="text-2xl font-bold mb-4">Produk tidak ditemukan</h1>
						<p className="text-gray-600">
							Maaf, produk yang Anda cari tidak tersedia.
						</p>
					</div>
				</main>
			</div>
		);
	}

	const handleContact = () => {
		const phoneNumber = product.phone || '6281234567890';
		const message = generateOrderMessage(
			product.seller,
			product.name,
			quantity,
		);
		const whatsappUrl = generateWhatsAppLink(phoneNumber, message);
		window.open(whatsappUrl, '_blank');
	};

	const handleAddToWishlist = () => {
		alert('Produk ditambahkan ke wishlist!');
	};

	const isAvailable = product.category === 'Tersedia';

	return (
		<div className="w-full min-h-screen">
			<main className="px-4 md:px-12 py-8 container mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
					<ProductImage src={product.image} alt={product.name} />

					<div className="space-y-6">
						<ProductHeader
							name={product.name}
							seller={product.seller}
							location={product.location}
							rating={product.rating}
							totalReviews={product.totalReviews}
							category={product.category}
						/>

						<ProductPriceActions
							productId={product.id}
							productName={product.name}
							productImage={product.image}
							seller={product.seller}
							location={product.location}
							price={product.price}
							quantity={quantity}
							onIncrement={increment}
							onDecrement={decrement}
							onContact={handleContact}
							onAddToWishlist={handleAddToWishlist}
							isAvailable={isAvailable}
						/>
					</div>
				</div>

				<ProductTabs
					productInfo={productInfo}
					ratingDistribution={ratingDistribution}
					reviews={productReviews}
				/>
				<RelatedProducts
					currentProductStore={product.seller}
					currentProductId={productId}
				/>
			</main>
		</div>
	);
};

export default ProductDetail;
