import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { PenjualContainer } from '@/features/penjual/containers/penjual-container';

export const Route = createFileRoute('/profile/penjual')({
	component: RouteComponent,
});

function RouteComponent() {
	const nav = useNavigate();
	const role = localStorage.getItem('role');
	if (!role) {
		return nav({ to: '/auth/signin' });
	}
	if (role === 'pembeli') {
		return nav({ to: '/profile/pembeli' });
	}
	return <PenjualContainer />;
}
