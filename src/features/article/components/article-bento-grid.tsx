import type { Article } from '../data/articles-data';
import { ArticleCard } from './article-card';

interface ArticleBentoGridProps {
	articles: Article[];
}

export const ArticleBentoGrid = ({ articles }: ArticleBentoGridProps) => {
	const featured = articles.slice(0, 4);

	return (
		<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
			<div className="md:col-span-2 md:row-span-2 h-[400px] md:h-auto">
				<ArticleCard article={featured[0]} variant="large" />
			</div>

			<div className="md:col-span-2 h-[300px] md:h-auto">
				<ArticleCard article={featured[1]} variant="large" />
			</div>

			<div className="md:col-span-1 h-[300px] md:h-auto">
				<ArticleCard article={featured[2]} variant="large" />
			</div>

			<div className="md:col-span-1 h-[300px] md:h-auto">
				<ArticleCard article={featured[3]} variant="large" />
			</div>
		</div>
	);
};
