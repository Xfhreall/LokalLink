import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/step/')({
	beforeLoad: () => {
		throw redirect({ to: '/step/telp' });
	},
	component: RouteComponent,
});

function RouteComponent() {
	return;
}
