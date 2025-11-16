import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/shared/components/ui/shadcn/button';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/components/ui/shadcn/select';

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	itemsPerPage: number;
	startIndex: number;
	endIndex: number;
	totalItems: number;
	onPageChange: (page: number) => void;
	onItemsPerPageChange: (items: number) => void;
}

export const Pagination = ({
	currentPage,
	totalPages,
	itemsPerPage,
	startIndex,
	endIndex,
	totalItems,
	onPageChange,
	onItemsPerPageChange,
}: PaginationProps) => {
	const getPageNumbers = () => {
		const pages: (number | string)[] = [];

		if (totalPages <= 7) {
			for (let i = 1; i <= totalPages; i++) {
				pages.push(i);
			}
		} else {
			pages.push(1);

			if (currentPage > 3) {
				pages.push('...');
			}

			for (
				let i = Math.max(2, currentPage - 1);
				i <= Math.min(totalPages - 1, currentPage + 1);
				i++
			) {
				pages.push(i);
			}

			if (currentPage < totalPages - 2) {
				pages.push('...');
			}

			pages.push(totalPages);
		}

		return pages;
	};

	return (
		<div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4">
			<div className="text-xs sm:text-sm text-gray-600">
				Menampilkan {startIndex + 1} - {endIndex} dari {totalItems} Hasil
			</div>

			<div className="flex items-center gap-2">
				<Button
					variant="outline"
					size="icon"
					onClick={() => onPageChange(currentPage - 1)}
					disabled={currentPage === 1}
					className="h-8 w-8"
				>
					<ChevronLeft className="h-4 w-4" />
				</Button>

				<div className="flex gap-1">
					{getPageNumbers().map((page, index) => {
						if (page === '...') {
							return (
								<span
									key={`ellipsis-${
										// biome-ignore lint/suspicious/noArrayIndexKey: index is unique
										index
									}`}
									className="px-3 py-1 text-sm text-gray-400"
								>
									...
								</span>
							);
						}

						return (
							<Button
								key={page}
								variant={currentPage === page ? 'default' : 'outline'}
								size="sm"
								onClick={() => onPageChange(page as number)}
								className={`h-8 w-8 text-xs sm:text-sm ${
									currentPage === page ? 'bg-primary hover:bg-primary/90' : ''
								}`}
							>
								{page}
							</Button>
						);
					})}
				</div>

				<Button
					variant="outline"
					size="icon"
					onClick={() => onPageChange(currentPage + 1)}
					disabled={currentPage === totalPages}
					className="h-8 w-8"
				>
					<ChevronRight className="h-4 w-4" />
				</Button>
			</div>

			<div className="flex items-center gap-2">
				<span className="text-xs sm:text-sm text-gray-600">
					Item per halaman
				</span>
				<Select
					value={itemsPerPage.toString()}
					onValueChange={(value) => onItemsPerPageChange(Number(value))}
				>
					<SelectTrigger className="w-16 h-8 text-xs sm:text-sm">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="5">5</SelectItem>
						<SelectItem value="10">10</SelectItem>
						<SelectItem value="20">20</SelectItem>
						<SelectItem value="50">50</SelectItem>
					</SelectContent>
				</Select>
			</div>
		</div>
	);
};
