import { createFileRoute } from '@tanstack/react-router';
import { ArticleDetailContainer } from '@/features/article/containers/article-detail-container';

export const Route = createFileRoute('/upselling-umkm/$articleId')({
	component: ArticleDetail,
});

function ArticleDetail() {
	const { articleId } = Route.useParams();

	return (
		<div className="w-full min-h-screen">
			<main className="mx-auto px-4 md:px-16 py-8">
				<ArticleDetailContainer articleId={articleId} />
			</main>
		</div>
	);
}
