import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/product/cart')({
	component: ProductCart,
});

function ProductCart() {
	return (
		<div className="w-full min-h-screen">
			<main className="px-12 py-8">
				<h1 className="text-3xl font-bold mb-4">Keranjang Belanja</h1>
				<p className="text-gray-600">
					Halaman keranjang belanja untuk melihat produk yang akan dibeli.
				</p>
			</main>
		</div>
	);
}
