import { useState } from 'react';
import {
	mockBusinessProfile,
	mockStoreAddress,
} from '../data/business-mock-data';
import type { BusinessProfile, StoreAddress } from '../types/business';

export const useBusinessProfile = () => {
	const [businessProfile, setBusinessProfile] =
		useState<BusinessProfile>(mockBusinessProfile);
	const [storeAddress, setStoreAddress] =
		useState<StoreAddress>(mockStoreAddress);
	const [isLoading] = useState(false);

	const updateBusinessProfile = (updates: Partial<BusinessProfile>) => {
		setBusinessProfile((prev) => ({ ...prev, ...updates }));
	};

	const updateStoreAddress = (updates: Partial<StoreAddress>) => {
		setStoreAddress((prev) => ({ ...prev, ...updates }));
	};

	return {
		businessProfile,
		storeAddress,
		updateBusinessProfile,
		updateStoreAddress,
		isLoading,
	};
};
