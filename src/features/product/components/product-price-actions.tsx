import { Link } from '@tanstack/react-router';
import { Minus, Plus, ShoppingBag } from 'lucide-react';
import { Button } from '@/shared/components/ui/shadcn/button';
import { Separator } from '@/shared/components/ui/shadcn/separator';

interface ProductPriceActionsProps {
	productId: string;
	productName: string;
	productImage: string;
	seller: string;
	location: string;
	price: string;
	quantity: number;
	onIncrement: () => void;
	onDecrement: () => void;
	onContact: () => void;
	onAddToWishlist: () => void;
	isAvailable: boolean;
}

export function ProductPriceActions({
	productId,
	productName,
	productImage,
	seller,
	location,
	price,
	quantity,
	onIncrement,
	onDecrement,
	onContact,
	onAddToWishlist,
	isAvailable,
}: ProductPriceActionsProps) {
	function totalPrice() {
		const numericPrice = parseInt(price.replace(/[^0-9]/g, ''), 10);
		return `Rp ${numericPrice * quantity}`;
	}

	// Prepare order data for checkout
	const orderData = {
		items: JSON.stringify([
			{
				id: `order-${productId}-${Date.now()}`,
				productId,
				productName,
				productImage,
				price,
				quantity,
				seller,
				location,
			},
		]),
	};
	return (
		<div className="space-y-4 flex flex-col">
			{/* Price */}
			<div>
				<p className="text-3xl font-bold text-primary">{price}</p>
			</div>
			<Separator />

			{/* Description Preview */}
			<p className="text-sm">
				Nikmati kesegaran Udang Vannamei pilihan, langsung dari tambak ke meja
				makan Anda! Udang ini memiliki daging yang lembut, rasa manis alami,
				serta mudah diolah menjadi berbagai hidangan favorit keluarga. Cocok
				untuk ditumis, dibakar, dibiuat sup, atau dimasak saus padang.
			</p>

			{/* Quantity */}
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-4">
					<span className="text-sm font-medium">Quantity :</span>
					<div className="flex items-center gap-3">
						<Button
							size="icon"
							variant="outline"
							className="h-8 w-8 rounded-full"
							onClick={onDecrement}
							disabled={quantity <= 1}
						>
							<Minus className="w-4 h-4" />
						</Button>
						<span className="w-8 text-center font-semibold">{quantity}</span>
						<Button
							size="icon"
							variant="outline"
							className="h-8 w-8 rounded-full"
							onClick={onIncrement}
						>
							<Plus className="w-4 h-4" />
						</Button>
					</div>
				</div>
				<span className="text-lg font-bold text-primary">{totalPrice()}</span>
			</div>

			{/* Action Buttons */}
			<div className="flex gap-3">
				{isAvailable ? (
					<>
						<Button
							size="lg"
							className="flex-1 rounded-full"
							onClick={onContact}
						>
							Beli Sekarang
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="flex-1 rounded-full border-black"
							onClick={onAddToWishlist}
						>
							Tambahkan ke Wishlist
						</Button>
					</>
				) : (
					<Button size="lg" className="flex-1 rounded-full" disabled>
						Produk Belum Tersedia
					</Button>
				)}
			</div>
			{/* Checkout */}
			<div className="flex items-center mt-12 gap-2 max-w-[350px] ml-auto rounded-2xl border-2 border-primary bg-primary/10 py-2 px-6">
				<div className="text-lg flex gap-2 items-center font-bold text-primary">
					<ShoppingBag className="inline-block size-5" />
					<p className="text-sm text-amber-500">{totalPrice()}</p>
				</div>
				<Button
					asChild
					size="lg"
					className="rounded-full bg-primary hover:bg-primary/90 px-10"
				>
					<Link to="/product/konfirmasi-pesanan" search={orderData}>
						Checkout
					</Link>
				</Button>
			</div>
		</div>
	);
}
