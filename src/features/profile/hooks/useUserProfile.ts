import { useEffect, useState } from 'react';
import {
	getUserProfile,
	saveUserProfile,
	type UserProfile,
} from '@/shared/data/user';

export const useUserProfile = () => {
	const [profile, setProfile] = useState<UserProfile | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const loadProfile = () => {
			const userProfile = getUserProfile();
			setProfile(userProfile);
			setIsLoading(false);
		};

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
	};
};
