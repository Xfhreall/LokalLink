import { useState } from 'react';
import { chartDataWeek, salesStats } from '../data/mock-data';
import type { DateRange } from '../types';

export const useSalesData = () => {
	const [dateRange, setDateRange] = useState<DateRange>('7days');
	const [selectedPoint, setSelectedPoint] = useState<number | null>(4);

	const selectedData = chartDataWeek[selectedPoint ?? 0];
	const totalSales = selectedData?.value || 0;
	const growthPercentage = '+3,4%';

	return {
		salesStats,
		chartData: chartDataWeek,
		dateRange,
		setDateRange,
		selectedPoint,
		setSelectedPoint,
		totalSales,
		growthPercentage,
		selectedDate: selectedData?.date,
	};
};
