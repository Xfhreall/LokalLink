import { createFileRoute } from '@tanstack/react-router';
import { SigninContainer } from '@/features/auth/signin/containers/signin-container';

export const Route = createFileRoute('/auth/signin')({
	component: RouteComponent,
});

function RouteComponent() {
	return <SigninContainer />;
}
