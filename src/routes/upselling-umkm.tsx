import { createFileRoute, Outlet } from '@tanstack/react-router';
import Footer from '@/shared/components/Footer';
import Header from '@/shared/components/Header';

export const Route = createFileRoute('/upselling-umkm')({
	component: UpsellingUMKM,
});

function UpsellingUMKM() {
	return (
		<div className="w-full min-h-screen">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}
