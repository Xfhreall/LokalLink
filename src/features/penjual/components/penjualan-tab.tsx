import { DollarSign, MessageSquare, ShoppingCart, Store } from 'lucide-react';
import { useInvoiceTable } from '../hooks/use-invoice-table';
import { useSalesData } from '../hooks/use-sales-data';
import { InvoiceTable } from './invoice-table';
import { Pagination } from './pagination';
import { SalesChart } from './sales-chart';
import { StatsCard } from './stats-card';

const statsIcons = [
	<Store className="size-5 text-primary" key="store" />,
	<ShoppingCart className="size-5 text-primary" key="shopping" />,
	<DollarSign className="size-5 text-primary" key="dollar" />,
	<MessageSquare className="size-5 text-primary" key="message" />,
];

export const PenjualanTab = () => {
	const {
		salesStats,
		chartData,
		selectedPoint,
		setSelectedPoint,
		totalSales,
		growthPercentage,
		selectedDate,
	} = useSalesData();

	const {
		invoices,
		currentPage,
		totalPages,
		itemsPerPage,
		setStatusFilter,
		setDateFilter,
		handlePageChange,
		handleItemsPerPageChange,
		totalInvoices,
		startIndex,
		endIndex,
	} = useInvoiceTable();

	return (
		<div className="space-y-6 py-6">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				{salesStats.map((stat, index) => (
					<StatsCard key={stat.label} stat={stat} icon={statsIcons[index]} />
				))}
			</div>

			<SalesChart
				data={chartData}
				selectedPoint={selectedPoint}
				onPointSelect={setSelectedPoint}
				totalSales={totalSales}
				growthPercentage={growthPercentage}
				selectedDate={selectedDate}
			/>

			<InvoiceTable
				invoices={invoices}
				onStatusFilterChange={(status) =>
					setStatusFilter(status as 'all' | 'menunggu' | 'proses' | 'selesai')
				}
				onDateFilterChange={setDateFilter}
			/>

			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				itemsPerPage={itemsPerPage}
				startIndex={startIndex}
				endIndex={endIndex}
				totalItems={totalInvoices}
				onPageChange={handlePageChange}
				onItemsPerPageChange={handleItemsPerPageChange}
			/>
		</div>
	);
};
