import { createFileRoute } from '@tanstack/react-router';
import { ArticleListContainer } from '@/features/article/containers/article-list-container';

export const Route = createFileRoute('/upselling-umkm/')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="w-full min-h-screen">
			<main className="container mx-auto px-4 md:px-12 py-8">
				<ArticleListContainer />
			</main>
		</div>
	);
}
