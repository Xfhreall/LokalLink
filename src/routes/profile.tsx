import { createFileRoute, Outlet } from '@tanstack/react-router';
import Header from '@/shared/components/Header';

export const Route = createFileRoute('/profile')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}
