import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
	type UmkmFormValues,
	umkmFormSchema,
} from '../schemas/umkm-form-schema';

interface UseUmkmFormProps {
	defaultValues?: Partial<UmkmFormValues>;
}

export function useUmkmForm({ defaultValues }: UseUmkmFormProps = {}) {
	const [showMapPicker, setShowMapPicker] = useState(false);

	const form = useForm<UmkmFormValues>({
		resolver: zodResolver(umkmFormSchema),
		defaultValues: {
			namaToko: defaultValues?.namaToko || '',
			namaNarahubung: defaultValues?.namaNarahubung || '',
			telepon: defaultValues?.telepon || '',
			jamBuka: defaultValues?.jamBuka || { hour: 9, minute: 0 },
			jamTutup: defaultValues?.jamTutup || { hour: 17, minute: 0 },
			alamat: defaultValues?.alamat || '',
			pinpoint: defaultValues?.pinpoint || undefined,
		},
	});

	const updateTime = (
		field: 'jamBuka' | 'jamTutup',
		type: 'hour' | 'minute',
		increment: boolean,
	) => {
		const currentValue = form.getValues(field);
		const max = type === 'hour' ? 23 : 59;
		const min = 0;
		const current = currentValue[type];

		let newValue = increment ? current + 1 : current - 1;
		if (newValue > max) newValue = min;
		if (newValue < min) newValue = max;

		form.setValue(field, { ...currentValue, [type]: newValue });
	};

	return {
		form,
		showMapPicker,
		setShowMapPicker,
		updateTime,
	};
}
