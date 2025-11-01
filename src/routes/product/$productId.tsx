import { createFileRoute } from '@tanstack/react-router';
import ProductDetail from '@/features/product/containers/product-detail-container';

export const Route = createFileRoute('/product/$productId')({
	component: ProductDetail,
});
