import { useNavigate } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import {
	getUserProfile,
	saveUserProfile,
	type UserProfile,
} from '@/shared/data/user';

export const useUserProfile = () => {
	const [profile, setProfile] = useState<UserProfile | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isSet, setIsSet] = useState(false);
	const nav = useNavigate();

	useEffect(() => {}, []);

	const handleClick = ({ onShowToko }: { onShowToko: () => void }) => {
		if (isSet) {
			return nav({ to: '/profile/penjual' });
		}
		return onShowToko();
	};

	useEffect(() => {
		const loadProfile = () => {
			const userProfile = getUserProfile();
			setProfile(userProfile);
			setIsLoading(false);
		};
		if (typeof window !== 'undefined') {
			const role = localStorage.getItem('role');
			if (role === 'penjual') {
				setIsSet(true);
			}
		}

		loadProfile();
	}, []);

	const updateProfile = (updates: Partial<UserProfile>) => {
		if (!profile) return;

		const updated = { ...profile, ...updates };
		setProfile(updated);
		saveUserProfile(updated);
	};

	return {
		profile,
		updateProfile,
		isLoading,
		isSet,
		handleClick,
	};
};
