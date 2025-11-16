import { Minus, Plus, Star } from 'lucide-react';
import { Button } from '@/shared/components/ui/shadcn/button';
import { Card } from '@/shared/components/ui/shadcn/card';
import type { OrderItem } from '../types/order.types';

interface OrderItemCardProps {
	item: OrderItem;
	onUpdateQuantity: (itemId: string, newQuantity: number) => void;
}

export function OrderItemCard({ item, onUpdateQuantity }: OrderItemCardProps) {
	const numericPrice = parseInt(item.price.replace(/[^0-9]/g, ''), 10);
	const itemTotal = numericPrice * item.quantity;

	return (
		<Card className="p-3 sm:p-4">
			<div className="flex gap-3 sm:gap-4">
				<img
					src={item.productImage}
					alt={item.productName}
					className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg shrink-0"
				/>
				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-3">
					{/* Product Info */}
					<div className="flex-1 min-w-0">
						<h3 className="font-semibold text-sm sm:text-base truncate">
							{item.productName}
						</h3>
						<p className="text-xs text-muted-foreground truncate">
							{item.seller}
						</p>
						<div className="flex items-center gap-1 mt-1">
							<Star className="w-3 h-3 fill-amber-400 text-amber-400" />
							<span className="text-xs font-medium">4.8</span>
							<span className="text-xs text-muted-foreground">/ 5</span>
						</div>
					</div>

					{/* Quantity Controls */}
					<div className="flex items-center gap-2 sm:gap-3 rounded-full border-primary border p-1 w-fit">
						<Button
							size="icon"
							variant="outline"
							className="h-6 w-6 sm:h-7 sm:w-7 bg-primary-100 rounded-full border-0"
							onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
							disabled={item.quantity <= 1}
						>
							<Minus className="w-3 h-3" />
						</Button>
						<span className="w-6 sm:w-8 text-center text-sm font-semibold">
							{item.quantity}
						</span>
						<Button
							size="icon"
							className="h-6 w-6 sm:h-7 sm:w-7 bg-primary-500 rounded-full"
							onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
						>
							<Plus className="w-3 h-3 text-white" />
						</Button>
					</div>

					{/* Price */}
					<p className="font-bold text-primary text-sm sm:text-base whitespace-nowrap">
						Rp {itemTotal.toLocaleString('id-ID')}
					</p>
				</div>
			</div>
		</Card>
	);
}
