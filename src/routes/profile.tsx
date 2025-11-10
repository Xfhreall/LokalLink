import { createFileRoute } from '@tanstack/react-router';
import { ProfileContainer } from '@/features/profile/containers/profile-container';
import Header from '@/shared/components/Header';

export const Route = createFileRoute('/profile')({
	component: ProfilePage,
});

function ProfilePage() {
	return (
		<>
			<Header />
			<ProfileContainer />
		</>
	);
}
