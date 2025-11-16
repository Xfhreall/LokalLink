import { useMemo, useState } from 'react';
import { mockProducts } from '../data/product-mock-data';
import type { ProductStatus } from '../types/product';

export const useProductTable = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(10);
	const [statusFilter, setStatusFilter] = useState<ProductStatus>('all');
	const [searchQuery, setSearchQuery] = useState('');

	const filteredProducts = useMemo(() => {
		let filtered = [...mockProducts];

		// Filter by search query
		if (searchQuery) {
			filtered = filtered.filter((product) =>
				product.name.toLowerCase().includes(searchQuery.toLowerCase()),
			);
		}

		// Filter by status (all products are active in mock data)
		if (statusFilter !== 'all') {
			// Add status filter logic if needed
		}

		return filtered;
	}, [searchQuery, statusFilter]);

	const totalProducts = filteredProducts.length;
	const totalPages = Math.ceil(totalProducts / itemsPerPage);

	const paginatedProducts = useMemo(() => {
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		return filteredProducts.slice(startIndex, endIndex);
	}, [filteredProducts, currentPage, itemsPerPage]);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const handleItemsPerPageChange = (value: number) => {
		setItemsPerPage(value);
		setCurrentPage(1);
	};

	const startIndex = (currentPage - 1) * itemsPerPage + 1;
	const endIndex = Math.min(currentPage * itemsPerPage, totalProducts);

	return {
		products: paginatedProducts,
		currentPage,
		totalPages,
		itemsPerPage,
		totalProducts,
		startIndex,
		endIndex,
		searchQuery,
		statusFilter,
		setSearchQuery,
		setStatusFilter,
		handlePageChange,
		handleItemsPerPageChange,
	};
};
