import { useState } from 'react';
import type { StoreAddress } from '../types/business';

interface UseAddressFormOptions {
	onSave?: (data: StoreAddress) => void;
}

export const useAddressForm = (
	initialData: StoreAddress,
	options?: UseAddressFormOptions,
) => {
	const [isEditing, setIsEditing] = useState(false);
	const [formData, setFormData] = useState<StoreAddress | null>(null);

	const handleEdit = () => {
		setFormData(initialData);
		setIsEditing(true);
	};

	const handleCancel = () => {
		setFormData(null);
		setIsEditing(false);
	};

	const handleSave = () => {
		if (formData) {
			options?.onSave?.(formData);
			setIsEditing(false);
			setFormData(null);
		}
	};

	const handleChange = (field: keyof StoreAddress, value: string | boolean) => {
		if (formData) {
			setFormData({ ...formData, [field]: value });
		}
	};

	const displayData = isEditing && formData ? formData : initialData;

	return {
		isEditing,
		formData,
		displayData,
		handleEdit,
		handleCancel,
		handleSave,
		handleChange,
	};
};
