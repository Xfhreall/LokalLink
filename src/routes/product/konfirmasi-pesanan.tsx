import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';
import { OrderConfirmationContainer } from '@/features/order/containers/order-confirmation-container';

const orderSearchSchema = z.object({
	items: z.string().optional(),
});

export const Route = createFileRoute('/product/konfirmasi-pesanan')({
	component: OrderConfirmationContainer,
	validateSearch: orderSearchSchema,
});
