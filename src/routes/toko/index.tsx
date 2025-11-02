import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/toko/')({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/toko/"!</div>;
}
