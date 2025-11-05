export type UserProfile = {
	name: string;
	email: string;
	phone: string;
	avatar?: string;
	address?: string;
	birthDate?: string;
	gender?: string;
};

export const defaultUserProfile: UserProfile = {
	name: 'Salsabilah Rahmadani P',
	email: 'xuxi@gmail.com',
	phone: '081234567890',
	avatar:
		'https://images.unsplash.com/photo-1762170317668-dd2891594658?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=719',
	address: '',
	birthDate: '',
	gender: '',
};

export const getUserProfile = (): UserProfile => {
	if (typeof window === 'undefined') return defaultUserProfile;

	const stored = localStorage.getItem('userProfile');
	if (stored) {
		try {
			return JSON.parse(stored);
		} catch {
			return defaultUserProfile;
		}
	}
	return defaultUserProfile;
};

export const saveUserProfile = (profile: UserProfile): void => {
	if (typeof window === 'undefined') return;
	localStorage.setItem('userProfile', JSON.stringify(profile));
};

export const updateUserProfile = (updates: Partial<UserProfile>): void => {
	const current = getUserProfile();
	const updated = { ...current, ...updates };
	saveUserProfile(updated);
};
