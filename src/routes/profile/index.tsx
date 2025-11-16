import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/profile/')({
	component: RouteComponent,
	beforeLoad: () => {
		throw redirect({ to: '/profile/pembeli' });
	},
});

function RouteComponent() {
	return;
}
