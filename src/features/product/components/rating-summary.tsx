import { Star } from 'lucide-react';
import { Progress } from '@/shared/components/ui/shadcn/progress';
import type { RatingDistribution } from '@/shared/data/dtos/product.dto';

interface RatingSummaryProps {
	distribution: RatingDistribution;
}

export function RatingSummary({ distribution }: RatingSummaryProps) {
	const {
		averageRating,
		totalReviews,
		buyerSatisfaction,
		distribution: dist,
	} = distribution;

	const getPercentage = (count: number) => {
		return totalReviews > 0 ? (count / totalReviews) * 100 : 0;
	};

	return (
		<div className="space-y-4">
			<h3 className="font-semibold text-lg">Ulasan Pembeli</h3>

			<div className="flex items-start gap-8 mx-auto max-w-5xl">
				<div className="flex flex-col items-start">
					<div className="text-5xl font-bold text-gray-900">
						{averageRating.toFixed(1)}
						<span className="text-2xl text-gray-500">/5.0</span>
					</div>
					<div className="flex items-center gap-1 my-2">
						{[1, 2, 3, 4, 5].map((star) => (
							<Star
								key={star}
								className={`w-5 h-5 ${
									star <= Math.floor(averageRating)
										? 'fill-yellow-400 text-yellow-400'
										: 'text-gray-300'
								}`}
							/>
						))}
					</div>
					<p className="text-sm text-gray-600">
						{buyerSatisfaction}% Pembeli merasa puas
					</p>
					<p className="text-sm text-gray-600">
						{totalReviews} rating • {totalReviews} Ulasan
					</p>
				</div>
				<div className="flex-1 space-y-2">
					{[5, 4, 3, 2, 1].map((rating) => (
						<div key={rating} className="flex items-center">
							<div className="flex items-center gap-1 w-12">
								<Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
								<span className="text-sm font-medium">{rating}</span>
							</div>
							<Progress
								value={getPercentage(dist[rating as keyof typeof dist])}
								className="h-2 flex-1"
							/>
							<span className="text-sm text-gray-600 w-12 text-right">
								({dist[rating as keyof typeof dist]})
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
