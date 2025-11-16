import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { ProfileContainer } from '@/features/profile/containers/profile-container';

export const Route = createFileRoute('/profile/pembeli')({
	component: ProfilePage,
});

function ProfilePage() {
	const nav = useNavigate();
	const role = localStorage.getItem('role');
	if (!role) {
		return nav({ to: '/auth/signin' });
	}
	if (role === 'penjual') {
		return nav({ to: '/profile/penjual' });
	}
	return <ProfileContainer />;
}
