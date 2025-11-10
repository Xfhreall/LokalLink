import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';
import type { PhoneStepFormData } from '../schemas/phone-step.schema';
import { phoneStepSchema } from '../schemas/phone-step.schema';

export const usePhoneStepForm = () => {
	const navigate = useNavigate();

	const form = useForm<PhoneStepFormData>({
		resolver: zodResolver(phoneStepSchema),
		defaultValues: {
			phone: '',
		},
	});

	const onSubmit = async (data: PhoneStepFormData) => {
		console.log('Phone data:', data);
		await new Promise((resolve) => setTimeout(resolve, 1000));
		navigate({ to: '/step/otp' });
	};

	return {
		form,
		onSubmit,
	};
};
