import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/step')({
	component: RouteComponent,
});

function RouteComponent() {
	return <Outlet />;
}
