import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/product/')({
	beforeLoad: () => {
		throw redirect({ to: '/' });
	},
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/product/"!</div>;
}
