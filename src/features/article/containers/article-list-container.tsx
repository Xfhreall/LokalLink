import { ArticleBentoGrid } from '../components/article-bento-grid';
import { ArticleList } from '../components/article-list';
import { articles } from '../data/articles-data';

export const ArticleListContainer = () => {
	return (
		<div className="space-y-12">
			<section>
				<div className="mb-8">
					<h1 className="text-4xl font-bold mb-2">Artikel Terbaru</h1>
					<p className="text-gray-600">
						Tips dan strategi untuk mengembangkan bisnis UMKM Anda
					</p>
				</div>
				<ArticleBentoGrid articles={articles} />
			</section>

			<section>
				<ArticleList articles={articles} />
			</section>
		</div>
	);
};
