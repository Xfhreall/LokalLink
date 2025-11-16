import { useState } from 'react';
import { Button } from '@/shared/components/ui/shadcn/button';
import type { Article } from '../data/articles-data';
import { categories } from '../data/articles-data';
import { ArticleCard } from './article-card';

interface ArticleListProps {
	articles: Article[];
}

export const ArticleList = ({ articles }: ArticleListProps) => {
	const [selectedCategory, setSelectedCategory] = useState('All');
	const [displayCount, setDisplayCount] = useState(6);

	const allArticles = articles.slice(4);

	const filteredArticles =
		selectedCategory === 'All'
			? allArticles
			: allArticles.filter((article) => article.category === selectedCategory);

	const displayedArticles = filteredArticles.slice(0, displayCount);
	const hasMore = filteredArticles.length > displayCount;

	return (
		<div className="space-y-8">
			<div className="flex flex-wrap gap-3">
				{categories.map((category) => (
					<Button
						key={category}
						onClick={() => {
							setSelectedCategory(category);
							setDisplayCount(6);
						}}
						variant={selectedCategory === category ? 'default' : 'outline'}
						className={
							selectedCategory === category
								? 'bg-primary hover:bg-primary/90'
								: ''
						}
					>
						{category}
					</Button>
				))}
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{displayedArticles.map((article) => (
					<ArticleCard key={article.id} article={article} />
				))}
			</div>

			{hasMore && (
				<div className="flex justify-center">
					<Button
						onClick={() => setDisplayCount((prev) => prev + 6)}
						variant="outline"
						size="lg"
						className="rounded-full"
					>
						Load More Articles
					</Button>
				</div>
			)}

			{displayedArticles.length === 0 && (
				<div className="text-center py-12">
					<p className="text-gray-500">No articles found in this category.</p>
				</div>
			)}
		</div>
	);
};
