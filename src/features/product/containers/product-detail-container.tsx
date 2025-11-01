import { useParams } from '@tanstack/react-router';
import { Image } from '@unpic/react';
import { Heart, MapPin, Share2, ShoppingCart, Star } from 'lucide-react';
import { products } from '@/shared/components/ui/custom/product-card';
import { Badge } from '@/shared/components/ui/shadcn/badge';
import { Button } from '@/shared/components/ui/shadcn/button';
import { Card, CardContent } from '@/shared/components/ui/shadcn/card';
import { Separator } from '@/shared/components/ui/shadcn/separator';

const ProductDetail = () => {
	const { productId } = useParams({ from: '/product/$productId' });
	const product = products.find((p) => p.id === productId);

	if (!product) {
		return (
			<div className="w-full min-h-screen">
				<main className="px-12 py-8">
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

	return (
		<div className="w-full min-h-screen">
			<main className="px-12 py-8 max-w-7xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
					{/* Product Image */}
					<div className="relative">
						<Card className="overflow-hidden">
							<Image
								layout="constrained"
								width={600}
								height={600}
								src={product.image}
								alt={product.name}
								className="w-full h-auto object-cover"
							/>
						</Card>
					</div>

					{/* Product Info */}
					<div className="space-y-6">
						<div>
							<Badge
								variant={
									product.category === 'Tersedia' ? 'default' : 'secondary'
								}
								className="mb-2"
							>
								{product.category}
							</Badge>
							<h1 className="text-3xl font-bold mb-2">{product.name}</h1>
							<div className="flex items-center gap-2 text-gray-600 mb-4">
								<MapPin className="w-4 h-4" />
								<span>{product.location}</span>
							</div>
						</div>

						<Separator />

						{/* Rating */}
						<div className="flex items-center gap-4">
							<div className="flex items-center gap-1">
								{[...Array(5)].map((_, i) => (
									<Star
										key={i.toString()}
										className={`w-5 h-5 ${
											i < Math.floor(product.rating)
												? 'fill-yellow-400 text-yellow-400'
												: 'text-gray-300'
										}`}
									/>
								))}
							</div>
							<span className="text-lg font-semibold">{product.rating}</span>
							<span className="text-gray-600">
								({product.totalReviews} ulasan)
							</span>
						</div>

						<Separator />

						{/* Price */}
						<div>
							<p className="text-sm text-gray-600 mb-1">Harga</p>
							<p className="text-4xl font-bold text-primary">{product.price}</p>
						</div>

						<Separator />

						{/* Seller Info */}
						<div>
							<p className="text-sm text-gray-600 mb-1">Penjual</p>
							<p className="text-lg font-semibold">{product.seller}</p>
						</div>

						<Separator />

						{/* Actions */}
						<div className="flex gap-3">
							{product.category === 'Tersedia' ? (
								<>
									<Button size="lg" className="flex-1 gap-2">
										<ShoppingCart className="w-5 h-5" />
										Beli Sekarang
									</Button>
									<Button size="lg" variant="outline" className="gap-2">
										<Heart className="w-5 h-5" />
										Favorit
									</Button>
									<Button size="lg" variant="outline">
										<Share2 className="w-5 h-5" />
									</Button>
								</>
							) : (
								<Button size="lg" className="flex-1 gap-2" variant="secondary">
									Produk Belum Tersedia
								</Button>
							)}
						</div>
					</div>
				</div>

				{/* Product Description */}
				<Card className="mb-8">
					<CardContent className="p-6">
						<h2 className="text-2xl font-bold mb-4">Deskripsi Produk</h2>
						<p className="text-gray-700 leading-relaxed">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur.
						</p>
						<br />
						<p className="text-gray-700 leading-relaxed">
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
							officia deserunt mollit anim id est laborum. Sed ut perspiciatis
							unde omnis iste natus error sit voluptatem accusantium doloremque
							laudantium.
						</p>
					</CardContent>
				</Card>

				{/* Reviews Section - Placeholder */}
				<Card>
					<CardContent className="p-6">
						<h2 className="text-2xl font-bold mb-4">Ulasan Pelanggan</h2>
						<p className="text-gray-600">
							Belum ada ulasan untuk produk ini. Jadilah yang pertama memberikan
							ulasan!
						</p>
					</CardContent>
				</Card>
			</main>
		</div>
	);
};

export default ProductDetail;
