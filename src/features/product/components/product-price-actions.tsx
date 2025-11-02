import { Minus, Plus } from 'lucide-react';
import { Button } from '@/shared/components/ui/shadcn/button';
import { Separator } from '@/shared/components/ui/shadcn/separator';

interface ProductPriceActionsProps {
	price: string;
	quantity: number;
	onIncrement: () => void;
	onDecrement: () => void;
	onContact: () => void;
	onAddToWishlist: () => void;
	isAvailable: boolean;
}

export function ProductPriceActions({
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
	return (
		<div className="space-y-4">
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
							Hubungi Sekarang
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
		</div>
	);
}
