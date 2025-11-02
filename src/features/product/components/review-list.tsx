import { useState } from 'react';
import { Button } from '@/shared/components/ui/shadcn/button';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/components/ui/shadcn/select';
import type { Review } from '@/shared/data/products';
import { ReviewItem } from './review-item';

interface ReviewListProps {
	reviews: Review[];
	totalReviews: number;
}

export function ReviewList({ reviews, totalReviews }: ReviewListProps) {
	const [currentPage, setCurrentPage] = useState(1);
	const [sortBy, setSortBy] = useState('most-helpful');
	const reviewsPerPage = 10;

	const totalPages = Math.ceil(reviews.length / reviewsPerPage);
	const startIndex = (currentPage - 1) * reviewsPerPage;
	const endIndex = startIndex + reviewsPerPage;
	const currentReviews = reviews.slice(startIndex, endIndex);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
		// Scroll to reviews section
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<div className="space-y-4">
			{/* Header */}
			<div className="flex items-center justify-between py-4">
				<h3 className="font-semibold text-lg">
					Ulasan Produk
					<span className="text-gray-500 font-normal ml-2">
						Menampilkan {startIndex + 1} dari {totalReviews} ulasan
					</span>
				</h3>
				<div className="flex items-center gap-2">
					<span className="text-sm text-gray-600">Urutkan</span>
					<Select value={sortBy} onValueChange={setSortBy}>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Pilih urutan" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="most-helpful">Paling Membantu</SelectItem>
							<SelectItem value="newest">Terbaru</SelectItem>
							<SelectItem value="highest-rating">Rating Tertinggi</SelectItem>
							<SelectItem value="lowest-rating">Rating Terendah</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>

			{/* Review Items */}
			<div>
				{currentReviews.map((review) => (
					<ReviewItem key={review.id} review={review} />
				))}
			</div>

			{/* Pagination */}
			{totalPages > 1 && (
				<div className="flex items-center justify-between py-4 border-t">
					<div className="flex gap-2">
						{Array.from(
							{ length: Math.min(totalPages, 3) },
							(_, i) => i + 1,
						).map((page) => (
							<Button
								key={page}
								variant={currentPage === page ? 'default' : 'outline'}
								size="sm"
								onClick={() => handlePageChange(page)}
								className="w-10"
							>
								{page}
							</Button>
						))}
					</div>
					<Button variant="link" className="text-green-600">
						Lihat Semua Ulasan
					</Button>
				</div>
			)}
		</div>
	);
}
