import { createFileRoute } from '@tanstack/react-router';
import Footer from '@/shared/components/Footer';
import Header from '@/shared/components/Header';

export const Route = createFileRoute('/tour-umkm')({
	component: TourUMKM,
});

function TourUMKM() {
	return (
		<div className="w-full min-h-screen">
			<Header />
			<main className="px-12 py-8">
				<h1 className="text-3xl font-bold mb-4">Tour UMKM</h1>
				<p className="text-gray-600">Halaman Tour UMKM akan segera hadir.</p>
			</main>
			<Footer />
		</div>
	);
}
