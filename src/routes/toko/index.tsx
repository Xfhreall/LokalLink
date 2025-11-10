import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/toko/')({
	beforeLoad: () => {
		throw redirect({ to: '/' });
	},
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/toko/"!</div>;
}
