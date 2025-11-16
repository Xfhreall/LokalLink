import { useSearch } from '@tanstack/react-router';
import { Separator } from '@/shared/components/ui/shadcn/separator';
import { OrderDetailCard } from '../components/order-detail-card';
import { OrderItemCard } from '../components/order-item-card';
import { useOrderConfirmation } from '../hooks/useOrderConfirmation';
import type { OrderItem } from '../types/order.types';

export function OrderConfirmationContainer() {
	const searchParams = useSearch({ from: '/product/konfirmasi-pesanan' });
	const initialItems: OrderItem[] = searchParams?.items
		? JSON.parse(searchParams.items)
		: [];

	const { items, updateQuantity, calculateSummary } =
		useOrderConfirmation(initialItems);

	const summary = calculateSummary();
	if (items.length === 0) {
		return (
			<div className="container mx-auto px-4 py-8">
				<div className="text-center py-12">
					<h2 className="text-2xl font-bold mb-2">Keranjang Kosong</h2>
					<p className="text-muted-foreground">
						Belum ada produk yang dipilih untuk checkout.
					</p>
				</div>
			</div>
		);
	}
	const storeName = items[0]?.seller || '';
	const storeLocation = items[0]?.location || '';

	return (
		<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative">
			<h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
				Konfirmasi Pesanan
			</h1>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
				<div className="lg:col-span-2 space-y-4 sm:space-y-6">
					{/* Order Items */}
					<div className="space-y-3">
						{items.map((item) => (
							<OrderItemCard
								key={item.id}
								item={item}
								onUpdateQuantity={updateQuantity}
							/>
						))}
						{/* info total harga - visible on mobile */}
						<div className="lg:hidden border-t-2 pt-4 space-y-2">
							<span className="flex text-sm justify-between items-center">
								<p>Total Pesanan</p>
								<p className="text-muted-foreground">
									Rp {summary.total.toLocaleString('id-ID')}
								</p>
							</span>
							<span className="flex text-sm justify-between items-center">
								<p>Total Biaya Pengiriman</p>
								<p className="text-muted-foreground">
									Rp {summary.shippingCost.toLocaleString('id-ID')}
								</p>
							</span>
							<Separator className="data-[orientation=horizontal]:h-0.5" />
							<div className="flex justify-between font-bold text-primary items-center mt-4">
								<h3 className="text-base sm:text-lg">Total</h3>
								<p className="text-lg sm:text-xl">
									Rp {summary.total.toLocaleString('id-ID')}
								</p>
							</div>
						</div>
					</div>
				</div>
				{/* Right side - Order summary (desktop only) */}
				<div className="col-span-1 relative">
					<OrderDetailCard
						summary={summary}
						storeLocation={storeLocation}
						storeName={storeName}
					/>
				</div>
			</div>
		</div>
	);
}
