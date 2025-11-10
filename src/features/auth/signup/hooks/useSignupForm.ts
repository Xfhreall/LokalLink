import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { SignupFormData } from '../schemas/signup.schema';
import { signupSchema } from '../schemas/signup.schema';

export const useSignupForm = () => {
	const form = useForm<SignupFormData>({
		resolver: zodResolver(signupSchema),
		defaultValues: {
			fullName: '',
			whatsapp: '',
			password: '',
			confirmPassword: '',
			acceptTerms: false,
		},
	});

	const onSubmit = async (data: SignupFormData) => {
		console.log('Signup data:', data);
		// TODO: Implement signup logic
		// For now, just simulate success
		await new Promise((resolve) => setTimeout(resolve, 1000));
	};

	return {
		form,
		onSubmit,
	};
};
