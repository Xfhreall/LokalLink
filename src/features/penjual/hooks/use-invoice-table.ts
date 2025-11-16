import { useState } from 'react';
import { mockInvoices } from '../data/mock-data';
import type { InvoiceStatus } from '../types';

export const useInvoiceTable = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(10);
	const [statusFilter, setStatusFilter] = useState<InvoiceStatus>('all');
	const [dateFilter, setDateFilter] = useState<string>('all');

	const filteredInvoices = mockInvoices.filter((invoice) => {
		if (statusFilter !== 'all' && invoice.status !== statusFilter) {
			return false;
		}
		return true;
	});

	const totalPages = Math.ceil(filteredInvoices.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentInvoices = filteredInvoices.slice(startIndex, endIndex);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const handleItemsPerPageChange = (items: number) => {
		setItemsPerPage(items);
		setCurrentPage(1);
	};

	return {
		invoices: currentInvoices,
		currentPage,
		totalPages,
		itemsPerPage,
		statusFilter,
		dateFilter,
		setStatusFilter,
		setDateFilter,
		handlePageChange,
		handleItemsPerPageChange,
		totalInvoices: filteredInvoices.length,
		startIndex,
		endIndex: Math.min(endIndex, filteredInvoices.length),
	};
};
