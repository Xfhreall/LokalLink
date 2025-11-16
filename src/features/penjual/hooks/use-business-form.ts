import { useState } from 'react';
import type { BusinessProfile } from '../types/business';

interface UseBusinessFormOptions {
	onSave?: (data: BusinessProfile) => void;
}

export const useBusinessForm = (
	initialData: BusinessProfile,
	options?: UseBusinessFormOptions,
) => {
	const [isEditing, setIsEditing] = useState(false);
	const [formData, setFormData] = useState<BusinessProfile | null>(null);

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

	const handleChange = (field: keyof BusinessProfile, value: string) => {
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
