import { Package, ShoppingBag } from 'lucide-react';
import { productStats } from '../data/product-mock-data';
import { useProductTable } from '../hooks/use-product-table';
import type { ProductStatus } from '../types/product';
import { Pagination } from './pagination';
import { ProductInsightCard } from './product-insight-card';
import { ProductStatsCard } from './product-stats-card';
import { ProductTable } from './product-table';

const statsIcons = [
	<Package className="w-5 h-5 sm:w-6 sm:h-6 text-primary" key="package" />,
	<ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-primary" key="bag" />,
];

export const ProdukTab = () => {
	const {
		products,
		currentPage,
		totalPages,
		itemsPerPage,
		totalProducts,
		startIndex,
		endIndex,
		searchQuery,
		setSearchQuery,
		setStatusFilter,
		handlePageChange,
		handleItemsPerPageChange,
	} = useProductTable();

	return (
		<div className="space-y-6 py-6">
			<div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{productStats.map((stat, index) => (
					<ProductStatsCard
						key={stat.label}
						stat={stat}
						icon={statsIcons[index]}
					/>
				))}
				<ProductInsightCard />
			</div>
			<ProductTable
				products={products}
				searchQuery={searchQuery}
				onSearchChange={setSearchQuery}
				onStatusFilterChange={(status) =>
					setStatusFilter(status as ProductStatus)
				}
			/>
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				itemsPerPage={itemsPerPage}
				startIndex={startIndex}
				endIndex={endIndex}
				totalItems={totalProducts}
				onPageChange={handlePageChange}
				onItemsPerPageChange={handleItemsPerPageChange}
			/>
		</div>
	);
};
