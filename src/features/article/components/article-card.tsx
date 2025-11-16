import { Link } from '@tanstack/react-router';
import type { Article } from '../data/articles-data';

interface ArticleCardProps {
	article: Article;
	variant?: 'default' | 'large' | 'horizontal';
}

export const ArticleCard = ({
	article,
	variant = 'default',
}: ArticleCardProps) => {
	if (variant === 'large') {
		return (
			<Link
				to="/upselling-umkm/$articleId"
				params={{ articleId: article.id }}
				className="group block h-full"
			>
				<div className="relative h-full overflow-hidden rounded-lg">
					<img
						src={article.image}
						alt={article.title}
						className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
					/>
					<div
						className="absolute inset-0"
						style={{
							background:
								'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.4), transparent)',
						}}
					/>
					<div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
						<span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-medium text-white mb-2">
							{article.category}
						</span>
						<h3 className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2 line-clamp-2">
							{article.title}
						</h3>
						<p className="text-xs md:text-sm text-gray-200">{article.date}</p>
					</div>
				</div>
			</Link>
		);
	}

	if (variant === 'horizontal') {
		return (
			<Link
				to="/upselling-umkm/$articleId"
				params={{ articleId: article.id }}
				className="group block"
			>
				<div className="flex gap-4 h-full">
					<div className="relative w-40 h-28 shrink-0 overflow-hidden rounded-lg">
						<img
							src={article.image}
							alt={article.title}
							className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
						/>
					</div>
					<div className="flex-1 flex flex-col justify-between py-1">
						<div>
							<span className="inline-block rounded-full bg-primary/10 text-primary px-2 py-0.5 text-xs font-medium mb-2">
								{article.category}
							</span>
							<h3 className="text-base font-semibold text-gray-900 line-clamp-2 group-hover:text-primary transition-colors">
								{article.title}
							</h3>
						</div>
						<p className="text-xs text-gray-500">{article.date}</p>
					</div>
				</div>
			</Link>
		);
	}

	return (
		<Link
			to="/upselling-umkm/$articleId"
			params={{ articleId: article.id }}
			className="group block h-full"
		>
			<div className="h-full bg-white rounded-lg overflow-hidden border border-gray-200 transition-shadow hover:shadow-lg">
				<div className="relative h-48 overflow-hidden">
					<img
						src={article.image}
						alt={article.title}
						className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
					/>
				</div>
				<div className="p-4">
					<span className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-medium mb-2">
						{article.category}
					</span>
					<h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
						{article.title}
					</h3>
					<p className="text-sm text-gray-600 mb-3 line-clamp-2">
						{article.excerpt}
					</p>
					<div className="flex items-center justify-between text-xs text-gray-500">
						<span>{article.date}</span>
						<span>{article.readTime}</span>
					</div>
				</div>
			</div>
		</Link>
	);
};
