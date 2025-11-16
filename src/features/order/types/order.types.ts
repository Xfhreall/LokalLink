export interface OrderItem {
	id: string;
	productId: string;
	productName: string;
	productImage: string;
	price: string;
	quantity: number;
	seller: string;
	location: string;
}

export interface ShippingAddress {
	recipientName: string;
	phoneNumber: string;
	address: string;
	city: string;
	postalCode: string;
	notes?: string;
}

export interface OrderSummary {
	items: OrderItem[];
	subtotal: number;
	shippingCost: number;
	serviceFee: number;
	total: number;
}

export type DeliveryMethod = 'delivery' | 'pickup';

export interface OrderConfirmation {
	items: OrderItem[];
	shippingAddress: ShippingAddress;
	deliveryMethod: DeliveryMethod;
	paymentMethod: string;
}
