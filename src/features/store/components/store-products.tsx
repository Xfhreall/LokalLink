import { useState } from 'react';
import { ProductCard } from '@/shared/components/ui/custom/product-card';
import { Button } from '@/shared/components/ui/shadcn/button';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/components/ui/shadcn/select';
import type { Product } from '@/shared/data/products';

interface StoreProductsProps {
	products: Product[];
}

export function StoreProducts({ products }: StoreProductsProps) {
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(12);

	const totalPages = Math.ceil(products.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentProducts = products.slice(startIndex, endIndex);
	const totalProducts = products.length;

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<div className="space-y-4">
			{/* Header Section */}
			<div>
				<h2 className="text-lg font-semibold text-gray-900">
					Kamu mungkin juga menyukai
				</h2>
			</div>

			{/* Products Grid */}
			{products.length === 0 ? (
				<div className="min-h-72 grid place-content-center">
					<p className="text-gray-500 text-center">
						Belum ada produk yang tersedia di toko ini.
					</p>
				</div>
			) : (
				<>
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
						{currentProducts.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>

					{/* Pagination Section */}
					<div className="flex items-center justify-between pt-4">
						<div className="text-sm text-gray-600">
							Menampilkan {startIndex + 1} - {Math.min(endIndex, totalProducts)}{' '}
							dari {totalProducts} Hasil
						</div>

						<div className="flex items-center gap-4">
							{/* Pagination Numbers */}
							{totalPages > 1 && (
								<div className="flex gap-1">
									{Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
										const page = i + 1;
										return (
											<Button
												key={page}
												variant={currentPage === page ? 'default' : 'outline'}
												size="sm"
												onClick={() => handlePageChange(page)}
												className="w-8 h-8 p-0"
											>
												{page}
											</Button>
										);
									})}
									{totalPages > 5 && (
										<Button
											variant="ghost"
											size="sm"
											onClick={() => handlePageChange(currentPage + 1)}
											disabled={currentPage >= totalPages}
											className="w-8 h-8 p-0"
										>
											›
										</Button>
									)}
								</div>
							)}

							{/* Items Per Page Selector */}
							<div className="flex items-center gap-2">
								<span className="text-sm text-gray-600">Item per halaman</span>
								<Select
									value={itemsPerPage.toString()}
									onValueChange={(value) => {
										setItemsPerPage(Number(value));
										setCurrentPage(1);
									}}
								>
									<SelectTrigger className="w-16 h-8">
										<SelectValue />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="12">12</SelectItem>
										<SelectItem value="24">24</SelectItem>
										<SelectItem value="36">36</SelectItem>
										<SelectItem value="48">48</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
}
