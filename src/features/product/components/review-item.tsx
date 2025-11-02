import { MoreVertical, Star } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/shared/components/ui/shadcn/avatar';
import { Button } from '@/shared/components/ui/shadcn/button';
import type { Review } from '@/shared/data/products';

interface ReviewItemProps {
	review: Review;
}

export function ReviewItem({ review }: ReviewItemProps) {
	const { userName, rating, timeAgo, variant, comment, images } = review;

	const getInitials = (name: string) => {
		return name
			.split(' ')
			.map((n) => n[0])
			.join('')
			.toUpperCase()
			.slice(0, 2);
	};

	return (
		<div className="py-4 border-b last:border-b-0">
			<div className="flex items-start justify-between">
				{/* User Info */}
				<div className="flex items-start gap-3 flex-1">
					<Avatar className="w-10 h-10">
						<AvatarFallback className="bg-gray-200 text-gray-700">
							{getInitials(userName)}
						</AvatarFallback>
					</Avatar>

					<div className="flex-1">
						<div className="flex items-center justify-between">
							<div>
								<p className="font-semibold text-sm">{userName}</p>
								<div className="flex items-center gap-1 mt-1">
									{[1, 2, 3, 4, 5].map((star) => (
										<Star
											key={star}
											className={`w-3 h-3 ${
												star <= rating
													? 'fill-yellow-400 text-yellow-400'
													: 'text-gray-300'
											}`}
										/>
									))}
									<span className="text-xs text-gray-500 ml-1">{timeAgo}</span>
								</div>
							</div>
							<Button variant="ghost" size="icon" className="h-8 w-8">
								<MoreVertical className="w-4 h-4" />
							</Button>
						</div>
						<p className="text-xs text-gray-600 mt-2">{variant}</p>
						<p className="text-sm text-gray-800 mt-2 leading-relaxed">
							{comment}
						</p>
						{images && images.length > 0 && (
							<div className="flex gap-2 mt-3">
								{images.map((image, index) => (
									<div
										key={index.toString()}
										className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100"
									>
										<img
											src={image}
											alt={`Review ${index + 1}`}
											className="w-full h-full object-cover"
										/>
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
