import { createFileRoute } from '@tanstack/react-router';
import { SignupContainer } from '@/features/auth/signup/containers/signup-container';

export const Route = createFileRoute('/auth/singup')({
	component: RouteComponent,
});

function RouteComponent() {
	return <SignupContainer />;
}
