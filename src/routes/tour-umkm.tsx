import { createFileRoute } from '@tanstack/react-router';
import { UmkmTourContainer } from '@/features/umkm-tour';
import Footer from '@/shared/components/Footer';
import Header from '@/shared/components/Header';

export const Route = createFileRoute('/tour-umkm')({
	component: TourUMKM,
});

function TourUMKM() {
	return (
		<div className="w-full min-h-screen">
			<Header />
			<main className="px-4 md:px-12 container mx-auto py-8">
				<UmkmTourContainer />
			</main>
			<Footer />
		</div>
	);
}
