import { createFileRoute } from '@tanstack/react-router';
import StoreDetail from '@/features/store/containers/store-detail-container';

export const Route = createFileRoute('/toko/$storeId')({
	component: StoreDetail,
});
