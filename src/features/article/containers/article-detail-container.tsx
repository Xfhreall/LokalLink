import { Link } from '@tanstack/react-router';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { RelatedArticles } from '../components/related-articles';
import { articles } from '../data/articles-data';

interface ArticleDetailContainerProps {
	articleId: string;
}

export const ArticleDetailContainer = ({
	articleId,
}: ArticleDetailContainerProps) => {
	const article = articles.find((a) => a.id === articleId);

	if (!article) {
		return (
			<div className="text-center py-12">
				<h2 className="text-2xl font-bold mb-4">Artikel tidak ditemukan</h2>
				<Link
					to="/upselling-umkm"
					className="text-primary hover:underline inline-flex items-center gap-2"
				>
					<ArrowLeft className="w-4 h-4" />
					Kembali ke daftar artikel
				</Link>
			</div>
		);
	}

	return (
		<div className="mx-auto flex flex-col md:flex-row gap-6">
			<div className="max-w-5xl">
				<Link
					to="/upselling-umkm"
					className="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-6 transition-colors"
				>
					<ArrowLeft className="w-4 h-4" />
					Kembali
				</Link>

				<article>
					<div className="mb-6">
						<span className="inline-block rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary border border-primary mb-4">
							{article.category}
						</span>
						<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
							{article.title}
						</h1>
						<div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm">
							<div className="flex items-center gap-1.5">
								<Calendar className="w-4 h-4" />
								<span>{article.date}</span>
							</div>
							<div className="flex items-center gap-1.5">
								<Clock className="w-4 h-4" />
								<span>{article.readTime}</span>
							</div>
						</div>
					</div>

					<div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
						<img
							src={article.image}
							alt={article.title}
							className="w-full h-full object-cover"
						/>
					</div>

					<div className="prose prose-lg max-w-none">
						{article.content.split('\n\n').map((paragraph) => (
							<p
								key={paragraph.substring(0, 50)}
								className="mb-4 text-gray-700 leading-relaxed"
							>
								{paragraph}
							</p>
						))}
					</div>
				</article>
			</div>

			<RelatedArticles articles={articles} currentArticleId={articleId} />
		</div>
	);
};
