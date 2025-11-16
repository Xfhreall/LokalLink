import { useState } from 'react';
import type {
	DeliveryMethod,
	OrderItem,
	OrderSummary,
} from '../types/order.types';

export function useOrderConfirmation(initialItems: OrderItem[]) {
	const [items, setItems] = useState<OrderItem[]>(initialItems);
	const [deliveryMethod, setDeliveryMethod] =
		useState<DeliveryMethod>('delivery');

	const updateQuantity = (itemId: string, newQuantity: number) => {
		if (newQuantity < 1) return;
		setItems((prev) =>
			prev.map((item) =>
				item.id === itemId ? { ...item, quantity: newQuantity } : item,
			),
		);
	};

	const removeItem = (itemId: string) => {
		setItems((prev) => prev.filter((item) => item.id !== itemId));
	};

	const calculateSummary = (): OrderSummary => {
		const subtotal = items.reduce((total, item) => {
			const price = parseInt(item.price.replace(/[^0-9]/g, ''), 10);
			return total + price * item.quantity;
		}, 0);

		const shippingCost = deliveryMethod === 'delivery' ? 10000 : 0;
		const serviceFee = 0;
		const total = subtotal + shippingCost + serviceFee;

		return {
			items,
			subtotal,
			shippingCost,
			serviceFee,
			total,
		};
	};

	const handleSubmitOrder = (
		shippingData: Record<string, number>,
		method: DeliveryMethod,
	) => {
		const summary = calculateSummary();
		console.log('Order submitted:', {
			items,
			shippingData,
			method,
			summary,
		});
		alert('Pesanan berhasil! Silakan lanjutkan ke pembayaran.');
	};

	return {
		items,
		deliveryMethod,
		setDeliveryMethod,
		updateQuantity,
		removeItem,
		calculateSummary,
		handleSubmitOrder,
	};
}
