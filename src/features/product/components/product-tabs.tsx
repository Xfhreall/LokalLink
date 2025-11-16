import { Info, Star } from 'lucide-react';
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from '@/shared/components/ui/shadcn/tabs';
import type {
	ProductInfo,
	RatingDistribution,
	Review,
} from '@/shared/data/dtos/product.dto';
import { RatingSummary } from './rating-summary';
import { ReviewList } from './review-list';

interface ProductTabsProps {
	productInfo?: ProductInfo;
	ratingDistribution?: RatingDistribution;
	reviews?: Review[];
}

export function ProductTabs({
	productInfo,
	ratingDistribution,
	reviews = [],
}: ProductTabsProps) {
	const hasReviews = reviews.length > 0 && ratingDistribution;

	return (
		<div className="border rounded-md">
			<Tabs defaultValue="info" className="w-full">
				{/* Header Tabs */}
				<TabsList className="grid w-full grid-cols-2 bg-white border-b">
					<TabsTrigger
						value="info"
						className="flex items-center justify-center gap-2 border-r data-[state=active]:font-semibold data-[state=active]:text-green-600 data-[state=active]:shadow-none"
					>
						<Info className="w-4 h-4" />
						Product Info :
					</TabsTrigger>
					<TabsTrigger
						value="reviews"
						className="flex items-center justify-center gap-2  data-[state=active]:font-semibold data-[state=active]:text-green-600 data-[state=active]:shadow-none"
					>
						<Star className="w-4 h-4" />
						Reviews
					</TabsTrigger>
				</TabsList>

				{/* Product Info */}
				<TabsContent
					value="info"
					className="p-4 text-sm leading-relaxed min-h-[150px]"
				>
					{productInfo ? (
						<>
							<p>
								<b>{productInfo.title}</b>
							</p>
							<p className="mt-2">{productInfo.description}</p>

							{productInfo.features.length > 0 && (
								<ul className="list-disc list-inside mt-3 space-y-1">
									{productInfo.features.map((feature) => (
										<li key={feature.title}>
											<b>{feature.title}:</b> {feature.description}
										</li>
									))}
								</ul>
							)}
						</>
					) : (
						<p>Informasi produk tidak tersedia.</p>
					)}
				</TabsContent>
				<TabsContent value="reviews" className="min-h-[150px]">
					{hasReviews ? (
						<div className="p-6 space-y-6">
							<RatingSummary distribution={ratingDistribution} />
							<ReviewList
								reviews={reviews}
								totalReviews={ratingDistribution.totalReviews}
							/>
						</div>
					) : (
						<div className="p-6 text-center text-gray-600">
							Belum ada ulasan untuk produk ini. Jadilah yang pertama memberikan
							ulasan!
						</div>
					)}
				</TabsContent>
			</Tabs>
		</div>
	);
}
