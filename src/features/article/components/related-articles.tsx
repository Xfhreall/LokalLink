import { Link } from '@tanstack/react-router';
import type { Article } from '../data/articles-data';

interface RelatedArticlesProps {
	articles: Article[];
	currentArticleId: string;
}

export const RelatedArticles = ({
	articles,
	currentArticleId,
}: RelatedArticlesProps) => {
	const currentArticle = articles.find((a) => a.id === currentArticleId);
	const related = articles
		.filter(
			(a) =>
				a.id !== currentArticleId && a.category === currentArticle?.category,
		)
		.slice(0, 3);

	if (related.length === 0) return null;

	return (
		<div className="mt-12 pt-8">
			<h2 className="text-2xl font-bold mb-6">Artikel Terkait</h2>
			<div className="grid grid-cols-1 gap-6">
				{related.map((article) => (
					<Link
						key={article.id}
						to={`/upselling-umkm/$articleId`}
						params={{ articleId: article.id }}
						className="group block"
					>
						<div className="bg-white rounded-lg overflow-hidden border border-primary transition-shadow hover:shadow-lg h-full">
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
								<p className="text-sm text-gray-600 line-clamp-2">
									{article.excerpt}
								</p>
								<div className="flex items-center justify-between text-xs text-gray-500 mt-3">
									<span>{article.date}</span>
									<span>{article.readTime}</span>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};
