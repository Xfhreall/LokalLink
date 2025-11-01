import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/product/review')({
	component: ProductReview,
});

function ProductReview() {
	return (
		<div className="w-full min-h-screen">
			<main className="px-12 py-8">
				<h1 className="text-3xl font-bold mb-4">Review Produk</h1>
				<p className="text-gray-600">
					Halaman untuk melihat semua review produk dari customer.
				</p>
			</main>
		</div>
	);
}
