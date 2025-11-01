import { createFileRoute, Outlet } from '@tanstack/react-router';
import Footer from '@/shared/components/Footer';
import Header from '@/shared/components/Header';

export const Route = createFileRoute('/product')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<Header />
			<section className="min-h-screen container mx-auto">
				<Outlet />
			</section>
			<Footer />
		</>
	);
}
